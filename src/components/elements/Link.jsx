import React from "react";
import { Link } from "react-router-dom";


const Link = (prop) => {
    return (
        <a href={prop.to} className={prop.className}>
            {children}
        </a>
    )
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Link.defaultProps = {
    target: '_self',
    className: '',
};

export default Link;