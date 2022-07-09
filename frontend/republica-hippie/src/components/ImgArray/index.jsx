import React, { useState, useEffect } from "react";
import { getProductsById } from "../../services/api";

const ImgArray = ({imgId}) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProductsById(imgId);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  }, [setProducts]);

  return products.imgs.map((product) => {
    return (
      <div key={product.id_products}>
        <img src={product.img} alt="Produto" />
      </div>
    );
  });

}

export default ImgArray;
