import React, { useContext } from "react";
import { Context } from "../Context/Context";
import "./UrlContainer.scss";
import Loader from "./UI/Loader";

const UrlContainer: React.FC = () => {
  const ctx = useContext(Context);

  console.log(ctx.isLoading)

  return (
    <>
      <div className="url-container">
       
        {ctx.isLoading ? <Loader /> :( <ul>
          {ctx.urlArray?.map((url) => (
            <li key={`${url.id}`}>
              <a href={`${url.url}`} target="_blank">
                {url.shortLink}
              </a>
            </li>
          ))}
        </ul>) }
       
      </div>
    </>
  );
};

export default UrlContainer;
