import { Link } from "react-router-dom";
import Navbar from "../../Shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form .get('name')
        const photoUrl = form.get('photo')
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name, photoUrl)

        // createUser
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl my-10 text-center">Please Register</h2>

                <form onSubmit={handleRegister}
                    className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="Name" className="input input-bordered" required name="name" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" placeholder="Photo URL" className="input input-bordered" name="photo" />

                    </div><div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">REGISTER</button>
                    </div>
                </form>
                <p className=" text-xl text-center font-semibold mt-6 ">Already have an account? <Link className="text-blue-700" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;