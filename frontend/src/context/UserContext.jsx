import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Hardcodeamos un usuario de prueba
    const hardcodedUser = {
        _id: "676321744d7321e753bb0b33",
        userName: "Last",
        email: "last@gmail.com",
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
