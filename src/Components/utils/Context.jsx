import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../../reducers/reducer";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = { 
  theme: "light", 
  favs: lsFavs,
  dentists: []
};

export const ContextGlobal = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTISTS", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);
  

  useEffect(() => {
    if (state.theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useGlobalStates = () => useContext(ContextGlobal);
