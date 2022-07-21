import React from 'react';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ProductComponent = () => {
    const { products } = useSelector((state) => state.products);
    // const renderList = produts.map((product) => {

    // })
    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="text-left container p-2">
                    <h4 className=""><strong>Bestsellers</strong></h4>
                    <div className="row">
                        {products.map((product, id) => (
                            <div className="col-lg-3 col-md-6 mb-2" key={id}>
                                <div className="card w-100 h-100">
                                    <Link className='text-dark' to={`/product/${product.id}`}>
                                        <div className="card-body p-3">
                                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                data-mdb-ripple-color="light">
                                                <img src={product.image}
                                                    className="w-75 d-block m-auto p-3" />
                                                <a href="#!">
                                                    <div className="mask">
                                                        <div className="d-flex justify-content-start align-items-end h-100">
                                                            <h5><span className="badge bg-success ms-2">New</span></h5>
                                                        </div>
                                                    </div>
                                                    <div className="hover-overlay">
                                                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a href="" className="text-reset">
                                                <h6 className="card-title">{product.title}</h6>
                                            </a>
                                            <h6 className="">${product.price}</h6>
                                            <a href="" className="text-reset">
                                                <p className='text-left '>{product.category}</p>
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductComponent