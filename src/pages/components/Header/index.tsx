import { useRouter } from "next/router";
import React from "react";
import { ApiContext } from "../../../contexts/ApiContext";
import { CartContext } from "../../../contexts/CartContext";
import DropDownMenu from "../DropDownMenu";
import {
  BottomHeader,
  EnterAndBag,
  MenuItem,
  StyledHeader,
  StyledInput,
  StyledLogo,
  EnterAccountLink,
  TopHeader,
} from "./styles";

import CartIcon from "../CartIcon";

function Header() {
  const input = React.useContext(ApiContext);

  const [showMenu, setShowMenu] = React.useState(false);

  const routerName = useRouter().pathname;

  React.useEffect(() => {
    if (routerName === "/") {
    }
  }, [routerName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <StyledHeader>
      <TopHeader>
        <StyledLogo>bookstore</StyledLogo>
        <StyledInput
          onChange={(e) => input?.setSearch!(e.target.value)}
          placeholder="Procurar..."
          type="text"
        />
        <EnterAndBag>
          <EnterAccountLink>Entrar</EnterAccountLink>
         {/*  <i
            className="fa-solid fa-bag-shopping fa-xl"
            onClick={() => cartOptions?.setShowCart(true)}
          ></i> */}
          <CartIcon   />
        </EnterAndBag>
      </TopHeader>

      <BottomHeader>
        <MenuItem className={routerName === "/" ? "isActive" : ""}>
          Início
        </MenuItem>
        <MenuItem
          onClick={toggleMenu}
          onBlur={() => console.log("oi")}
          className={showMenu ? "isActive" : ""}
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          Categoria <i className="fa-solid fa-angle-down "></i>
        </MenuItem>
      </BottomHeader>
      <DropDownMenu
        className={showMenu ? "show" : "hide"}
        onMouseLeave={toggleMenu}
      />
    </StyledHeader>
  );
}

export default Header;
