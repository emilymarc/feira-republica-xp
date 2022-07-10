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
  const [products, setProducts] = useState([]);

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
        <Header setProducts={setProducts}></Header>
          <DetailedBg>
            <h3 style={{textAlign: 'center', paddingTop: '40px', marginBottom: '40px'}}>{products.length} resultado(s) para a pesquisa: "{term}"</h3>
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
            : <p style={{color: 'gray', marginTop: '140px', marginBottom: '210px', textAlign: 'center'}}>Nenhum resultado encontrado.</p>}
            </ProductListItemContainer>
          </DetailedBg>
        <Footer></Footer>
    </>
  )
}

export default Search;