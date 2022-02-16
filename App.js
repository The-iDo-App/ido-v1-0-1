import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import Stacks from './app/stack';
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';
import { checkConnected } from './app/services/functions';
import ErrorScreen from './app/screens/NoConnectionScreen';


export default function App() {
  const [connectionStatus, setConnectionStatus] = useState(false);
  checkConnected().then(res => {
    setConnectionStatus(res);
  })

  return (
    <>
    {console.log(BACKEND_DEVURL)}
      <StatusBar />
      {
        connectionStatus ? 
        (
           <Stacks />
        )
        :
        (
           <ErrorScreen />
        )
      }
     
    </>
  );
}

