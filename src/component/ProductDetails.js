import React from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProducts, removeSelectedProducts } from '../redux/actions/product';

const ProductDetails = () => {
    const products = useSelector((state) => state.product);
    console.log(products);
    const { productId } = useParams();
    const dispatch = useDispatch()

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Error", err);
        });
        console.log(response);
        dispatch(selectedProducts(response.data));
        console.log(response.data);
    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () =>{
            dispatch(removeSelectedProducts())
        }
    }, [productId]);


    return (
        <>
            <div className="container p-2 mt-3">
                {Object.keys(products).length == 0 ? (
                    <div>...Loading</div>
                ) : (
                    <div className="card shadow w-100m-auto h-100">
                        {/* <Link className='text-dark' to={`/product/${id}`}> */}
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-md-6 p-3">
                                    <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                        data-mdb-ripple-color="light">
                                        <img src={products.image}
                                            className="w-75 d-block m-auto p-3"/>
                                    </div>
                                </div>
                                <div className="col-md-6 p-3">
                                <a href="" className="text-reset">
                                        <h5 className="card-title mb-3">{products.title}</h5>
                                    </a>
                                    <h4 className="mb-2 badge bg-success ms-2 p-2">${products.price}</h4>
                                    <a href="" className="text-reset">
                                        <h5 className='text-left bg-light p-2 text-info'>{products.category}</h5>
                                    </a>
                                    <p>{products.description}</p>
                                    <button className='btn btn-danger w-50'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails