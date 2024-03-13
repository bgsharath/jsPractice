import React from "react";

const UserContext = React.createContext('Sharath')

const UserProveider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProveider,UserConsumer}
export default UserContext