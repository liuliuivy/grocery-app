import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';


const Product = props => {
    const {index, onVote, product} = props;
    const {name, votes} = product;
    const plus = () => {
        onVote('up',index);
        // Call props.onVote to increase the vote count for this product
    };
    const minus = () => {
        onVote('down',index);
        // Call props.onVote to decrease the vote count for this product
    };
    return (
        <li>
            <span>{ name }</span> - <span>votes: {votes}</span>
            <button onClick={plus}>+</button>{" "}
            <button onClick={minus}>-</button>
        </li>
    );
};

class GroceryApp extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            products: props.products
        };
    }

    onVote = (dir, index) => {
        let { products } = this.state;
        let product = products[index];
        let { votes } = product;
        if (dir == 'up') {
            votes++;
        } else if (dir == 'down') {
            votes--;
        }
        product = {...product, votes};
        products[index] = product;
        this.setState({
            products
        });
    };
pr
    render() {
        const {products} = this.state;
        return (
            <ul>
                {products.map((product,index) =>(
                    <li key={index} > <Product product={product}  index={index} onVote={this.onVote}/></li>) )}
            </ul>
        );
    }
}


ReactDOM.render(<GroceryApp
    products={[
        { name: "Oranges", votes: 0 },
        { name: "Apples", votes: 0 },
        { name: "Bananas", votes: 0 }
    ]}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
