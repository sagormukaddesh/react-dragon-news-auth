import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn w-full font-xl ">
                    <FaGoogle className="text-xl mr-2"></FaGoogle>
                    Google
                </button>
                <button className="btn w-full font-xl">
                    <FaGithub className="text-xl mr-2"></FaGithub>
                    Git-Hub
                </button>
            </div>

            {/* find us  section*/}
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-semibold mb-4">Find Us On</h2>
                <a className="flex text-lg p-4 items-center border rounded-t-lg" href="">
                    <FaFacebookF className="text-xl mr-2 "></FaFacebookF>
                    Facebook
                </a>
                <a className="flex text-lg p-4 items-center border-x" href="">
                    <FaTwitter className="text-xl mr-2 "></FaTwitter>
                    Facebook
                </a>
                <a className="flex text-lg p-4 items-center border rounded-b-lg" href="">
                    <FaInstagram className="text-xl mr-2 "></FaInstagram>
                    Facebook
                </a>
            </div>

            {/* q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Login With</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;