import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <div className="mb-5">
        <p className="text-3xl text-slate-800">Gallery</p>
      </div>

      <Gallery />
    </>
  );
}

export default App;
