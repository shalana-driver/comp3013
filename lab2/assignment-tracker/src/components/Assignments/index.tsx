import { useState } from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignments: string[]
  setAssignments: (assignments: string[]) => void;
}

export function Assignments({assignments, setAssignments}: Props) {
  const [completedAssignments, setCompletedAssignments] = useState(0)
  const getAssignments = (assignments: string[]) => {
    if(assignments[0]=== '') {
      assignments.shift()
    }
    return (
      assignments.map((title) => (
          <Assignment title={title} completedAssignments={completedAssignments} setCompletedAssignments={setCompletedAssignments} assignments={assignments} setAssignments={setAssignments}/>
      )))
    
}
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignments} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {getAssignments(assignments)}
        
      </div>
    </section>
  );
}
