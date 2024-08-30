import Main from "./ui/templates/main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import "./assets/scss/custom/base/icons.scss";
import { Routes, Route } from "react-router-dom";
import Modal from 'react-modal';


Modal.setAppElement();
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
