import * as React from 'react';
import {Row, Col} from 'reactstrap';

import ItemImage from './ItemImage';

export interface IItem {
    img: string,
    title: string,
    description: string,
    price: number
}

const styles = {
    container: {
        boxShadow: '0px 1px 5px 0px rgba(179,168,179,1)'
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
        paddingTop: '20px'
    },
    textContainer: {
        paddingTop: '20px',
        textAlign: 'left' as 'left'
    },
    title: {

    }
}

class Item extends React.Component<IItem, {}> {

    constructor(props: IItem) {
        super(props);
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
                </Col>
            </Row>
        );
    }

}

export default Item;