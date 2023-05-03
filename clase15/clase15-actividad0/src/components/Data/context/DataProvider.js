import React from "react";
import { useEffect, useState } from "react";

export const DataContext = React.createContext([]);

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

export default DataContextProvider;
