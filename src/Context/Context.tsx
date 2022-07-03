import React, { createContext, useState } from "react";
import urlType from "../utils/Alias";

interface ContextInterface {
  urlArray: urlType[];
  addUrl: (urlObj: urlType) => void;
  removeUrl: (id: String) => void;
}

interface props {
    children: React.ReactNode;
  }
export const Context = createContext<ContextInterface>({
  urlArray: [],
  addUrl: (urlObj: urlType) => {},
  removeUrl: (id: String) => {},
});

const ContextProvider: React.FC<props> = ({children}) => {
  const [urlList, setUrlList] = useState<urlType[]>([]);

  const addUrl = (url: urlType) => {
    setUrlList((prev) => [...prev, url]);
  };

  const removeUrl = (id: String) => {
    setUrlList(urlList.filter((url) => url.id !== id));
  };
  const contextValue: ContextInterface = {
    urlArray: urlList,
    addUrl: addUrl,
    removeUrl: removeUrl,
  };
  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  );
};

export default ContextProvider;