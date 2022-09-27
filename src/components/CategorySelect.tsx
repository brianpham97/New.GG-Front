import React from "react";

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
      <div onClick={() => changePage(2, "forward", "", "meta")}>Meta</div>
      <div onClick={() => changePage(2, "forward", "", "thirst")}>Thirst</div>
      <div onClick={() => changePage(2, "back")}>Back</div>
    </div>
  );
};

export default CategorySelect;
