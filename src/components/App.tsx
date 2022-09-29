import React, { useState } from "react";
import Navbar from "./Utility/Navbar";
import RoleSelect from "./Select/RoleSelect";
import CategorySelect from "./Select/CategorySelect";
import ChampSelect from "./Select/ChampSelect";
import Footer from "./Utility/Footer";

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [role, setRole] = useState<
    "top" | "jung" | "mid" | "bot" | "supp" | undefined
  >();
  const [category, setCategory] = useState<"meta" | "thirst" | undefined>();

  const changePage = (
    page: number,
    direction?: "forward" | "back",
    role?: "top" | "jung" | "mid" | "bot" | "supp" | undefined,
    category?: "meta" | "thirst" | undefined
  ): void => {
    if (page === 0) {
      setPage(1);
    }

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
      }
    }

    if (page === 3) {
      if (direction === "back") {
        setPage(2);
      }
    }
  };

  return (
    <div>
      <Navbar changePage={changePage} />
      {page === 1 && <RoleSelect changePage={changePage} />}
      {page === 2 && <CategorySelect changePage={changePage} />}
      {page === 3 && (
        <ChampSelect role={role} category={category} changePage={changePage} />
      )}
      <Footer />
    </div>
  );
};

export default App;
