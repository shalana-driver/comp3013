import { useState } from "react";
import ListItem from "./ListItem";

interface Props {
  setSelectedIndex: (index: number) => number
  selectedIndex: number
  cities: string[]
}

function ListGroup({cities, selectedIndex, setSelectedIndex}: Props) {
  const handleClick = (index: number) => {
    setSelectedIndex(index);
    alert(`${cities[selectedIndex]} was clicked`);
  };
  const getSelectedIndex = (index: number) => {
    return selectedIndex === index
      ? "list-group-item active"
      : "list-group-item";
  };
  if (cities.length === 0) {
    return <h3>No cities to select!</h3>;
  }

  return (
    <ul className="list-group">
      {cities.map((city, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          className={getSelectedIndex(index)}
        >
          {city}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
