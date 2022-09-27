import React from "react";
import styled from "styled-components";

interface Page {
  changePage: (
    page: number,
    direction: "forward" | "back",
    role?: any,
    category?: any
  ) => void;
}

const CategorySelect = ({ changePage }: Page) => {
  return (
    <div>
      <h1 className="header">SELECT YOUR PREFERENCE</h1>
      <Container>
        <MetaCard onClick={() => changePage(2, "forward", "", "meta")}>
          <Button>Meta</Button>
        </MetaCard>

        <ThirstCard onClick={() => changePage(2, "forward", "", "thirst")}>
          <Button>Thirst</Button>
        </ThirstCard>
      </Container>

      <div className="backbtn" onClick={() => changePage(2, "back")}>
        <button className="btn">Back</button>
      </div>
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
  border: 2px solid #b78846;
  height: 60vh;
  /* padding-bottom: 30vh; */
  width: 35vw;
  background-image: url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_10.jpg");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const ThirstCard = styled.div`
  border: 2px solid #b78846;
  height: 60vh;
  width: 35vw;
  background-image: url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_11.jpg");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
`;
