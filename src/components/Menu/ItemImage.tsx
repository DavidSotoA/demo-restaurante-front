import * as React from 'react';

interface IItemImage {
    img: string
}

const styles = {
    container: {
        border: '3px solid #fbd666',
        borderRadius: '100%'
    },
    img : {
        borderRadius: '100%'
    },
    imgContainter: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    outerCircle: {
        border: '3px solid white',
        borderRadius: '100%'
    }
}

class ItemImage extends React.Component<IItemImage, {}> {

    public render() {
        return (
            <div style={styles.container}>
                <div style={styles.outerCircle}>
                    <img src={this.props.img} className="img-fluid" style={styles.img}/>
                </div>
            </div>
        )
    }

}

export default ItemImage