import * as React from 'react';

// interface IPbutton {
//     size: number,
//     bg_color: string,
//     style: object,
//     onclick: 
// }

const CircleButton = (props: any) => (
    <div onClick={props.onClick} style={{
        backgroundColor:    props.bg_color,
        display:            "inline-block" as "inline-block",
        borderRadius:       "50%",
        width:              props.size,
        height:             props.size,
        textAlign:          "center" as "center",
        cursor:             "pointer" as "pointer",
        lineHeight:         props.size-2 + "px",
        ...props.style
    }}>

        {props.children}
    </div>
)

export default CircleButton;