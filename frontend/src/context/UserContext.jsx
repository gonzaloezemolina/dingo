import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Hardcodeamos un usuario de prueba
    const hardcodedUser = {
        _id: "676334c786e014948ea2269b",
        userName: "Sofia",
        email: "sofia@gmail.com",
        role: "Diseño",
        contacts: [],
        tasks: [],
        expenses: [],
        budgets: []
    };

    const [user, setUser] = useState(hardcodedUser);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};
