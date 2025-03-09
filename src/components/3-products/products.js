import { LiaStarSolid } from "react-icons/lia";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBagDash } from "react-icons/bs";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Pimg from "../../assets/product-2.jpg";
import "./products.css";

function Products() {
  return (
    <div className="products">
      <div className="container">
        <div className="p_titel">
          <h4>new Products</h4>
          <ul>
            <li>all</li>
            <li>women’s</li>
            <li>men’s</li>
            <li>kid’s</li>
            <li>accessories</li>
            <li>cosmetics</li>
          </ul>
        </div>
        <div className="p_content">
          <div className="product">
            <div className="p_img">
              <img src={Pimg} alt={Pimg} />
              <div className="p_icon">
                <div className="icon">
                  <BsArrowsAngleExpand />
                </div>
                <div className="icon">
                  <IoIosHeartEmpty />
                </div>
                <div className="icon">
                  <BsBagDash />
                </div>
              </div>
            </div>
            <div className="p_des">
              <h5>Flowy striped skirt</h5>
              <div className="rating">
                <LiaStarSolid />

                <LiaStarSolid />

                <LiaStarSolid />

                <LiaStarSolid />

                <LiaStarSolid />
              </div>
              <span>$ 59.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
