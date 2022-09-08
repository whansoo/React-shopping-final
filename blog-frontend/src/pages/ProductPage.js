import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import ProductList from "../components/product/ProductList";
import Slider from "../components/Slider";
import Stylea from "../components/Style";


const ProductPage = () => {
    return (
        <>
          <Announcement/>
          <Newsletter/>
          <Categories/>
          <ProductList/>
          <Slider/>
          <Stylea/>
         <Footer/>
          </>
         
    )
};

export default ProductPage;