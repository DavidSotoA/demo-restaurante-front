import * as React from 'react';

const styles = {
    container: {
        display:            "flex" as "flex",
        flexWrap:           "wrap" as "wrap",
        flexDirection:      "row"  as "row"
    },

    item_container: {
        marginRight:    30,
        marginTop:      30
    }
}

interface IPitemList {
    children: JSX.Element[]
}

class ItemList extends React.Component<IPitemList,{}> {

    constructor(props: IPitemList){
        super(props);
        this.renderItems = this.renderItems.bind(this);
    }

    public renderItems(items: JSX.Element[]) {
        return items.map( item => (
            <div style={styles.item_container}>
                {item}
            </div>
        ))
    }

    public render() {
        return (
            <div style={styles.container} >
                {this.renderItems(this.props.children)}
            </div>
        )
    }
}

export default ItemList;