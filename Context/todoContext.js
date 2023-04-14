import { createContext } from "react";
import { app } from '../config/firebase'
import { getFirestore } from "firebase/firestore";
export const todoContext = createContext({});
export const AppProvider = ({ children }) => {
    const db = getFirestore(app)
  return (
    <todoContext.Provider value={{ db }}>
      {children}
    </todoContext.Provider>
  );
};
