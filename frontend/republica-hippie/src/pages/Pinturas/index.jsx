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


import pinturas_icon from "../../assets/pinturas/pinturas_icon.svg";


const Pinturas = () => {
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
            titleIcon={pinturas_icon}
            title="PINTURAS"
            introContent="A pintura é uma técnica de aplicar pigmentos a uma superfície, independentemente da forma do pigmento, para colorir essa superfície. Essa forma de arte acompanha a humanidade em toda sua história, sempre estando presente como uma forma de comunicação. Encontre vários artigos que podem deixar seu ambiente mais colorido!"
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
                    productImg='https://res.cloudinary.com/republica-hippie/image/upload/v1657134729/products/dal0mdiotc56cwecux5e.jpg'
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

export default Pinturas;