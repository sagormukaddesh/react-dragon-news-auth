import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/header/Header";
import LeftSideNav from "../../Shared/leftSideNav/LeftSideNav";
import Navbar from "../../Shared/navbar/Navbar";
import RightSideNav from "../../Shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData()
    console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* new3s container */}
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews => <NewsCard
                        key={aNews.id}
                        aNews={aNews}
                        ></NewsCard>)
                    }

                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;