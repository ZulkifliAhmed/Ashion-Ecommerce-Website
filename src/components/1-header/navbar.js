import Links from "./links";

// import { IoMdArrowDropright, IoMdArrowDropdown  } from "react-icons/io";

// <IoMdArrowDropright className="arrow_right"/>
// <IoMdArrowDropdown className="arrow_down"/>

function Navbar() {
  return (
    <>
      <ul className="links">
        {Links.map((item) => {
          return (
            <li className="link" key={item.id}>
              <a href="/">{item.name}</a>

              {item.subMenu.length > 0 && (
                <ul className="sub_links">
                  {item.subMenu.map((sub) => {
                    return (
                      <li key={sub.id} className="sub_link">
                        <a href="/">{sub.name}</a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Navbar;
