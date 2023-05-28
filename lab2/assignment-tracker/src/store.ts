import {create} from "zustand"
import IAssignment from "./interfaces/IAssignment"

interface IAssignmentState {
    assignments: IAssignment[];
    addAssignment: (title: string) => void;
    deleteAssignment: (title: string) => void;
    toggleCompleted: (title:string) => void;
    //const {assignments} = useStore()     to use "props" but delete props from component
}

//const useStore = create<IAssignmentState>(() => ({
//    assignments: [],
    //addAssignment: () => {}

//}));