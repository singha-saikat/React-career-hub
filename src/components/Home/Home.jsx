import Banner from "../Banner/Banner";
import CategoryList from "../Category List/CategoryList";
import FeaturedJobs from "../Featured Jobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <CategoryList/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;