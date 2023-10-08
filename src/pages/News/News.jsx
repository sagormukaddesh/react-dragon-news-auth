import { useParams } from "react-router-dom";
import Header from "../../Shared/header/Header";
import RightSideNav from "../../Shared/rightSideNav/RightSideNav";
import Navbar from "../../Shared/navbar/Navbar";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                <h2 className="text-5xl font-semibold">News Details</h2>
                <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;