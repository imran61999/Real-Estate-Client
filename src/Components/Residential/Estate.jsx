import { Link } from "react-router-dom";


const Estate = ({estate}) => {
const { id,estate_title,segment_name,description,price,status,Area,location,facilities,image,bedrooms,bathrooms,garage,year_built,featured } = estate;
    // console.log(estate);
    return (
        <div className="card bg-base-100 shadow-xl mx-5 md:mx-0 my-3 md:my-0">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p className="font-serif">{segment_name}</p>
    <div className="flex flex-col">
        <p><span className="font-bold">Status: </span>{status}</p>
        <p><span className="font-bold">Area: </span>{Area}</p>
        <p><span className="font-bold">Price:</span>{price}</p>
    </div>
    
    <div className="card-actions justify-center mt-3">
      <Link to={`/details/${id}`}><button className="btn btn-sm btn-secondary">View Property</button></Link>
    </div>
  </div>
</div>
    );
};

export default Estate;