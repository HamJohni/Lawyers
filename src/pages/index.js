import MainContainer from "../components/MainContainer/MainContainer.jsx";
import Home from "@/components/Home/Home";

function index() {
  return (
      <MainContainer title={"Главная"} keywords={"Юридическая помощь"}>
          <Home/>
      </MainContainer>
  )
}

export default index