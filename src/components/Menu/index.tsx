import * as React from 'react';
import {Row, Col} from 'reactstrap';

import Item from './Item';
import {IItem} from './Item';
import items from './menuItems';

const styles = {
    col: {
        marginBottom: '40px'
    },
    container : {
        border: '3px dashed #fbd666',
        justifyContent: 'space-evenly',
        margin: '60px',
        paddingTop: '30px'
    },
    itemContainer: {
        justifyContent: 'space-evenly'
    }
}

class Menu extends React.Component {

    public render() {
        return (
            <Row style={styles.container}>
                <Col xs="11">
                    <Row style={styles.itemContainer}>
                        {items.map(this.drawItems)}
                    </Row>
                </Col>
            </Row>
        );
    }

    private drawItems(element: IItem) {
        return (
            <Col md="5" xs="12" style={styles.col}>
                <Item {...element} />            
            </Col>
        )
    }

}

export default Menu;