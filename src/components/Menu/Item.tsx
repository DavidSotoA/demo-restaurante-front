import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Item as ShoppingCartItem, addItem } from '../../store/shoppingCart';

import {Row, Col} from 'reactstrap';
import {MdAddShoppingCart} from 'react-icons/md';

import ItemImage from './ItemImage';

export interface IItem {
    img: string,
    title: string,
    description: string,
    price: number
}

interface PropsFromDispatch {
    addItemToShoppingCart: typeof addItem
}

type AllProps = IItem & PropsFromDispatch;

const styles = {
    container: {
        boxShadow: '0px 1px 5px 0px rgba(179,168,179,1)',
        minHeight: '120px'
    },
    description: {
        fontSize: '12px'
    },
    imgContainter: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    priceContainer: {
        color: '#29CE8C',
        fontSize: '20px',
        paddingTop: '20px',
        textAlign: 'right' as 'right'
    },
    shop: {
        color: 'black',
        cursor: 'pointer',
        fontWeight: "bold" as "bold",
    },
    textContainer: {
        paddingTop: '20px',
        textAlign: 'left' as 'left'
    },
    title: {

    }
}

class Item extends React.Component<AllProps, {}> {

    constructor(props: AllProps) {
        super(props);

        this.addItemToShoppingCart = this.addItemToShoppingCart.bind(this);
        this.getShoppingCartItem = this.getShoppingCartItem.bind(this);
    }

    public render() {

        const { img, title, description, price } = this.props;

        return (
            <Row  style={styles.container}>
                <Col xs="12" md="3" style={styles.imgContainter}>
                    <ItemImage  img={img} />
                </Col>
                <Col xs="12" md="7" style={styles.textContainer}>
                    <h4>
                        {title}
                    </h4>
                    <p style={styles.description}>
                        {description}
                    </p>
                </Col>
                <Col xs="12" md="2" style={styles.priceContainer}>
                    <p>$ {price}</p>
                    <p style={styles.shop}><MdAddShoppingCart onClick={this.addItemToShoppingCart} /></p>
                </Col>
            </Row>
        );
    }

    private addItemToShoppingCart() {
        const { addItemToShoppingCart } = this.props;
        addItemToShoppingCart(this.getShoppingCartItem());
    }

    private getShoppingCartItem(): ShoppingCartItem {
        
        const { title, price } = this.props;

        const item: ShoppingCartItem = {
            items: 1,
            name: title,
            price
        }

        return item;
    }

}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItemToShoppingCart: (item: ShoppingCartItem) => dispatch(addItem(item))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)