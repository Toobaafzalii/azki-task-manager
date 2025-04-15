import { useSelector } from "react-redux";
import AppCard from "../components/appCard";
import { RootState } from "../../redux/store";

const AppCardsContainer: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const todoTasks = tasks.filter(task => task.status === "TODO");
    const inProgressTasks = tasks.filter(task => task.status === "INPROGRESS");
    const doneTasks = tasks.filter(task => task.status === "DONE");

    return (
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-center mb-4 sticky top-0 bg-white dark:bg-gray-600 p-2 rounded-lg shadow">
                    TODO ({todoTasks.length})
                </h2>
                {todoTasks.map(task => (
                    <AppCard key={task.id} {...task} />
                ))}
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold text-center mb-4 sticky top-0 bg-white dark:bg-gray-600 p-2 rounded-lg shadow">
                    INPROGRESS ({inProgressTasks.length})
                </h2>
                {inProgressTasks.map(task => (
                    <AppCard key={task.id} {...task} />
                ))}
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold text-center mb-4 sticky top-0 bg-white dark:bg-gray-600 p-2 rounded-lg shadow">
                    DONE ({doneTasks.length})
                </h2>
                {doneTasks.map(task => (
                    <AppCard key={task.id} {...task} />
                ))}
            </div>
        </div>
    );
};

export default AppCardsContainer;