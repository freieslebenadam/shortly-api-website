import React from 'react'
import '../style/Button.scss'

function Button({children, type, link, func, border}) {
    let element

    if (type === "button") {
        element = (
            <button className={`button ${border}`} type={func}>
                {children}
            </button>
        )
    } else if (type === "anchor") {
        element = (
            <a className={`button ${border}`} href={link}>
                {children}
            </a>
        )
    }

    return element
}

Button.defaultProps = {
    type: "button",
    link: null,
    func: "button",
    border: "round"
}

export default Button