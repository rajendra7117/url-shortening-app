import React, { createContext, useState } from "react";
import urlType from "../utils/Alias";

interface ContextInterface {
  urlArray: urlType[];
  addUrl: (urlObj: urlType) => void;
  removeUrl: (id: String) => void;
  isLoading: boolean;
  isError: boolean;
  toggleLoading: () => void,
  setError: () => void,
  clearError: () => void
}

interface props {
  children: React.ReactNode;
}
export const Context = createContext<ContextInterface>({
  urlArray: [],
  addUrl: (urlObj: urlType) => {},
  removeUrl: (id: String) => {},
  isLoading: false,
  isError: false,
  toggleLoading : () => {},
  setError: () => {},
  clearError: () => {}
});

const ContextProvider: React.FC<props> = ({ children }) => {
  const [urlList, setUrlList] = useState<urlType[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const addUrl = (url: urlType) => {
    setUrlList((prev) => [...prev, url]);
  };

  const removeUrl = (id: String) => {
    setUrlList(urlList.filter((url) => url.id !== id));
  };

  const toggleLoad = () => {
    setLoading(prev => !prev)
  }

  const createError = () => {
    setError(true)
  }

  const removeError = () => {
      setError(false)
  }

  const contextValue: ContextInterface = {
    urlArray: urlList,
    addUrl: addUrl,
    removeUrl: removeUrl,
    isLoading: loading,
    isError: error,
  toggleLoading: toggleLoad,
  setError: () => createError,
  clearError: () => removeError
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
