import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Estates from "../Residential/Estates";

const Home = () => {
    
    return (
       <>
       <Helmet>
          <title>Real Estate | Home</title>
        </Helmet>
         <div>
            <Slider></Slider>
            <Estates></Estates>
        </div>
       </>
    );
};

export default Home;