
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
const ToyCard = ({toy}) => {
    return (
        <div>
              
              <div className="card card-side bg-base-100 shadow-xl grid md:grid-cols-2 items-center justify-center mb-4">
                <figure className="w-full"><img className="w-full h-64 rounded-lg" src={toy.picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <Rating
                        placeholderRating={toy.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <div className="card-actions justify-start">
                        {user ?
                            <Link to={`/toydetails/${toy?._id}`} className="btn border-0 bg-purple-600">Details</Link> : <Link to={`/toydetails/${toy?._id}`} onClick={showToast} className="btn bg-purple-600  border-0">Details</Link>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ToyCard;