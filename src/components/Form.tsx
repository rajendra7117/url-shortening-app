import React, { useState, useContext } from "react";
import useHttp from "../hooks/UseHttp";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../Context/Context";

const Form: React.FC = () => {
  const [enteredInput, setEnteredInput] = useState<string>("");
  const [error, setError] = useState<boolean>();
  const ctx = useContext(Context);
  let id: String = uuidv4();

  const { fetchAPI: fetchFunc, status: status } = useHttp();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput(e.target.value);
    setError(false)
  };
  const submitHandler = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if(enteredInput===""){
      setError(true)
      return
    }

    try {
      const response = await fetchFunc(enteredInput);
      if (response) {
        ctx.addUrl({ id: id, url: enteredInput, shortLink: response });
      }
    } catch (err) {}

    setEnteredInput("");
  };

  return (
    <form className="main-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Shorten a link here"
        onChange={handleInput}
        value={enteredInput}
        className={`${error && 'error-class'}`}
      />
      {error && <p className="error-text">please add a link</p>}
      <button>Shorten it</button>
    </form>
  );
};

export default Form;
