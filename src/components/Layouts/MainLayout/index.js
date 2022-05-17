import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Container,Wrapper } from "./style";
const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default MainLayout;
