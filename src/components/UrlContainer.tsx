import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import "./UrlContainer.scss";
import Loader from "./UI/Loader";
import UrlItem from "./UrlItem";

const UrlContainer: React.FC = () => {
  const ctx = useContext(Context);
  const [copied, setCopied] = useState<boolean>(false);
  const copyFunction= (e:any, url:String, id:String) => {
   let inp:HTMLInputElement = document.getElementById(`${id}`) as HTMLInputElement;
   inp.select();

    document.execCommand('copy');
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className="url-container">
        {ctx.isLoading ? (
          <Loader />
        ) : (
          <ul className="url-list">
            {ctx.urlArray?.map((url) => (
              <UrlItem key={`${url.id}`} id={url.id} url={url.url} shortUrl={url.shortLink}/>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default UrlContainer;
