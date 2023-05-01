import MainContainer from "../components/MainContainer/MainContainer.jsx";
import FirstSection from "@/Home/FirstSection/FirstSection";
import Trust from "@/Home/Trust/Trust";
import Connect from "@/Home/Connect/Connect";
import Slot from "@/Home/Slot/Slot";
import Legal from "@/Home/Legal/Legal";
import Review from "@/Home/Review/Review";
import Choose from "@/Home/Choose/Choose";
import Footer from "@/Home/Footer/Footer";

export default function Home() {
  return (
      <MainContainer title={"Главная"} keywords={"Юридическая помощь"}>
          <FirstSection/>
          <Trust/>
          <Connect/>
          <Slot/>
          <Legal/>
          <Review/>
          <Choose/>
          <Footer/>
      </MainContainer>
  )
}
