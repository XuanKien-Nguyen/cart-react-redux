import React, { Component } from 'react';
import * as msg from './../constants/Message';

class Product extends Component {
    render() {
        var {product} = this.props;

        return (
            <div className="col-lg-3 col-md-5 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt={product.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="">${product.price}</span>
                            <br />
                            <span className="">
                                <a 
                                    className="btn btn-dark" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    data-original-title="Add to Cart"
                                    onClick={() => this.onAddToCart(product)}// Khi có tham số phải viết dạng arrow func
                                >
                                    MUA HÀNG <i className="fa fa-angle-right right ml-sm-2"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showRating = (rating) => {
        //Dùng vòng lặp phải thêm key và key: unique
        var result = [];
        for(var i = 1; i <= rating; i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }

        for(var j = 1; j <= (5- rating); j++){
            result.push(<i key={i+j} className="fa fa-star-o"></i>);
        }
        return result;
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(msg.MSG_ADD_SUCCESS)
    }
}



export default Product;
