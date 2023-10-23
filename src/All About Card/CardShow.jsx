import { Link } from "react-router-dom";


const CardShow = ({ card }) => {
    const {_id, name, picture, price ,category} = card;
    return (

        <div className="pb-9">
            
                <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                <figure className="350px"><img src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title font-bold">Brand: {category}</h2>
                    <h2>Price: {price} $</h2>
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
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