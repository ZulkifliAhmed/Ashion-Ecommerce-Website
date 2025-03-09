import { LiaSearchSolid } from "react-icons/lia";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBagDash } from "react-icons/bs";

function HeaderIcons() {
  return (
    <div className="header_icon">
      <div>
        <LiaSearchSolid />
      </div>
      <div>
        <IoIosHeartEmpty />
        <span>2</span>
      </div>
      <div>
        <BsBagDash />
        <span>3</span>
      </div>
    </div>
  );
}

export default HeaderIcons;
