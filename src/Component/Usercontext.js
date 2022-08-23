import React from "react";

const UserContext=React.createContext('Hello I am default value of Context');
const Provider=UserContext.Provider;
const Consumer=UserContext.Consumer;

export { Provider , Consumer}
export default UserContext