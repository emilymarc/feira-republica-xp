import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageIntro from "../../components/PageIntro";
import ProductListItem from "../../components/ProductListItem";
import ProductListItemContainer from "../../components/ProductListItemContainer";
import DetailedBg from "../../components/DetailedBg";
import { baseUrl, getProductsByCategory } from "../../services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import ceramica_icon from "../../assets/ceramica/ceramica_icon.svg";

const Ceramica = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try{
        const response = await getProductsByCategory(window.location.pathname);
        setProducts(response.data);
      } catch (error) {
        toast.error(`Erro ao carregar os produtos: ${error}`);
      }
    }
    loadProducts();
  }, [setProducts]);

  return (
    <>
      <Header></Header>
        <DetailedBg>
          <PageIntro
            titleIcon={ceramica_icon}
            title="CERÂMICAS"
            introContent="A cerâmica é uma técnica de produção de objetos bem antiga e usada por várias culturas diferentes. Geralmente tem argila como matéria prima e é submetida a altas temperaturas. Conheça várias peças feitas por uma técnica que é tão antiga na história da humanidade!"
          ></PageIntro>

          <ProductListItemContainer>
            {products.length > 0 ? 
              (products.map(product => {
                const path = `/product/${product.code_product}`;
                return(
                  <ProductListItem
                    key={product.code_product}
                    productPath={path}
                    productId={product.id}
                    productTitle={product.name}
                    productValue={product.price.replace(".", ",")}
                    productImg={!product.image_products[0].url_img ? null : product.image_products[0].url_img}
                  ></ProductListItem>
                )
              }))
            : <p style={{color: 'gray', marginTop: '120px', marginBottom: '190px', textAlign: 'center'}}>Que pena. Não há nenhum produto aqui :/</p>}   
          </ProductListItemContainer>

        </DetailedBg>
      <Footer></Footer>
    </>
  );
};

export default Ceramica;

