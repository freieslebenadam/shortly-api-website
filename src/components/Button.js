import React from 'react'
import '../style/Button.scss'

function Button({children, type, link, func, border, onClick, specialClass}) {
    let element

    if (type === "button") {
        element = (
            <button className={`button ${border} ${specialClass}`} type={func} onClick={onClick}>
                {children}
            </button>
        )
    } else if (type === "anchor") {
        element = (
            <a className={`button ${border} ${specialClass}`} href={link} onClick={onClick}>
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
    border: "round",
    onClick: () => null,
    specialClass: ""
}

export default Button