import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import {BsFillCheckCircleFill} from "react-icons/bs"
import IAssignment from "../../interfaces/IAssignment";
import { useState } from "react";

interface Props extends IAssignment {
  numberCompletedAssignments: number;
  setNumberCompletedAssignments: (numberCompletedAssignments:number) => void;
  assignment: IAssignment;
  deleteAssignment: (title:string) => void;
}

export function Assignment({numberCompletedAssignments, setNumberCompletedAssignments, assignment, deleteAssignment}: Props) {
  const [completed, setCompleted] = useState(assignment.completed);

  const checked = (c:boolean) => {
    return c === false
      ? <div />
      : <BsFillCheckCircleFill size={20}/>
  }
  const getTextCompleted = (c: boolean) => {
    return c === false
      ? <p>{assignment.title}</p>
      : <p className={styles.textCompleted}>{assignment.title}</p>
  };
  const updateCompleted = (c:boolean) => {
    if(c === true) {
      setNumberCompletedAssignments(numberCompletedAssignments-1)
      setCompleted(false)
    }
    else {
      setNumberCompletedAssignments(numberCompletedAssignments+1)
      setCompleted(true)
    }
  }
  const getDueDateTimeline = (d:Date) => {
    let tomorrow = new Date()
    const today = new Date()
    tomorrow.setDate(tomorrow.getDate()+1)
    return d.getDate() - today.getDate() === 1
    ? <span className={styles.assignmentDetailsChildTomorrow}>Due: Tomorrow</span>
    : <span className={styles.assignmentDetailsChild}>Due: {d.getDate()-today.getDate()} days</span>
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => {
        updateCompleted(completed)
      }}>
      {checked(completed)}
      </button>
      
      {getTextCompleted(completed)}
      {getDueDateTimeline(assignment.deadline!)}
      
      
      <button className={styles.deleteButton} onClick={() => {
        if(completed === true) {
          setNumberCompletedAssignments(numberCompletedAssignments-1)
          deleteAssignment(assignment.title)
        }
        else {
          deleteAssignment(assignment.title)
        }
        
      }}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
