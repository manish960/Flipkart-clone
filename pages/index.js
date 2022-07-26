import Main from "../src/components/main";
import Navigation from "../src/section/Home/Navigation";
import GlobalStyle from "../styles/app.style";
import Carousel from '../src/section/Home/Carousel'
import Rakhi from '../src/section/Home/Rakhi'
import Footer from '../src/section/Home/Footer'
import SubNavigation from '../src/components/SubNavigation/index'

export default function Home() {
  return (
    <>
      <Main title="Home">
        <GlobalStyle/>
        <Navigation className="navbar navbar-expand-lg navbar-dark bg-primary sticky top-0" />
        <SubNavigation/>
        <Carousel className="w-100" />
        <Rakhi/>
        <Footer/>
      </Main>
    </>
  );
}
