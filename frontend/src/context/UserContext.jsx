import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/users/usuario', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data); // Si el usuario está autenticado
                } else {
                    window.location.href = 'http://localhost:8080/login';
                }
            } catch (error) {
                console.error('Error al obtener datos del usuario', error);
                window.location.href = 'http://localhost:8080/login';
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};