import React from 'react'

const UserContext = React.createContext()  //1st step of create context

const UserProvider = UserContext.Provider  //2nd step of create the provider
const UserConsumer = UserContext.Consumer  //3rd step of create the Consumer

export {UserProvider,UserConsumer}