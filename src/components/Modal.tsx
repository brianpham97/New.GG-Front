import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  num: number;
  closeModal: any;
}

const Modal = ({ name, num, closeModal }: Props) => {
  return (
    <Overlay onClick={closeModal}>
      <Container onClick={closeModal}>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${num}.jpg`}
          alt=""
        />
      </Container>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
