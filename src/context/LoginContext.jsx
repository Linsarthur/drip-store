import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [logado, setLogado] = useState(false); //Essa informação vai ser mandada para o header da home para renderizar ou não os componentes que precisam estar logados.
  return (
    <>
      <LoginContext.Provider value={{ logado, setLogado }}>
        {children}
      </LoginContext.Provider>
      ;
    </>
  );
};

export default LoginProvider;
