import { Outlet } from "react-router-dom";
import Header from "../Header and Footer/Header/Header";
import Footer from "../Header and Footer/Footer/Footer";


const Main_layout = () => {
    return (
        
             <div>
         <div className="max-w-[1300px] mx-auto">
            <Header></Header>
            
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
        </div>
            
        </div>
    );
};

export default Main_layout;