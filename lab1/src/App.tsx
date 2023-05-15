import Viewer from "./components/Viewer";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const cities = ["Vancouver", "London", "Paris", "Burnaby"]
  const [selectedIndex, setSelectedIndex] = useState(-1)
  
  return (
    <>
      <Viewer city={cities[selectedIndex]} selectedIndex={selectedIndex}/>
      <ListGroup cities={cities} selectedIndex={selectedIndex} setSelectedIndex = {() => selectedIndex}/>
    </>
  );
}

export default App;
