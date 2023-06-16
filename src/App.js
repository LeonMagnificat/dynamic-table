import "./App.css";
import BookDetails from "./components/BookDetails";
import Mainframe from "./components/Mainframe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/books" Component={Mainframe} />
        <Route path="/details/:bookId" Component={BookDetails} />
      </Routes>
    </>
  );
}

export default App;
