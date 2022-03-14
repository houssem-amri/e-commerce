import "./App.css";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Add_admin from "./Components/Super_admin/Add_admin";
import Analyse_dashboard from "./Components/Super_admin/Analyse_dashboard";

function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <NavBar />
      <div className="app-main">
        <SideBar />
        {/* <Analyse_dashboard /> */}
        <Add_admin/>
      </div>
    </div>
  );
}

export default App;
