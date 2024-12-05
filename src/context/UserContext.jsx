import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [supportLevel, setSupportLevel] = useState(1);
    const [adminName, setAdminName] = useState("");

    return (
        <UserContext.Provider value={{
            userEmail, setUserEmail,
            userPassword, setUserPassword,
            supportLevel, setSupportLevel,
            adminName, setAdminName
        }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;