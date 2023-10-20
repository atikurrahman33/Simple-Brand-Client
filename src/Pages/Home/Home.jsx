import { useLoaderData } from "react-router-dom";
import Banner from "../../Header and Footer/Banner/Banner";
import Cards from "./Cards";
import Team_member from "../../Header and Footer/Team_member/Team_member";
import Faq from "../../Header and Footer/Team_member/Faq";



const Home = () => {
    const items= useLoaderData()
    return (
        <div>
           <div> <Banner></Banner></div>

           <div className="pt-10">
            <div className="text-center text-3xl font-bold text-stone-300  ">Our Trusted Brands</div>
            <div className="grid grid-cols-1  md:grid-cols-2 md:gap-4  lg:grid-cols-3 w-9/12 mx-auto gap-5">
           
           {
            items.map( items=>  <Cards key={items.id} items={items}  > </Cards>)
           }
           
        </div>
        <div> <Team_member></Team_member> </div>
        <div><Faq></Faq> </div>
           </div> 
          
           
        </div>
    );
};

export default Home;