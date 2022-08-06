import React from "react";

type ContextInterface = {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>
  filtered?: never[];
  setFiltered?: React.Dispatch<React.SetStateAction<never[]>>;
}

export const ApiContext = React.createContext<ContextInterface>({});

interface Props {
  children: JSX.Element;
}

export const ApiContextProvider: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState([]);

  return (
    <ApiContext.Provider value={{ search, setSearch, filtered, setFiltered }}>
      {children}
    </ApiContext.Provider>
  );
};
