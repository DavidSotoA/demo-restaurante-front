import * as React from 'react';
import {  CardImg, CardBody } from 'reactstrap';
import { FaCartPlus, FaStar, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import CircleButton from '../Utilities/CircleButton';
 

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
        position:               "absolute" as 'absolute',   
        top:                    140,
        left:                   96.8005,
        backfaceVisibility:     "hidden" as "hidden"
    },

    button_get_details: {
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
        bottom:                 "28px",
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

                            <CircleButton size={45} bg_color="#8BC34A" style={styles.button_car_add}>
                                <FaCartPlus color="white" size="1.4rem"/>
                            </CircleButton>

                            <div>
                                <strong style={styles.star}><FaStar size="1.2rem" color="#FFD700"/><span> {this.props.estrellas}</span></strong>

                                <CircleButton onClick={this.flipCard} size={40} bg_color="#C2185B"   style={styles.button_get_details}>
                                    <FaSearchPlus color="white" size="1.2rem"/>
                                </CircleButton>
                            </div>
                        </CardBody>
                    </div>

                    <div className="card" style={styles.back_face}>
                        <CardBody>
                            <h5 className="card-title" style={styles.title}>{this.props.nombre}</h5>
                            <p className="card-text" style={ styles.description }>{this.props.descripcion}</p>
                     
                            <CircleButton onClick={this.flipCard} size={40} bg_color="#C2185B"   style={styles.button_get_details}>
                                <FaSearchMinus color="white" size="1.2rem"/>
                            </CircleButton>
                        </CardBody>
                    </div>

                </div>
            </div>

        )
    }
}

export default Item;