'use client';

import { useMediaQuery } from '@mantine/hooks';
import { Flex } from '@mantine/core';

import { Notifications } from '@mantine/notifications';

import signupImage from './_assets/loginImage.png';
import Signup from './_components/Signup';
import logo from './_assets/logo.png';

export default function Page() {
  const isMobile = useMediaQuery('(max-width: 768px)'); 

  return (
    <div
      style={{
        backgroundColor: 'teal',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Notifications />
      <Flex
        align="center"
        justify="center"
        direction={isMobile ? 'column' : 'row'} 
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          width: '100%',
          maxWidth: '800px',
          gap: '20px', 
        }}
      >
        <Flex direction="column" align="flex-start" style={{ flex: 1, minWidth: isMobile ? '100%' : '50%' }}>
          <img
            src={logo.src}
            alt="logo"
            style={{            
              width: 100,
              height: 'auto',
              marginBottom: '10px',
              marginLeft: isMobile ? '0' : '20px',
            }}
          />
          <img
            src={signupImage.src}
            alt="loginImage"
            style={{
              width: '100%',
              maxWidth: isMobile ? 250 : 400, 
              height: 'auto',
              marginLeft: isMobile ? '20%' : '20px',
            }}
          />
        </Flex>

        <Flex style={{ flex: 1, minWidth: isMobile ? '100%' : '50%', width: '100%',  }}>
          <Signup />
        </Flex>
      </Flex>
    </div>
  );
}
