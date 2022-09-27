import React, { useState, useEffect } from "react";
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
  console.log("role: ", role, "category: ", category);
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
      <div onClick={() => pick(0)}>
        {chosenIndex === 0 ? chosenChamp.name : "Champ 0"}
      </div>
      <div onClick={() => pick(1)}>
        {chosenIndex === 1 ? chosenChamp.name : "Champ 1"}
      </div>
      <div onClick={() => pick(2)}>
        {chosenIndex === 2 ? chosenChamp.name : "Champ 1"}
      </div>
      <div onClick={() => changePage(3, "back")}>Back</div>
      <div onClick={undo}>Undo</div>
    </div>
  );
};

export default ChampSelect;
