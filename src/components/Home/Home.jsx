import FirstSection from "@/components/Home/FirstSection/FirstSection";
import Trust from "@/components/Home/Trust/Trust";
import Legal from "@/components/Home/Legal/Legal";
import Review from "@/components/Home/Review/Review";
import Slot from "@/components/Home/Slot/Slot";
import Footer from "@/components/Home/Footer/Footer";
import Connect from "@/components/Home/Connect/Connect";

const Home = () => {
    return(
        <>
            <FirstSection/>
            <Trust/>
            <Legal/>
            <Connect/>
            <Review/>
            <Slot/>
            <Footer/>
        </>
    )
}

export default Home