import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [User, setUser] = useState(null);


    return (
        <AuthContext.Provider value={{ setUser: setUser, User: User }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
