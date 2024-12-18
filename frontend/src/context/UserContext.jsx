import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Hardcodeamos un usuario de prueba
    const hardcodedUser = {
        _id: "6762d083886d8030d49745a3",
        userName: "usuariofalso",
        email: "userfalse@gmail.com",
        role: "Edición",
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
