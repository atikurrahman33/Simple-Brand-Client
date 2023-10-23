import { useLoaderData } from "react-router-dom";



const CarCard = () => {
    const carDetails = useLoaderData();
    const{name,price,picture,description,category}=carDetails
    console.log(carDetails);
    return (
        <div className="  py-10 sm:w-9/12 mx-auto ">
            <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                <figure className="300px"><img src={picture} /></figure>
                <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title font-bold">Brand: {category}</h2>
                    <h2>Price: {price} $</h2>
                   
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