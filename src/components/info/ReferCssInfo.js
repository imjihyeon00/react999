import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function ReferCssInfo({id, link, title, desc1, desc2, default1, apply, version, use, definition}){
    return (
        <li>
            <Link to={{pathname:"refer-detail-css", state: {id, link, title, desc1, desc2, default1, apply, version, use, definition}}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{apply}</span>
            </Link>
        </li>
    )
}
ReferCssInfo.propTypes = {
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    default1: PropTypes.string.isRequired,
    apply: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired
}
export default ReferCssInfo;