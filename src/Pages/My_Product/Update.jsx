import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    
    const cars = useLoaderData();
    console.log(cars);

    const navigate = useNavigate();
    const updateToyData = (e) =>{
        e.preventDefault();
        const form = e.target;
        const picture = form.photoURL.value;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
        const updateToy = {
            picture,
            name,
            price,
            availableQuantity,
            description
        }
        
        console.log(updateToy);

        fetch(`http://localhost:5000/newUser/${cars._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Toy updated successfully',
                        'success'
                    )
                    form.reset();
                    navigate('/myProduct');

                }
            })
    }
    return (
        <div>

            <div className="card-body ">
                <form onSubmit={updateToyData}>
                    <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                        <div className="form-control ">
                            <label className="mb-2 font-bold">Photo URL</label>
                            <input type="text" name="photoURL" defaultValue={cars.picture} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="mb-2 font-bold">Name</label>
                            <input type="text" name="name" defaultValue={cars.name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="mb-2 font-bold">Price</label>
                            <input type="number" name="price" defaultValue={cars.price} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="mb-2 font-bold">Quantity</label>
                            <input type="text" name="quantity" defaultValue={cars.availableQuantity} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="mb-2 font-bold">Details Description</label>
                        <textarea className="textarea textarea-bordered h-52 mt-4" name="description" defaultValue={cars.description}></textarea>
                    </div>
                    <div className="form-control mt-6">
                        {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                        <input className="btn border-0 bg-blue-500 hover:bg-blue-700" type="submit" value="Update Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;