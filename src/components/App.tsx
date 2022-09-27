import React, { useState, createContext } from "react";
import RoleSelect from "./RoleSelect";
import CategorySelect from "./CategorySelect";
import ChampSelect from "./ChampSelect";

interface PageChanger {
  changePage: (
    page: number,
    direction: "forward" | "back",
    role?: any,
    category?: any
  ) => void;
}

const pager = createContext<PageChanger | null>(null);

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [role, setRole] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const changePage = (
    page: number,
    direction: "forward" | "back",
    role: any,
    category?: any
  ): void => {
    if (page === 1) {
      if (direction === "forward") {
        setPage(2);
        setRole(role);
      }
    }

    if (page === 2) {
      if (direction === "forward") {
        setPage(3);
        setCategory(category);
      } else {
        setPage(1);
        setRole("");
      }
    }

    if (page === 3) {
      if (direction === "back") {
        setPage(2);
        setCategory("");
      }
    }
  };

  return (
    <div>
      {page === 1 && <RoleSelect changePage={changePage} />}
      {page === 2 && <CategorySelect changePage={changePage} />}
      {page === 3 && (
        <ChampSelect role={role} category={category} changePage={changePage} />
      )}
    </div>
  );
};

export default App;
