import { useLoaderData } from "react-router-dom";
import CardShow from "./CardShow";


const Carrds = () => {
    const card=useLoaderData();
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 mx-auto w-9/12 py-16">
            {
                card.map(card=> <CardShow key={card._id} card={card}></CardShow>)
            }
            
        </div>
    );
};

export default Carrds;