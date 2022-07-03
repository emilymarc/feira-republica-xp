import React, { useState } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/Icon.svg";
import IconCart from "../../assets/shopping-cart.svg";
import profile from "../../assets/profile.svg";
import iconExpositores from "../../assets/IconExpositores.svg";
import iconExpositoresActive from "../../assets/IconExpositoresActive.svg";
import iconChevronRight from "../../assets/IconChevronRight.svg";
import * as S from "./styled";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import style from './style.css'

const Header = () => {
  const fullUrl = window.location.href;
  const compareUrl = `http://localhost:3000`;
  const [cart, setCart] = useState({
    isPaneOpen: false,
  });
  return (
    <>
    <S.Header>
      <S.LogoArea>
        <Link to="/">
          <img src={logo} alt="Republica Hippie" />
        </Link>

        <S.SearchContainer>
          <S.Search type="search"></S.Search>
          <img src={search} />
        </S.SearchContainer>

        <S.Menu>
          <S.Icon
            src={IconCart}
            onClick={() => setCart({ isPaneOpen: true })}
          ></S.Icon>
          <S.IconLink to="/profile">
            <S.Icon src={profile} />
          </S.IconLink>
        </S.Menu>
      </S.LogoArea>

      <S.NavArea>
        <S.Nav>
          {fullUrl == `${compareUrl}/` ? (
            <S.NavLink to="">
              <S.NavItem style={{ color: "#98D2D3", fontWeight: "600" }}>
                HOME
              </S.NavItem>
            </S.NavLink>
          ) : (
            <S.NavLink to="/">
              <S.NavItem>HOME</S.NavItem>
            </S.NavLink>
          )}
          {fullUrl == `${compareUrl}/ceramicas` ? (
            <S.NavLink to="">
              <S.NavItem style={{ color: "#98D2D3", fontWeight: "600" }}>
                CERÂMICAS
              </S.NavItem>
            </S.NavLink>
          ) : (
            <S.NavLink to="/ceramicas">
              <S.NavItem>CERÂMICAS</S.NavItem>
            </S.NavLink>
          )}
          {fullUrl == `${compareUrl}/colares` ? (
            <S.NavLink to="">
              <S.NavItem style={{ color: "#98D2D3", fontWeight: "600" }}>
                COLARES
              </S.NavItem>
            </S.NavLink>
          ) : (
            <S.NavLink to="/colares">
              <S.NavItem>COLARES</S.NavItem>
            </S.NavLink>
          )}
          {fullUrl == `${compareUrl}/pinturas` ? (
            <S.NavLink to="">
              <S.NavItem style={{ color: "#98D2D3", fontWeight: "600" }}>
                PINTURAS
              </S.NavItem>
            </S.NavLink>
          ) : (
            <S.NavLink to="/pinturas">
              <S.NavItem>PINTURAS</S.NavItem>
            </S.NavLink>
          )}
          <S.ContainerExpositores>
            {fullUrl == `${compareUrl}/expositores` ? (
              <img src={iconExpositoresActive} alt="Icon Expositores"></img>
            ) : (
              <img src={iconExpositores} alt="Icon Expositores"></img>
            )}
            {fullUrl == `${compareUrl}/expositores` ? (
              <S.NavLink to="">
                <S.NavItem style={{ color: "#98D2D3", fontWeight: "600" }}>
                  EXPOSITORES
                </S.NavItem>
              </S.NavLink>
            ) : (
              <S.NavLink to="/expositores">
                <S.NavItem>EXPOSITORES</S.NavItem>
              </S.NavLink>
            )}
          </S.ContainerExpositores>
        </S.Nav>
      </S.NavArea>
      <SlidingPane
          className=".slide-pane content-after-open"
          overlayClassName="overlay-after-open"
          isOpen={cart.isPaneOpen}
          title="Carrinho"
          closeIcon={<img src={iconChevronRight}/>}
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setCart({ isPaneOpen: false });
    
          }}
          width={window.innerWidth < 600 ? '100%' : '40%'}
        >
          <div>And I am pane content. BTW, what rocks?</div>
          <div style={{width: '100%', height: '50%', backgroundColor: 'green'}}></div>
        </SlidingPane>
    </S.Header>
  </>
  );
};

export default Header;
