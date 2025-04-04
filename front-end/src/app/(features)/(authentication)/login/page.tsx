"use client";

import { Flex } from "@mantine/core";

import logo from "./_assets/logo.png";
import loginImage from "./_assets/loginImage.png";
import Login from "./_components/Login";

export default function LoginPage() {
  return (
    <div style={{ 
      backgroundColor: "teal", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      padding: "20px" 
    }}>
      <Flex 
        align="center" 
        justify="center" 
        direction="row" 
        style={{
          backgroundColor: "white", 
          borderRadius: "16px", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          paddingRight: "40px",
          width: "100%",
          maxWidth: "800px",  
          flexWrap: "wrap", 
        }}
      >
        <Flex direction="column" align="center" style={{ flex: 1 }}>
          <img src={logo.src} alt="logo" style={{ 
            width: 100, 
            height: "auto",
            marginRight: "60%" 
            }} />
          <img src={loginImage.src} alt="loginImage" style={{ width: "100%", maxWidth: 400, height: "auto" }} />
        </Flex>
        <Login />
      </Flex>
    </div>
  );
}

