import React from "react";

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
      <div onClick={() => changePage(1, "forward", "top")}>Top</div>
      <div onClick={() => changePage(1, "forward", "jung")}>Jungle</div>
      <div onClick={() => changePage(1, "forward", "mid")}>Mid</div>
      <div onClick={() => changePage(1, "forward", "bot")}>Bot</div>
      <div onClick={() => changePage(1, "forward", "supp")}>Support</div>
    </div>
  );
};

export default RoleSelect;
