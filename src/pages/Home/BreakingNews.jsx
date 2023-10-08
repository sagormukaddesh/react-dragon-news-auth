import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex mb-10">
            <button className="btn btn-secondary text-xl btn-sm">Breaking News</button>
            <Marquee className="text-xl" pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
                <Link to="/">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;