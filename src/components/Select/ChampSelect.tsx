import React, { useState, useEffect } from "react";
import Champion from "./Champion";
import Carousel from "../Utility/Carousel";
import styled from "styled-components";
import axios from "axios";

const API_URL = "http://localhost:3001/newgg";

interface Params {
  role: string;
  category: string;
}

interface Props extends Params {
  changePage: (
    page: number,
    direction: "forward" | "back",
    role?: any,
    category?: any
  ) => void;
}

interface Skin {
  num: number;
  name?: string;
}

interface Champs {
  name: string;
  skin: Skin;
}

interface Styles {
  image: string;
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
    <Undo onClick={undo}>
      <button className="btn">Undo</button>
    </Undo>
  );

  const champDiv = (
    <Champion
      name={chosenChamp.name}
      num={chosenChamp.skin.num}
      role={role}
      category={category}
    />
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

const Undo = styled.div`
  position: absolute;
  top: 85%;
  right: 5vw;
`;
