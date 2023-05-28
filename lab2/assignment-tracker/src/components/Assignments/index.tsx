import { useState } from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import IAssignment from "../../interfaces/IAssignment";

interface Props {
  assignments: IAssignment[]
  deleteAssignment: (title:string) => void
}

export function Assignments({assignments, deleteAssignment}: Props) {
  const [numberCompletedAssignments, setNumberCompletedAssignments] = useState(0)
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{numberCompletedAssignments} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map(a => (
          <Assignment numberCompletedAssignments={numberCompletedAssignments} setNumberCompletedAssignments={setNumberCompletedAssignments} assignment={a} title={a.title} completed={a.completed} deleteAssignment={deleteAssignment}/>
        ))}
        
      </div>
    </section>
  );
}
