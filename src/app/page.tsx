
import AppCard from "./components/appCard";
import AppHeader from "./components/appHeader";

export default function App() {
  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
      <AppHeader/>
      <AppCard/>
      <AppCard/>
      <AppCard/>
    </div>
  );
}
