import React, {useState} from "react";

const UrlItem: React.FC<{ url: String; id: String; shortUrl: String, key: React.Key }> = ({
  url,
  id,
  shortUrl,
  key
}) => {
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
    <li  >
      <input id={`${id}`} value={`${url}`} readOnly />
      <div>
        <a href={`${url}`} target="_blank">
          {shortUrl}
        </a>
        <button onClick={() => copyFunction(this, url, id)}>
          {copied ? "copied" : "copy"}
        </button>
      </div>
    </li>
  );
};

export default UrlItem;
