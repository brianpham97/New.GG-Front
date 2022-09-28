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
      <FaGithub />
    </IconTag>
  );

  const linkedIn = (
    <IconTag
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/lbrian-phaml/"
    >
      <FaLinkedin />
    </IconTag>
  );

  const insta = (
    <IconTag
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/"
    >
      <FaInstagram />
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
`;
