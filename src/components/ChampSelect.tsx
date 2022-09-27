import React, { useState, useEffect } from "react";
import Champion from "./Champion";
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
  num?: number;
  name?: string;
}

interface Champs {
  name: string;
  skin?: Skin;
}

const ChampSelect = ({ role, category, changePage }: Props) => {
  const [champSelected, setChampSelected] = useState<boolean>(false);
  const [champions, setChampions] = useState<Champs[]>([]);
  const [chosenChamp, setChosenChamp] = useState<Champs>({ name: "" });
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);

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
    axios.get(`${API_URL}/${role}/${category}`).then((res) => {
      console.log(res.data);
      setChampions(res.data);
    });
  };

  useEffect(() => {
    if (role && category) {
      setData();
    }
  }, []);

  return (
    <div>
      <h1 className="header">REVEAL YOUR CHAMPION</h1>
      <div className="cardContainer">
        <Card onClick={() => pick(0)}>
          <Flex>
            <Text>Click me!</Text>
          </Flex>
        </Card>

        <Card onClick={() => pick(1)}>
          <Flex>
            <Text>Click me!</Text>
          </Flex>
        </Card>

        <Card onClick={() => pick(2)}>
          <Flex>
            <Text>Click me!</Text>
          </Flex>
        </Card>
      </div>

      <div className="backbtn" onClick={() => changePage(3, "back")}>
        <button className="btn">Back</button>
      </div>

      {champSelected && (
        <Undo onClick={undo}>
          <button className="btn">Undo</button>
        </Undo>
      )}
    </div>
  );
};

export default ChampSelect;

const Card = styled.div`
  border: 2px solid #b78846;
  height: 40vh;
  width: 15vw;
  background: radial-gradient(#003, #000);
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  color: white;
`;

const Undo = styled.div`
  position: absolute;
  top: 75vh;
  left: 47vw;
`;
