import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function ReferJsInfo({id, link, title, desc1, desc2, parameters, return1, definition}){
    return (
        <li>
            <Link to={{pathname:"refer-detail-js", state: {id, link, title, desc1, desc2, parameters, return1, definition}}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{return1}</span>
            </Link>
        </li>
    )
}
ReferJsInfo.propTypes = {
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    return1: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired
}
export default ReferJsInfo;