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
            <div className="grid md:grid-cols-3 gap-8">
            {
                estates.map( estate => <Estate key={estate.id} estate={estate}></Estate>)
            }
            </div>
        </div>
    );
};

export default Estates;