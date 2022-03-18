import "./App.css";
import Add_catégorie from "./Components/Admin/Add_catégorie";
import Add_product from "./Components/Admin/Add_product";
import Table_catégorie from "./Components/Admin/Table_catégorie";
import Table_product from "./Components/Admin/Table_product";
import Table_User from "./Components/Admin/Table_User";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Add_conseilleur from "./Components/Super_admin/Add_conseilleur";
import Analyse_dashboard from "./Components/Super_admin/Analyse_dashboard";
import Table_conseilleur from "./Components/Super_admin/Table_conseilleur";

function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <NavBar />
      <div className="app-main">
        <SideBar />
        
      
        {/* <Analyse_dashboard /> */}
        {/* <Table_product/> */}
        {/* <Add_product/> */}
        {/* <Add_conseilleur/> */}
        {/* <Add_catégorie/> */}
        {/* <Table_conseilleur/> */}
        <Table_User/>
        {/* <Add_product/> */}
      </div>
    </div>
  );
}

export default App;
