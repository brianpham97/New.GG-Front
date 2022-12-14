import React from "react";
import styled from "styled-components";
import { Page } from "../interface";

const Navbar = ({ changePage }: Page) => {
  const links = (
    <Links>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://u.gg/"
        className="link"
      >
        U.GG
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://blitz.gg/"
        className="link"
      >
        Blitz.GG
      </a>
    </Links>
  );

  return (
    <div>
      <Container>
        <Home onClick={() => changePage(0)}>
          New
          <span className="GG">.GG</span>
        </Home>
        {links}
      </Container>
    </div>
  );
};

export default Navbar;

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(#003, #000);
  height: 6vh;
`;

const Home = styled.h2`
  margin-left: 20px;
  font-size: 36px;
  color: white;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 5px #ffffff80;
    transform: scale(1.01);
  }
`;

const Links = styled.div`
  display: flex;
  font-size: 18px;
  &:nth-child(2) {
    margin-right: 35px;
  }
`;
