import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className="mb-10 md:w-3/4 mx-auto">
            <h2 className="text-3xl text-center">Update your info</h2>
            <div className="overflow-x-auto">
  <table className="table text-center">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Photo URL</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>{user?.displayName}</td>
        <td>{user?.email}</td>
        <td>{user?.photoURL}</td>
        <td className="text-2xl text-blue-600"><Link to='/update'>Update</Link></td>
      </tr>  
    </tbody>
  </table>
</div>

        </div>
    );
};

export default UpdateProfile;