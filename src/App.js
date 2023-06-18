import "./App.css";
import BookDetails from "./components/Details-book/BookDetails";
import Mainframe from "./components/Home-table/Mainframe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Mainframe} />
        <Route path="/details/:bookId" Component={BookDetails} />
      </Routes>
    </>
  );
}

export default App;
