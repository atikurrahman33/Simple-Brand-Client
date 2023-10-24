import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";



const CarCard = () => {
    const carDetails = useLoaderData();
    const{name,price,picture,description,category,rating}=carDetails
    console.log(carDetails);
    return (
        <div className="  py-10 sm:w-9/12 mx-auto ">
            <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                <figure className="300px"><img src={picture} /></figure>
                <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title font-bold">Brand: {category}</h2>
                    <h2>Price: {price} $</h2>
                    <h2>Rating: {rating} </h2>
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                   
                    <p>{description}</p>
                    <div className="card-actions justify-between ">
                        
                         <button className="bg-red-600 py-2 text-white rounded-lg px-4">Add to card</button>

                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default CarCard;