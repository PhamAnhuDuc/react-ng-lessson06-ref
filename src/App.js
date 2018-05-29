import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
class App extends Component {
    onClick2(text) {
        console.log(text);

    }
    onClick() {
        console.log('day la app component');

    }
    onAddProduct = () => {
        console.log(this.refs);
        
    }
    render() {
        var products = [
            {
                id: 1,
                name: "App Pllllleeee",
                price: 1500000000000,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XyYvugOVJpUQF1N_5egCq6yM70jwX1eLiniNTPKZvXEypBfdww',
                status: true

            },
            {
                id: 2,
                name: "Sam sung",
                price: 1800000000000,
                image: 'data:image/jpeg;base64,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',
                status: true

            },
            {
                id: 3,
                name: "Oppeeeee",
                image: 'data:image/jpeg;base64,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',
                price: 1900000000000,
                status: true

            },
        ]
        let elements = products.map((product, index) => {
            if (product.status) {
                return <Product key={index}
                    price={product.price}
                    image={product.image}
                >{product.name}</Product>
            }

        })
        return (
            <div>
                <div className="navbar">
                    <a className="navbar-brand" >Props</a>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form action="" method="POST" role="form">
                            <div className="form-group">
                                <label >tên sp </label>
                                <input type="text" className="form-control" ref = "keytudat"/>
                                </div>
                            <button type="submit" className="btn btn-primary" onClick={this.onAddProduct }>lưu</button>
                            </form>
                    </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {elements}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-primary" onClick={this.onClick}>Click Me</button>
                            <button type="button" className="btn btn-primary" onClick={() => { this.onClick2('abc') }}>Click Me2</button>
                        </div>

                    </div>
                </div>


                );
            }
        }
        
        export default App;
