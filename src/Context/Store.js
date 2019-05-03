import React, { useState } from "react";

export const ColorFillContext = React.createContext("#fff");
export const ModalContext = React.createContext(false);
export const UsernameContext = React.createContext("");
export const PasswordContext = React.createContext("");
export const RegisterContext = React.createContext(false);

const Store = ({ children }) => {
  const [colorFill, setColorFill] = useState("#fff");
  const [modal, setmodal] = useState(false);

  const [register, setRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ColorFillContext.Provider value={[colorFill, setColorFill]}>
      <ModalContext.Provider value={[modal, setmodal]}>
        <UsernameContext.Provider value={[username, setUsername]}>
          <PasswordContext.Provider value={[password, setPassword]}>
            <RegisterContext.Provider value={[register, setRegister]}>
              {children}
            </RegisterContext.Provider>
          </PasswordContext.Provider>
        </UsernameContext.Provider>
      </ModalContext.Provider>
    </ColorFillContext.Provider>
  );
};

export default Store;
