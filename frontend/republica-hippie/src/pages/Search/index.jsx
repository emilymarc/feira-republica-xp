import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from '../../components/DetailedBg';
import ProductListItemContainer from '../../components/ProductListItemContainer';
import ProductListItem from '../../components/ProductListItem';
import { useParams } from 'react-router-dom';
import { searchByTerm } from '../../services/api';
import { toast } from 'react-toastify';
const Search = () => {
  const { term } = useParams();
  const [products, setProducts] = React.useState([]);

  useEffect (() => {
    const loadProducts = async () => {
        try {
            const response = await searchByTerm(term);
            setProducts(response.data);
        } catch (error) {
            toast.error(error);
        }
    }
    loadProducts();
  }, [setProducts]);

  return ( 
    <>
        <Header></Header>
          <DetailedBg>
            <h3 style={{textAlign: 'center', paddingTop: '40px', marginBottom: '40px'}}>Resultados da pesquisa:</h3>
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
            : <p style={{color: 'gray', marginTop: '140px', marginBottom: '210px', textAlign: 'center'}}>Nenhum resultado encontrado.</p>}
            </ProductListItemContainer>
          </DetailedBg>
        <Footer></Footer>
    </>
  )
}

export default Search;