import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {AiOutlineCalendar} from "react-icons/ai"

interface Props {
  addAssignment: (title:string, dueDate:Date) => void;
}

export function Header({addAssignment}: Props) {
  const today = new Date();
  const [userInput, setUserInput] = useState("");
  const [selected, setSelected] = useState<Date>();
  const [visible, setVisible] = useState(false);
  let footer = <p>Please select Due Date</p>
  if (selected) {
    footer = <p>Due Date: {format(selected, 'PP')}.</p>;
  }
  
  const calendarVisible = (b:boolean) => {
    return b === true
    ? <DayPicker
    mode="single"
    selected={selected}
    onSelect={setSelected}
    fromDate={today}
    footer={footer}/>
    : <></>
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input 
        onChange = {(e) => setUserInput(e.target.value)}
        value={userInput} 
        placeholder="Add a new assignment" 
        type="text"/>

        {calendarVisible(visible)}

        <button onClick = {(e) =>{
          e.preventDefault();
          if(visible === true) {
            setVisible(false)
          }
          else {
            setVisible(true)
          }
        }}>
          <AiOutlineCalendar size={30}/>
        </button>

        <button onClick = {(e) => {
          e.preventDefault();
          addAssignment(userInput, selected!);
          setUserInput("");
        }}
        disabled={!userInput.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
