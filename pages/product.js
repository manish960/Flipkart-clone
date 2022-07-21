import Main from "../src/components/main";
import Navigation from "../src/section/Home/Navigation";
import GlobalStyle from "../styles/app.style";
import Product from '../src/section/Product/index'
import Footer from '../src/section/Home/Footer'


export default function Products() {
  return (
    <>
      <Main title="Products">
        <GlobalStyle/>
        <Navigation className="navbar navbar-expand-lg navbar-dark bg-primary sticky top-0" />
        <Product/>

        {/* <Footer/> */}
      </Main>
    </>
  );
}
