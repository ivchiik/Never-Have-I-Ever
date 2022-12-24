import "./App.css";
import TypesButton from "./Components/Buttons/TypesButton";
import { ReactComponent as FunIcon } from "./Assets/fun.svg";
import "./fonts/bpg_extrasquare_mtavruli_2009.ttf"
import CustomModal from "./Components/Modals/Modal.js";

function App() {
  return (
    <div className="background">
      <img
        src={require("./Assets/background_image.jpg")}
        alt=""
        className="back-img"
      />
      <div className="wrapper">
        <img src={require("./Assets/logo.png")} alt="" className="logo" />
        <TypesButton title="გასართობი" color="orange" icon={FunIcon} />
        <TypesButton title="ცენზურა" color="purple" />
        <TypesButton title="18+ წყვილებისთვის" color="red" />
      </div>
      <CustomModal
        modalIsOpen={true}
        afterOpenModal={() => {}}
        closeModal={() => {}}
      />
    </div>
  );
}

export default App;
