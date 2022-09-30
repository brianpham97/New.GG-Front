import React, { useState, useEffect } from "react";
import Champion from "./Champion";
import Carousel from "../Utility/Carousel";
import { Page, Skin } from "../interface";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../config";

interface Props extends Page {
  role: "top" | "jung" | "mid" | "bot" | "supp" | undefined;
  category: "meta" | "thirst" | undefined;
}

interface Champs {
  name: string;
  skin: Skin;
}

const ChampSelect = ({ role, category, changePage }: Props) => {
  const [champSelected, setChampSelected] = useState<boolean>(false);
  const [champions, setChampions] = useState<Champs[]>([]);
  const [chosenChamp, setChosenChamp] = useState<Champs>({
    name: "",
    skin: { num: 0 },
  });
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);
  const [icons, setIcons] = useState<String[]>(["1296", "1296", "1296"]);

  const undo = (): void => {
    setChampSelected(false);
    setChosenIndex(null);
    setData();
  };

  const pick = (index: number): void => {
    if (champSelected === false) {
      setChampSelected(true);
      setChosenIndex(index);
      setChosenChamp(champions[index]);
    }
  };

  const setData = () => {
    axios.get(`${API_URL}/?category=${category}&role=${role}`).then((res) => {
      console.log(res.data);
      setChampions(res.data);
    });
  };

  useEffect(() => {
    if (role && category) {
      setData();
      if (category === "thirst") {
        setIcons(["4793", "4794", "4804"]);
      } else {
        setIcons(["4645", "4642", "4640"]);
      }
    }
  }, []);

  const card0 = (
    <Card onClick={() => pick(0)}>
      <Flex>
        {!champSelected && <Text>Click me!</Text>}
        <ChampIcon
          image={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/profileicon/${icons[0]}.png`}
        />
      </Flex>
    </Card>
  );

  const card1 = (
    <Card onClick={() => pick(1)}>
      <Flex>
        {!champSelected && <Text>Click me!</Text>}
        <ChampIcon
          image={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/profileicon/${icons[1]}.png`}
        />
      </Flex>
    </Card>
  );

  const card2 = (
    <Card onClick={() => pick(2)}>
      <Flex>
        {!champSelected && <Text>Click me!</Text>}
        <ChampIcon
          image={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/profileicon/${icons[2]}.png`}
        />
      </Flex>
    </Card>
  );

  const back = (
    <div className="backbtn" onClick={() => changePage(3, "back")}>
      <button className="btn">Back</button>
    </div>
  );

  const undoBtn = (
    <div className="undobtn" onClick={undo}>
      <button className="btn">Undo</button>
    </div>
  );

  const champDiv = (
    <Champion name={chosenChamp.name} num={chosenChamp.skin.num} role={role} />
  );

  return (
    <div>
      <h1 className="header">REVEAL YOUR CHAMPION</h1>
      <div className="cardContainer">
        {chosenIndex === 0 ? champDiv : card0}
        {chosenIndex === 1 ? champDiv : card1}
        {chosenIndex === 2 ? champDiv : card2}
      </div>
      {back}
      {champSelected && undoBtn}
      {champSelected && <Carousel category={category} />}
    </div>
  );
};

export default ChampSelect;

interface Styles {
  image: string;
}

const Card = styled.div`
  height: 55vh;
  width: 15vw;
  border: 2px solid #b78846;
  background: radial-gradient(#003, #000);
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChampIcon = styled.div<Styles>`
  width: 45px;
  height: 45px;
  margin: 10px 0;
  background: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  border: 2px solid #b78846;
  box-shadow: -3px 3px 4px rgb(69, 68, 68);
  border-radius: 50%;
`;

const Text = styled.p`
  color: white;
`;
