import React from "react";
import { Page } from "../interface";
import styled from "styled-components";

const CategorySelect = ({ changePage }: Page) => {
  const metaCard = (
    <MetaCard onClick={() => changePage(2, "forward", "", "meta")}>
      <Button>Meta</Button>
    </MetaCard>
  );

  const thirstCard = (
    <ThirstCard onClick={() => changePage(2, "forward", "", "thirst")}>
      <Button>Thirst</Button>
    </ThirstCard>
  );

  const back = (
    <div className="backbtn" onClick={() => changePage(2, "back")}>
      <button className="btn">Back</button>
    </div>
  );

  return (
    <div>
      <h1 className="header">SELECT YOUR PREFERENCE</h1>
      <Container>
        {metaCard}
        {thirstCard}
      </Container>
      {back}
    </div>
  );
};

export default CategorySelect;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const MetaCard = styled.div`
  height: 60vh;
  width: 35vw;
  background-image: url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_10.jpg");
  background-position: center;
  background-size: cover;
  border: 2px solid #b78846;
  box-shadow: -3px 3px 4px rgb(69, 68, 68);
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const ThirstCard = styled(MetaCard)`
  background-image: url("https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Yuumi_11.jpg");
`;

const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
`;
