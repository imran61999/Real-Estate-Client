import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    
    return (
       <div className="m-5 border p-5">
        <h2><strong>Name:</strong> {user?.displayName}</h2>
       <h2><strong>Email:</strong> {user?.email}</h2>
       <h2 className="mb-3"><strong>Photo URL:</strong> {user?.photoURL}</h2>
       <Link to='/update'><button className="btn btn-sm btn-secondary">Update</button></Link>
       </div>
    );
};

export default UpdateProfile;