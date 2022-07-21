import Main from "../src/components/main";
import Navigation from "../src/section/Home/Navigation";
import GlobalStyle from "../styles/app.style";
import SearchProduct from '../src/section/Search-Product/index'
import Footer from '../src/section/Home/Footer'


export default function Search() {
  return (
    <>
      <Main title="Search">
        <GlobalStyle/>
        <Navigation className="navbar navbar-expand-lg navbar-dark bg-primary sticky top-0" />
        <SearchProduct/>
        <Footer/>
      </Main>
    </>
  );
}
