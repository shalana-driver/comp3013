import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import {BsFillCheckCircleFill} from "react-icons/bs"
import { useState } from "react";

interface Props {
  title: string;
  completedAssignments: number;
  setCompletedAssignments: (completedAssignments: number) => void;
  assignments: string[];
  setAssignments: (assignments: string[]) => void;
}

export function Assignment({title, completedAssignments, setCompletedAssignments, assignments, setAssignments}: Props) {
  const [check, setCheck] = useState(-1);
  const getCheck = (check: number) => {
    return check === -1
      ? <div />
      : <BsFillCheckCircleFill size={20}/>
  };
  const getTextCompleted = (check: number) => {
    return check === -1
      ? <p>{title}</p>
      : <p className={styles.textCompleted}>{title}</p>
  };
  const getCompletedAssignments = (check: number) => {
    return check === 1
    ? setCompletedAssignments(completedAssignments-1)
    : setCompletedAssignments(completedAssignments+1)
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => (
        setCheck(check*-1),
        getCompletedAssignments(check)
      )}>
        {getCheck(check)}
      </button>

      {getTextCompleted(check)}

      <button className={styles.deleteButton} onClick={() => (
        setAssignments(assignments.filter((assignment) => assignment !== title))
        )}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
