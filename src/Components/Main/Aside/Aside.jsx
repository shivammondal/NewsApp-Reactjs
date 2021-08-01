import React from "react";
import "./Aside_style.css";
import Tabs from "./Tabs";

const Aside = () => {
  const categList = [
    "Sports",
    "Buisness",
    "Finance",
    "Technology",
    "Politics",
    "Health",
    'Economic',
    'Science',
    'Chummma',
    'Bumma'
  ];

  return (
    <>
      <aside className="categories">
        <header className="head">Categories</header>
        <div className="category-list">
          {categList.map((val, index) => {
            return <Tabs name={val}
            key={index} />;
          })}
        </div>
      </aside>
    </>
  );
};

export default Aside;
