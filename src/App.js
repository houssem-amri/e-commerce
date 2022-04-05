import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Add_categorie from "./Components/Admin/Add_categorie";
import Add_product from "./Components/Admin/Add_product";
import Edit_categorie from "./Components/Admin/Edit_categorie";
import Edit_produit from "./Components/Admin/Edit_produit";
import Table_categorie from "./Components/Admin/Table_categorie";
import Table_product from "./Components/Admin/Table_product";
import Table_User from "./Components/Admin/Table_User";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Add_conseilleur from "./Components/Super_admin/Add_conseilleur";
import Analyse_dashboard from "./Components/Super_admin/Analyse_dashboard";
import Edit_conseilleur from "./Components/Super_admin/Edit_conseilleur";
import Table_conseilleur from "./Components/Super_admin/Table_conseilleur";

function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <NavBar />
      <div className="app-main">
      <BrowserRouter> 
      <SideBar />
       <Routes>
       <Route path="/" element={<Analyse_dashboard/>}/>
       <Route path="/Add_conseilleur" element={<Add_conseilleur/>}/>
       <Route path="/Table_conseilleur" element={<Table_conseilleur/>}/>
       <Route path="/Add_product" element={<Add_product/>}/>
       <Route path="/Table_product" element={<Table_product/>}/>
       <Route path="/Add_categorie" element={<Add_categorie/>}/>
       <Route path="/Table_categorie" element={<Table_categorie/>}/>
       <Route path="/Table_user" element={<Table_User/>}/>
       <Route path="/Edit_produit/:id" element={<Edit_produit />} />
       <Route path="/Edit_categorie/:id" element={<Edit_categorie />} />
       <Route path="/Edit_conseilleur/:id" element={<Edit_conseilleur />} />
       

       </Routes>
        </BrowserRouter> 
    
       
      </div>
    </div>
  );
}


export default App;
