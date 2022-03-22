 import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';
import {Spin} from 'antd';

export const AuthContext = React.createContext();

export default function AuthProvider({children}){
  const history = useHistory();
  const [user,setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
      console.log({user})
      if(user){
        const { displayName, email, uid, photoUrl } = user;
        setUser({
          displayName, email, uid, photoUrl
        })
        setIsLoading(false);
        history.push('/');
      }
      history.push('/login');
    })
    //clean func
    return () => {
      unsubcribed()
    }
  }, [history])



  return (
    <AuthContext.Provider value={{user}}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  )
}
