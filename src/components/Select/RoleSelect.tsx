import React from "react";
import styled from "styled-components";
import { Page } from "../interface";

const RoleSelect = ({ changePage }: Page) => {
  const top = (
    <Card>
      <Flex>
        <button className="btn" onClick={() => changePage(1, "forward", "top")}>
          Top
        </button>
        <Bullet>- Does nothing all game until like 20 minutes</Bullet>
        <Bullet>- Never dies, ltierally unkillable</Bullet>
      </Flex>
    </Card>
  );

  const jungle = (
    <Card>
      <Flex>
        <button
          className="btn"
          onClick={() => changePage(1, "forward", "jung")}
        >
          Jungle
        </button>
        <Bullet>- Gets flamed by everyone on the team</Bullet>
        <Bullet>- Doesn't gank any lanes, farms for next game</Bullet>
      </Flex>
    </Card>
  );

  const mid = (
    <Card>
      <Flex>
        <button className="btn" onClick={() => changePage(1, "forward", "mid")}>
          Mid
        </button>
        <Bullet>- Tells team to wait for the 0/10 power spike</Bullet>
        <Bullet>
          - Thinks they're the best player on the team, probably trash{" "}
        </Bullet>
      </Flex>
    </Card>
  );

  const bot = (
    <Card>
      <Flex>
        <button className="btn" onClick={() => changePage(1, "forward", "bot")}>
          Bot
        </button>
        <Bullet>- Dies to just about everything in the game</Bullet>
        <Bullet>- Won't get to play the game</Bullet>
      </Flex>
    </Card>
  );

  const support = (
    <Card>
      <Flex>
        <button
          className="btn"
          onClick={() => changePage(1, "forward", "supp")}
        >
          Support
        </button>
        <Bullet>- Hides in the back cause they're scared to fight</Bullet>
        <Bullet>- No one cares if you die, you're probably irrelevant</Bullet>
      </Flex>
    </Card>
  );

  return (
    <div>
      <h1 className="header">SELECT YOUR ROLE</h1>
      <div className="cardContainer">
        {top}
        {jungle}
        {mid}
      </div>
      <div className="cardContainer">
        {bot}
        {support}
      </div>
    </div>
  );
};

export default RoleSelect;

const Card = styled.div`
  border: 2px solid #b78846;
  height: 35vh;
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
