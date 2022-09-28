import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const API_URL = "http://localhost:3001/newgg";
interface Props {
  category: String;
}

interface Length {
  length: number;
}

const Carousel = ({ category }: Props) => {
  const [champs, setChamps] = useState<String[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/?category=${category}`)
      .then((res) => {
        setChamps(res.data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  const map = champs.map((champ, key: number) => {
    const lowerCase = champ.toLowerCase();
    return (
      <ImgContainer key={key}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://u.gg/lol/champions/${lowerCase}/build`}
        >
          <Icon
            src={`http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${champ}.png`}
            alt=""
          />
        </a>
      </ImgContainer>
    );
  });

  return (
    <Slider>
      <Container length={champs.length}>{map}</Container>
    </Slider>
  );
};

export default Carousel;

const Slider = styled.div`
  margin: auto;
  position: relative;
  display: grid;
  place-items: center;
  width: 80%;
  text-align: center;
  overflow: hidden;
`;

const Scroll = (count: number) => keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(calc(-45px * ${count / 2}))
  }
`;

const Container = styled.div<Length>`
  display: flex;
  align-items: center;
  height: 60px;
  margin-top: 20px;
  background-image: url("https://lolstatic-a.akamaihd.net/frontpage/apps/prod/clash-2018/en_US/a46e742ae82f9d4f9db8e34ba57873e513e727b7/assets/static/img/backgrounds/redeemed-bg.jpg");
  background-position: center;
  background-size: cover;
  border: 1px solid #b78846;
  width: (${(props) => `calc(45px*${props.length})`});
  animation: ${(props) => Scroll(props.length)} 60s linear infinite;
  cursor: pointer;
  &:hover {
    animation-play-state: paused;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  margin-left: 10px;
  width: 45px;
  height: 45px;
  border: 2px solid #b78846;
  border-radius: 50%;
  box-shadow: -3px 3px 4px rgb(69, 68, 68);

  &:hover {
    transform: scale(1.04);
  }
`;

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;
