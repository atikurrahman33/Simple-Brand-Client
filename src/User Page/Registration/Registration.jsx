import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from "../AuthProvider";
import SocialLogin from "../SocialLogin";




const Registration = () => {

        const [error, setError] = useState('');
        const [success, setSuccess] = useState('');
        const {createUser}= useContext(AuthContext)
        const handleRegister = e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email=(form.get("email")); 
            const password=(form.get("password")); 
            console.log(email,password)
            if (!/(?=.*[A-Z])/.test(password)) {
                setError('Please enter at least one uppercase');
                setSuccess('')
                return;
            } else if (!/(?=.*[!@#$&*])/.test(password)) {
                setError('Please enter at least one special character');
                setSuccess('')
                return;
            } else if (!/(?=.*[0-9])/.test(password)) {
                setError('Please enter at least one number');
                setSuccess('')
                return;
            } else if (!/.{6}/.test(password)) {
                setError('Please enter minimum 6 character');
                setSuccess('')
                return;
            }
            createUser(email,password)
            .then(result => {
                // Signed up 
    
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully register !',
                    showConfirmButton: false,
                    timer: 1500
                  })
                // form.reset()
                // ...
              })
              .catch((error) => {
                console.error(error);
                setError(error.message)
                setSuccess('')
              });
          }

    
    
    return (
        <div>
            
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-600">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleRegister}  className="space-y-6" action="#" method="POST">
      <div>
        <label  className="block text-sm font-medium leading-6 text-blue-600">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email"  required className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-blue-600">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        <SocialLogin ></SocialLogin>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already have a account?
      <Link to={`/login`}><a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Lonin</a></Link>
    </p>
  </div>
  <label className="label">
                            <p className="label-text-alt text-red-600">{error}</p>
                            <p className="label-text-alt text-green-600">{success}</p>
                        </label>
  
</div>

        </div>
    );
};

export default Registration;