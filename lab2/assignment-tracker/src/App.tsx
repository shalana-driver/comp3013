import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [inputBox, setInputBox] = useState('')
  const [assignments, setAssignments] = useState([''])
  return (
    <>
      <Header inputBox={inputBox} setInputBox={setInputBox} assignments={assignments} setAssignments={setAssignments}/>
      <Assignments assignments={assignments} setAssignments={setAssignments}/>
    </>
  );
}

export default App;
