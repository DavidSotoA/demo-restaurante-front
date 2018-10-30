import * as React from 'react';
import {  CardImg, CardBody } from 'reactstrap';
import { FaCartPlus, FaStar, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
 

const styles = {
    container_3d: {
        height:         370,
        width:          250,
        perspective:    500    
    },

    double_card: {
        transformStyle:     "preserve-3d" as "preserve-3d",
        transformOrigin:    "center right",
        transition:         "transform .1s",
        width:              "100%",
        height:             "100%",
    },

    description: {
        textAlign: "justify" as "justify"
    },

    front_face: {
        backfaceVisibility: "hidden" as "hidden",
        position:           "absolute" as "absolute",
        boxShadow:          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        height:             "100%"
    },

    back_face: {
        width:              "100%",
        height:             "100%",
        position:           "absolute" as "absolute",
        transform:          "rotateY(180deg)",
        boxShadow:          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        backfaceVisibility: "hidden" as "hidden"
    },

    button_car_add: {
        backgroundColor:        "#8BC34A",
        border:                 "none",
        color:                  "white",
        padding:                "16px",
        textAllign:             "center",
        textDecoration:         "none",
        display:                "inline-block",
        margin:                 "4px 2px",
        cursor:                 "pointer",
        borderRadius:           "50%",
        position:               "absolute" as 'absolute',   
        top:                    128,
        left:                   96.8005,
        backfaceVisibility:     "hidden" as "hidden"
    },

    button_get_details: {
        backgroundColor:        "#C2185B",
        border:                 "none",
        color:                  "white",
        padding:                "12px",
        textAllign:             "center",
        textDecoration:         "none",
        display:                "inline-block",
        margin:                 "4px 2px",
        cursor:                 "pointer",
        borderRadius:           "50%",
        position:               "absolute" as "absolute",
        bottom:                 "20px",
        right:                  "20px",
        backfaceVisibility:     "hidden" as "hidden"
    },

    title: {
        textAlign: "center" as "center",
        marginTop: "35px"
    },

    price: {
        textAlign:              "center" as "center",
        color:                  "rgb(41, 206, 140)",
        backfaceVisibility:     "hidden" as "hidden"
    },

    star: {
        color:                  "#FFD700",
        position:               "absolute" as "absolute",
        bottom:                 "40px",
        backfaceVisibility:     "hidden" as "hidden"
    }
}

interface ISitem {
    flip: boolean
}

interface IPitem {
    id: number,
    nombre: string,
    precio: number,
    img: string,
    estrellas: number,
    descripcion: string
}

class Item extends React.Component<IPitem, ISitem> {

    constructor(props: IPitem) {
        super(props);
        this.state = { flip: false };

        this.flipCard = this.flipCard.bind(this);
    }

    public flipCard() {
        this.setState({ flip: !this.state.flip });
    }

    public render() {
        return (
            <div style={styles.container_3d}>
                <div className="double-card" style={this.state.flip ? {transform: "translateX(-100%) rotateY(-180deg)"} : {} } >

                    <div className="card" style={styles.front_face}>
                        <CardImg top={true} width="100%" src={this.props.img} alt="Card image cap" />
                        <CardBody>
                            <h5 style={styles.title}>{this.props.nombre}</h5>
                            <strong><p style={styles.price}>${this.props.precio}</p></strong>
                            <button style={styles.button_car_add}><FaCartPlus size="1.4rem"/></button>

                            <div>
                                <strong style={styles.star}><FaStar size="1.2rem" color="#FFD700"/><span> {this.props.estrellas}</span></strong>
                                <button onClick={this.flipCard} style={styles.button_get_details}><FaSearchPlus size="1.1rem"/></button>
                            </div>
                        </CardBody>
                    </div>

                    <div className="card" style={styles.back_face}>
                        <CardBody>
                            <h5 className="card-title" style={styles.title}>{this.props.nombre}</h5>
                            <p className="card-text" style={ styles.description }>{this.props.descripcion}</p>

                            <div>
                                <button onClick={this.flipCard} style={styles.button_get_details}><FaSearchMinus size="1.1rem"/></button>
                            </div>
                        </CardBody>
                    </div>

                </div>
            </div>

        )
    }
}

export default Item;