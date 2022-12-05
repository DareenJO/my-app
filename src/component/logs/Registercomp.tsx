import { Heading ,Box,
    Text,
    Link,
    VStack,
   
    Grid,
  
    Flex,
    Input,
    Button } from '@chakra-ui/react';
import React from 'react';
interface Ilog{
    username : string 
    password : string 
    submitLog: ()=> Promise<void>;
    setusername:React.Dispatch<React.SetStateAction<string>>
    setpassword:React.Dispatch<React.SetStateAction<string>>
}
const Login =({username,password,submitLog,setusername,setpassword}:Ilog)=>{

return(
    <VStack>
    <Heading>Register</Heading>
    <VStack align='left'>
    <Text>Username</Text>
    <Input onChange={(e)=>setusername(e.target.value)} type='text' value={username}></Input>
    
    <Text>Password </Text>
    <Input onChange={(e)=>setpassword(e.target.value)} type='password' value={password}></Input>
    <Button onClick={submitLog} >Login</Button>
    </VStack>
    </VStack>
    
)
    



}


export default Login;