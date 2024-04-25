

import { createContext, useContext, useReducer } from "react";

import { UserTypes } from "../types/UserTypes";

// const BASE_URL = "localhost:3000";
const BASE_URL = "https://fare-rate-api-2e26b3504be5.herokuapp.com"


interface AuthContextType {
  user: UserTypes | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => void;
  storedUser: UserTypes | null;
  logout: () => void;
 
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
interface InitialStateType {
  user: UserTypes | null;
  isLoading: boolean;
  error: string | null;
  token: string | null;
}
const initialState: InitialStateType = {
  user: null,
  isLoading: false,
  error: null,
  token: null,
};
function reducer(
  state: InitialStateType,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "login/loading":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "login/success":
      localStorage.setItem("user", JSON.stringify(action.payload.user.user));
      localStorage.setItem("token", JSON.stringify(action.payload.user.token));
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case "login/error":

      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case "register/success":
        return {
            ...state,
            isLoading: false,
            user: action.payload,
            error: null,
        };
    case "logout":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");

  async function login(email: string, password: string) {
    
    dispatch({
      type: "login/loading",
      payload: null,
    });
    try {
     const res = fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await (await res).json();
      
      console.log(data);
      if(data.statusCode === 500){
        throw new Error(data.message)
      }
      dispatch({
        type: "login/success",
        payload: { user: data },
     });
    } catch (error: any) {
      dispatch({ type: "login/error", payload: { error: error.message } });
    }
  }
  
  async function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "logout", payload: null });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        storedUser,
        login,
        logout,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
