import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from "../redux/actions/product";

const ProductList = () => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const productUrl = 'https://fakestoreapi.com/products';
    const fetchProduct = async () => {
        const response = await  axios.get(productUrl).catch((err) => {
            console.log("Error", err);
        });
        dispatch(setProducts(response.data));
        // console.log(response.data);
    };
    useEffect(() => {
      fetchProduct();
    }, []);
    // console.log(products);
    
  return (
    <>
        <ProductComponent></ProductComponent>
    </>
  )
}

export default ProductList