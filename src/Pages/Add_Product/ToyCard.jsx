import { Link, useLoaderData } from "react-router-dom";



const ToyCard = () => {
    const carDetails = useLoaderData();
    const{name,price,picture,description}=carDetails
    console.log(carDetails);
    return (
        <div className="w-4/12 mx-auto py-10">
            <div className="card w-96 bg-base-100 shadow-xl h-[450px]">
                <figure className="250px"><img src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2>Price: {price} $</h2>
                   
                    <p>{description}</p>
                    <div className="card-actions justify-between ">
                        
                        <Link to={'/addProduct'}> <button className="bg-red-600 py-2 text-white rounded-lg px-4">Update</button></Link>

                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default ToyCard;