import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const api = `https://jsonplaceholder.typicode.com/todos`;
// const api = `https://dummyjson.com/products`;

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  // const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const getApi = async (api) => {
    try {
      await axios.get(api).then((res) => {
        setLoading(false);
        setTodos(res.data);
      });
    } catch (error) {
      setTodos([]);

      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getApi(api);
  }, []);

  return (
    <AppContext.Provider
      value={{
        todos,
        loading,
        getApi,
        api,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobal };
