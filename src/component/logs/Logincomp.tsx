import { VStack, Input, Button, Text, Box } from '@chakra-ui/react';

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ILog {
  username: string;
  password: string;
  submitLogin: () => Promise<void>;
  setusername: React.Dispatch<React.SetStateAction<string>>;
  setpassword: React.Dispatch<React.SetStateAction<string>>;
}

const login = ({
  username,
  password,
  submitLogin,
  setusername,
  setpassword,
}: ILog) => {
  return (
    <VStack align='left' spacing='1rem' width='100%'>
      <Box>
        <Text>Username</Text>
        <Input
          onChange={(e) => setusername(e.target.value)}
          value={username}
          type='text'
        />
      </Box>
      <Box>
        <Text>Password</Text>
        <Input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type='password'
        />
      </Box>
      <Button onClick={submitLogin}>Login</Button>
    </VStack>
  );
};

export default login;





