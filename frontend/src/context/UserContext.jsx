// UserContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://dingo-kszy.onrender.com/api/users/usuario', {
                    method: 'GET',
                    credentials: 'include'
                });
                
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    // No redirigir automáticamente, solo log
                    console.log('No se pudo obtener el usuario');
                    setUser(null);
                }
            } catch (error) {
                console.error('Error al obtener datos del usuario', error);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar el contexto de usuario
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe ser usado dentro de un UserProvider');
    }
    return context;
};