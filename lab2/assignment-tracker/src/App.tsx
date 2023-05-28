import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { assignmentData } from "./database";

function App() {
  const [assignments, setAssignments] = useState(assignmentData)

  const addAssignment = (title: string, dueDate:Date) => {
    const newAssignment = {title, completed: false, deadline:dueDate};
    setAssignments([...assignments, newAssignment]);
    //const clonedArr = assignments.slice();
    //clonedArr.push(newAssignment);
    //setAssignments(clonedArr);
    //setAssignments(assignments.slice().concat(newAssignment));
    
  }
  const deleteAssignment = (title: string) => {
    setAssignments(assignments.filter((a) => a.title != title));
  }
  return (
    <>
      <Header addAssignment={addAssignment}/>
      <Assignments deleteAssignment={deleteAssignment} assignments={assignments}/>
    </>
  );
}

export default App;
