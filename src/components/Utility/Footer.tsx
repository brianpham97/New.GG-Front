import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const git = (
    <IconTag
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/brianpham97"
    >
      <FaGithub className="icon" />
    </IconTag>
  );

  const linkedIn = (
    <IconTag
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/lbrian-phaml/"
    >
      <FaLinkedin className="icon" />
    </IconTag>
  );

  const insta = (
    <IconTag
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/"
    >
      <FaInstagram className="icon" />
    </IconTag>
  );

  return (
    <footer>
      <Container>
        {git}
        {linkedIn}
        {insta}
      </Container>
    </footer>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
`;

const IconTag = styled.a`
  text-decoration: none;
  color: #c9aa71;
  &:hover {
    text-shadow: 0 0 5px #ffffff80;
  }
`;
