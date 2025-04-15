import { useSelector } from "react-redux";
import AppCard from "../components/appCard";
import { RootState } from "../../redux/store";
import { ITask } from "@/types/type";

const AppCardsContainer:React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    return(
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 p-4">
         {tasks.map((task: ITask) => (
        <AppCard 
          key={task.id} 
         {...task} 
        />
      ))}
      </div>
    )
}
export default AppCardsContainer;