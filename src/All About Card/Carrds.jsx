import { useLoaderData } from "react-router-dom";
import CardShow from "./CardShow";

const Carrds = () => {
    const card = useLoaderData();

    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 mx-auto w-9/12 py-16">
            {card.length === 0 ? (
                <p className="text-3xl font-bold text-blue-600 ">CAR of this brand are not available at this time</p>
            ) : (
                card.map((card) => (
                    <CardShow key={card._id} card={card}></CardShow>
                ))
            )}
        </div>
    );
};

export default Carrds;
