import Main from "../src/components/main";
import Navigation from "../src/section/Home/Navigation";
import GlobalStyle from "../styles/app.style";
import Registration from '../src/components/Registration/index'
import Rakhi from '../src/section/Home/Rakhi'
import Footer from '../src/section/Home/Footer'

export default function Home() {
  return (
    <>
      <Main title="Home">
        <GlobalStyle/>
        <Navigation className="navbar navbar-expand-lg navbar-dark bg-primary" />
        <Registration/>
        <Rakhi/>
        <Footer/>
      </Main>
    </>
  );
}
