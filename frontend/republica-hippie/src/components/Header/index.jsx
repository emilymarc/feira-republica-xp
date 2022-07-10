import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/Icon.svg";
import IconCart from "../../assets/shopping-cart.svg";
import profile from "../../assets/profile.svg";
import iconExpositores from "../../assets/IconExpositores.svg";
import iconExpositoresActive from "../../assets/IconExpositoresActive.svg";
import { searchByTerm } from '../../services/api';
import * as S from "./styled";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../../redux/feature/cartSlice"
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

const Header = ({ setProducts }) => {
  const navigate = useNavigate();
  const idClient = useSelector((state) => state.user.id_client);
  const isLogged = useSelector((state) => state.user.isLogged);
  const fullUrl = window.location.href;
  const compareUrl = `http://localhost:3000`;
  const dispatch = useDispatch();
  dispatch(getTotal());
  const { totalItems } = useSelector((state) => state.cart);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async (values) => {
      const { search } = values;
      const response = await searchByTerm(search);
      navigate(`/search/${search}`);
      setProducts(response.data);
      
  }
  })
  
  return (
    <>
    <S.Header>
      <S.LogoArea>
        <S.LogoLink to="/">
          <img src={logo} alt="Republica Hippie" />
        </S.LogoLink>

        <S.SearchContainer onSubmit={formik.handleSubmit}>
          <S.Search 
            type="search" 
            id="search"
            value={formik.values.search}
            onChange={formik.handleChange}
          >
          </S.Search>
          <S.SearchButton type="submit">
            <img src={search} />
          </S.SearchButton>
        </S.SearchContainer>

        <S.Menu>
          <S.IconLink to="/carrinho">
            <S.Icon
              src={IconCart}
            ></S.Icon>
            {totalItems > 0 ? <S.CartBadge><span style={{color: '#fff'}}>{totalItems}</span></S.CartBadge> : null}
          </S.IconLink>
          {isLogged ? <S.IconLink to={`/perfil/${idClient}`}>
            <S.Icon src={profile} />
          </S.IconLink> : <S.IconLink to={`/login`}>
            <S.Icon src={profile} />
          </S.IconLink>}
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
    </S.Header>
  </>
  );
};

export default Header;
