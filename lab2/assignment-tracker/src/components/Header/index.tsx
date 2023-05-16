import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

interface Props {
  inputBox: string;
  setInputBox: (inputBox: string) => void;
  assignments: string[];
  setAssignments: (assignments: string[]) => void;
}

export function Header({inputBox, setInputBox, assignments, setAssignments}: Props) {
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={inputBox} onChange={event => setInputBox(event.target.value)}/>
        <button disabled={!inputBox.trim()} onClick={() => (
          setAssignments([...assignments,inputBox]),
          setInputBox('')
          )}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
