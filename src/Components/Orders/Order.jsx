import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredHomes } from "../Utility/localstorage.init";
import OrderCard from "./OrderCard";

const Order = () => {
    const [homes, setHomes] = useState([])
    const estates = useLoaderData();

    useEffect(()=>{
        const storedHomeIds = getStoredHomes();
        if(estates.length > 0){
            const orderedEstates = estates.filter( estate => storedHomeIds.includes(estate.id))
            setHomes(orderedEstates)
        }
    },[])

    return (
        <div>
            <h2 className="text-center text-3xl font-bold mb-5">Total order: {homes.length} </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
           {
                homes.map(home =><OrderCard key={home.id} estate={home}></OrderCard>)
            }
           </div>
        </div>
    );
};

export default Order;