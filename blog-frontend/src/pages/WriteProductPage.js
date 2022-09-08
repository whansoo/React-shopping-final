import Responsive from "../components/common/Responsive";
import ProductContainer from "../containers/product/Productcontainer";
import TagBoxContainer from "../containers/product/ProductTagBoxContainer";
import WriteActionButtonsContainer from "../containers/product/ProductButtonContainer";

const WriteProductPage = () => {
    return (
        <Responsive>
            <ProductContainer/>
            <TagBoxContainer/>
            <WriteActionButtonsContainer/>
        </Responsive>
    )
};

export default WriteProductPage;