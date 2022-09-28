import React from "react";
import styled from "styled-components";

interface Page {
  changePage: (
    page: number,
    direction?: "forward" | "back",
    role?: any,
    category?: any
  ) => void;
}

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
    <Container>
      <Home onClick={() => changePage(0)}>
        New<span className="GG">.GG</span>
      </Home>
      {links}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(#003, #000);
  height: 8vh;
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
