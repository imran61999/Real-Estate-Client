import { Link, useLoaderData, useParams } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { saveHomes } from "../Utility/localstorage.init";
import Swal from 'sweetalert2'

const Details = () => {
    const {id} = useParams();
    const estates = useLoaderData();

    const idx = parseInt(id);

    const estate = estates.find(estate => estate.id === idx)
    const { estate_title,segment_name,description,price,status,Area,location,facilities,image,bedrooms,bathrooms,garage,year_built,featured } = estate;

    const handleOrder=()=>{
        saveHomes(idx)
        Swal.fire("Your order accepted");
        
    }

    return (
        <div className="mx-auto md:w-1/2 mb-10">
            <h2 className="text-3xl text-center font-bold mb-8">Property Details</h2>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="text-center text-2xl font-bold">{segment_name}</p>
                    <div className="flex">
                    <p><span className="font-bold">Price: </span>{price}</p>
                    <p><span className="font-bold">Status: </span>{status}</p>
                    <p><span className="font-bold">Area: </span>{Area}</p>
                    </div>
                    <div className="flex">
                    <p><span className="font-bold">BedRooms: </span>{bedrooms}</p>
                    <p><span className="font-bold">BathRooms: </span>{bathrooms}</p>
                    <p><span className="font-bold">Garage: </span>{garage}</p>
                    
                    </div>
                    <p><span className="font-bold">Year_Built: </span>{year_built}</p>
                   
                    <div className="flex">
                        <p><span className="font-bold">Facilities:</span> </p>
                        <p>{facilities[0]}</p>
                        <p>{facilities[1]}</p>
                        <p>{facilities[2]}</p>
                        <p>{facilities[3]}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p><span className="font-bold">Address:</span>{location} </p> 
                        <Link to={`/bMap/${id}`}><FiMapPin className="text-3xl"/></Link>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleOrder} className="btn btn-secondary">Order now</button>
                        <Link to="/"><button className="btn btn-secondary">Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;