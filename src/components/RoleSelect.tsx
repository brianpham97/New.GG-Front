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

const RoleSelect = ({ changePage }: Page) => {
  return (
    <div>
      <h1 className="header">SELECT YOUR ROLE</h1>
      <div className="cardContainer">
        <Card>
          <Flex>
            <button
              className="btn"
              onClick={() => changePage(1, "forward", "top")}
            >
              Top
            </button>
            <Bullet>- Does nothing all game until like 20 minutes</Bullet>
            <Bullet>- Never dies, ltierally unkillable</Bullet>
          </Flex>
        </Card>

        <Card>
          <Flex>
            <button
              className="btn"
              onClick={() => changePage(1, "forward", "jung")}
            >
              Jungle
            </button>
            <Bullet>- Gets flamed by everyone on the team</Bullet>
            <Bullet>- Loves big brain macro plays</Bullet>
          </Flex>
        </Card>

        <Card>
          <Flex>
            <button
              className="btn"
              onClick={() => changePage(1, "forward", "mid")}
            >
              Mid
            </button>
            <Bullet>- Probably the one flaming the jungler most</Bullet>
            <Bullet>- Thinks they're so cool with they play</Bullet>
          </Flex>
        </Card>
      </div>

      <div className="cardContainer">
        <Card>
          <Flex>
            <button
              className="btn"
              onClick={() => changePage(1, "forward", "bot")}
            >
              Bot
            </button>
            <Bullet>- Dies to just about everything in the game</Bullet>
            <Bullet>- Won't get to play the game</Bullet>
          </Flex>
        </Card>

        <Card>
          <Flex>
            <button
              className="btn"
              onClick={() => changePage(1, "forward", "supp")}
            >
              Support
            </button>
            <Bullet>- Hides in the back cause they're scared to fight</Bullet>
            <Bullet>- INSERT SOMETHING LATER</Bullet>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default RoleSelect;

const Card = styled.div`
  border: 2px solid #b78846;
  height: 40vh;
  width: 15vw;
  background: radial-gradient(#003, #000);
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bullet = styled.p`
  word-wrap: break-word;
  color: #eee8aa;
  margin: 10px;
`;
