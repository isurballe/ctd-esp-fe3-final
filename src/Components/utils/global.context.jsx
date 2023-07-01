import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const dentistsInitialState = {
                theme: "light", 

                data: [],

                dentist: {},

                favs: JSON.parse(localStorage.getItem('favs')) || []
}



export const ContextGlobal = createContext();

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const dentistsReducer = (state, action) => {
  switch(action.type){
    case 'CHANGE_THEME' :
      return {...state,theme: action.payload === state.theme ?  "light" : "dark"}
    case 'GET_LIST' :
        return {...state, data:  action.payload}
    case 'GET_DENTIST':
        return {...state, dentist: action.payload}
    case 'ADD_FAV' :
          return {...state, favs: [...state.favs, action.payload]}
    default:
        throw new Error()
  }
}


export const ContextProvider = ({ children }) => {
  
  const [dentistsStates, dentistsDispatch] = useReducer(dentistsReducer, dentistsInitialState)

  useEffect(() => {
    axios(apiUrl)
    .then((res) => dentistsDispatch({type: 'GET_LIST', payload: res.data}));
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(dentistsStates.favs))
  }, [dentistsStates.favs]); //

  return (
    <ContextGlobal.Provider value={{
        dentistsStates, dentistsDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};


export default ContextGlobal;

export const useGlobalContext = () => useContext(ContextGlobal)
