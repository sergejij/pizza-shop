import React from "react";
import cn from "classnames";
import PropTypes from 'prop-types';

const Button = ({children, outline, cart, onClick}) => {
    return (<button onClick={onClick} className={cn('button', {
        'button--outline': outline,
        'button--cart': cart,
    })}>{children}</button>);
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;