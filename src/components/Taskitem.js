import { GoTrash } from "react-icons/go";


export default function TaskItem(props){
    return (
        <li
              className="flex items-center justify-between px-8 bg-slate-100 text-center py-4 rounded shadow shadow-slate-400">
              {props.name}
              <GoTrash onClick={props.removeItem} className="w-6 h-6"/>
            </li>
    );
}