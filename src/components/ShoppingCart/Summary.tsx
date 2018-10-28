import * as React from 'react';
import { connect } from 'react-redux';

import { Item as ShoppingCartItem } from '../../store/shoppingCart';
import {ApplicationState} from '../../store';


interface StateProps {
    items: ShoppingCartItem[]         
}

type AllProps = StateProps;

class Summary extends React.Component<AllProps, {}> {

    constructor(props: AllProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                {this.props.items.map(this.renderItems)}
            </div>
        )
    }

    private renderItems(element: ShoppingCartItem) {
        return (
            <div>
                <h1>{element.name}</h1>
                <h2>#: {element.items}</h2>
                <h3>$: {element.price}</h3>
            </div>
        )
    }
}

const mapStateToProps = ( { shoppingCart } : ApplicationState ) => ({
    items: shoppingCart.data
})

const mapDispatchToProps = () => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Summary);