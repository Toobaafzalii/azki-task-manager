
import AppCard from "./components/appCard";
import AppHeader from "./components/appHeader";
import AppModal from "./components/appModal";

export default function App() {
  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
      <AppHeader/>
      <AppCard/>
      <AppCard/>
      <AppCard/>
      <AppModal/>
    </div>
  );
}
