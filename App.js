import React from 'react';
import { StatusBar } from 'react-native';
import Stacks from './app/stack';
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';



export default function App() {
  return (
    <>
    {console.log(BACKEND_DEVURL)}
      <StatusBar />
      <Stacks />
    </>
  );
}

