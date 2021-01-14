import React from "react";
import cn from "classnames";

const Button = ({children, outline, cart, onClick}) => {
    return (<button onClick={onClick} className={cn('button', {
        'button--outline': outline,
        'button--cart': cart,
    })}>{children}</button>);
};

export default Button;