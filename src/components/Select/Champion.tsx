import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Attributes } from "../interface";

const Champion = ({ name, num, role }: Attributes) => {
  const [keyStone, setKeyStone] = useState<string>("");
  const [spell, setSpell] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const ref: any = useRef();

  const openModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.clientY < ref.current.clientHeight + 50) {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (role === "top") {
      setKeyStone("7204_Resolve");
      setSpell("Teleport");
      return;
    }

    if (role === "jung") {
      setKeyStone("7200_Domination");
      setSpell("Smite");
      return;
    }

    if (role === "mid") {
      setKeyStone("7202_Sorcery");
      setSpell("Dot");
      return;
    }

    if (role === "bot") {
      setKeyStone("7201_Precision");
      setSpell("Haste");
      return;
    }

    if (role === "supp") {
      setKeyStone("7203_Whimsy");
      setSpell("Exhaust");
      return;
    }
  }, []);

  const openImage = (
    <div className="overlay" onClick={closeModal}>
      <img
        onClick={closeModal}
        className="modal"
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${num}.jpg`}
        alt=""
      />
    </div>
  );

  const runes = (
    <RuneIcon>
      <img
        className="rune"
        src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${keyStone}.png`}
        alt=""
      />
    </RuneIcon>
  );

  const guide = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://u.gg/lol/champions/${name.toLowerCase()}/build`}
    >
      <ChampIcon
        icon={`http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${name}.png`}
      />
    </a>
  );

  const summs = (
    <SummContainer>
      <SummIcon>
        <img
          className="summ"
          src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/Summoner${spell}.png`}
          alt=""
        />
      </SummIcon>
      <SummIcon2>
        <img
          className="summ"
          src="http://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/SummonerFlash.png"
          alt=""
        />
      </SummIcon2>
    </SummContainer>
  );

  return (
    <div>
      {modal ? openImage : null}
      <Card
        image={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${name}_${num}.jpg`}
        onClick={openModal}
        ref={ref}
      >
        <Container>
          <ChampName>{name}</ChampName>
          <Content>
            {runes}
            {guide}
            {summs}
          </Content>
        </Container>
      </Card>
    </div>
  );
};

export default Champion;

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

interface Styles {
  image?: string;
  icon?: string;
}

const Card = styled.div<Styles>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 55vh;
  width: 15vw;
  background: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  border: 2px solid #b78846;
  cursor: pointer;
  animation-name: ${fadeIn};
  animation-duration: 2.5s;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  background: radial-gradient(#003, #000);
  border-top: 2px solid #b78846; ;
`;

const ChampName = styled.h3`
  align-self: center;
  font-size: 26px;
  margin-bottom: 4px;
  color: white;
`;

const RuneIcon = styled.div<Styles>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 30px;
  height: 30px;
  border: 1px solid #b78846;
  border-radius: 50%;
  background-color: radial-gradient(#003, #000);
`;

const ChampIcon = styled.div<Styles>`
  width: 45px;
  height: 45px;
  margin: 2px 0 4px 4px;
  background: ${(props) => `url(${props.icon})`};
  background-position: center;
  background-size: cover;
  border: 2px solid #b78846;
  border-radius: 50%;
`;

const SummContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SummIcon = styled.div<Styles>`
  background: ${(props) => `url(${props.icon})`};
  max-width: 25px;
  max-height: 25px;
  margin-right: 4px;
  border: 1px solid #b78846;
`;

const SummIcon2 = styled.div<Styles>`
  background: ${(props) => `url(${props.icon})`};
  max-width: 25px;
  max-height: 25px;
  border: 1px solid #b78846;
`;
