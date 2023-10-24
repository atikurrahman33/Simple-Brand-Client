import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";


const CardShow = ({ card }) => {
    const {_id, name, picture, price ,category,rating} = card;
    return (

        <div className="pb-9 ">
            
                <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                <figure className="350px"><img src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title font-bold">Brand: {category}</h2>
                    <h2>Price: {price} $</h2>
                    <h2>Rating: {rating} </h2>
                    <div>
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    </div>
                    
                    <div className="card-actions justify-between ">
                        <Link to={`/carcard/${_id}`}> <button className="bg-red-600 py-2 text-white rounded-lg px-4">Details</button></Link>
                        <Link to={'/addProduct'}> <button className="bg-red-600 py-2 text-white rounded-lg px-4">Update</button></Link>

                    </div>
                </div>
            </div>
            

        </div>
    
    );
};

export default CardShow;