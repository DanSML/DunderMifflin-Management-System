import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { date } from "../util/date";

interface UserProps {
  userId: number,
  userName: string,
  userPassword: string,
  userEmail: string,
  userDepartment: string,
  userCreatedAt: string,
}

type InitialUserProps = Omit<UserProps, 'userCreatedAt' | 'userId'>
type VerifyUser = Omit<InitialUserProps, 'userEmail' | 'userDepartment' >

interface UserContextProps {
  users: UserProps[],
  userLogged: UserProps,
  blankUser: UserProps,

  setUserLogged: (props: UserProps) => void
  handleAddUser: (props: InitialUserProps) => void,
  handleGetUserEntry: (props: VerifyUser) => void,
}

export const UserContext = createContext({} as UserContextProps);

const UserContextProvider: React.FC = ( {children} )=> {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [blankUser, setBlankUser]= useState<UserProps>({} as UserProps);
  const [userLogged, setUserLogged] = useState<UserProps>({} as UserProps);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get('/users');
      setUsers(response.data);
    }
    getUsers();
  }, []);

  async function handleAddUser(newUser: InitialUserProps) {
    try {
      const response = await api.post('/users', {
        ...newUser,
        userCreatedAt: date.format(new Date())
      });

      setUsers([
        ...users,
        response.data
      ]);
  
    } catch (err) {
      toast.error(`Couldn't create new account`);
    }
  }

  function handleGetUserEntry(userEntry: VerifyUser){
    try {
      users.map((user) => {
        if (user.userName === userEntry.userName) {
          if (user.userPassword === userEntry.userPassword){
            toast.success(`Welcome ${userEntry.userName}`);
            setUserLogged(user);
          }
        }
      });

    } catch (err) {

      toast.error(`Couldn't find user entry on database`);
      
    }
  }

  return (
    <UserContext.Provider
      value={{
        users,
        userLogged,
        blankUser,

        setUserLogged,
        handleAddUser,
        handleGetUserEntry
      }}
    >

      {children}
    </UserContext.Provider>
  )
}


export { UserContextProvider }