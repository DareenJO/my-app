import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logcomp from './component/logs/Logincomp';
import ProtectedRoute from './component/ProtectedRoute';
import BlogHome from './pages/blog';
import { Logpage } from './pages/Logpage';
import { Registerpage } from './pages/Registerpage'

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/login' element={<Logpage />} />
          <Route path='/register' element={<Registerpage />} />
           <Route element={<ProtectedRoute />}>
            <Route path='/' element={<BlogHome />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}; 