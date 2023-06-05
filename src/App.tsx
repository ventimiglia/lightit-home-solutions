import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./index.css";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
