import { Link } from "react-router-dom";




const Cards = ({ items }) => {
    const { id, car_brand } = items;
    return (
        <div>
            <Link to={`/about/${car_brand}`}>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-10">

                    <img src={items.image_url} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-12 text-3xl font-bold text-white">{items.car_brand}</h3>

                </article>
            </Link>
        </div>
    );
};

export default Cards;