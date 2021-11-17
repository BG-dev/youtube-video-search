import React from "react";
import classNames from "classnames";

import '../scss/components/button.scss'

function Button({children, className}){
    return(
        <button
            className={classNames('button', className)}
        >
            {children}
        </button>
    );
}

export default Button;