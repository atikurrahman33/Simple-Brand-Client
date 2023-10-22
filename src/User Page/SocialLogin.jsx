import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";


const SocialLogin = () => {
    const { googleLogIn} = useContext(AuthContext);

    const handleGoogle = () => {
        googleLogIn()
            .then((result) => {
                if (result) {
                    const googleLoggedUser = result.user;
                    console.log(googleLoggedUser);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully logged in',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    
    return (
        <Link onClick={handleGoogle} className="flex gap-4 items-center bg-indigo-600 justify-center py-2 rounded-lg mt-2">
            <h1 className="text-[18px] text-white ">Sign in with google</h1>
            <img  className="w-10" src="https://i.ibb.co/bb5hHDZ/google.png" alt="google-icon" />
        </Link>
    );
};

export default SocialLogin;