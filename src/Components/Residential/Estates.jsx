import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
    const [estates, setEstates] = useState([]);

    useEffect(()=>{
        fetch('/estate.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])

    return (
        <div className="mb-8">
            <h2 className="text-center text-3xl font-bold mb-8 mt-8">Residential</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center">
            {
                estates.map( estate => <Estate key={estate.id} estate={estate}></Estate>)
            }
            </div>
        </div>
    );
};

export default Estates;