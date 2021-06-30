import React, {useState} from 'react'
import Button from './Button'

function ShortLinkItem({originalLink, shortenedLink}) {
    const buttons = {
        copyButton: <Button type="button" border="soft" onClick={copyLink}>Copy</Button>,
        copiedButton: <Button specialClass="purp" type="button" border="soft">Copied!</Button>
    }
    const [activeButton, setActiveButton] = useState(buttons.copyButton)

    const checkLink = /^http*/
    let linkHref
    if (checkLink.test(shortenedLink)) {
        linkHref = shortenedLink
    } else {
        linkHref = "http://" + shortenedLink
    }

    function copyLink() {
        navigator.clipboard.writeText(shortenedLink)
        setActiveButton(buttons.copiedButton)
        setTimeout(() => {
            setActiveButton(buttons.copyButton)
        },500)
    }

    return (
        <div className="short-link-item">
            <p className="original-link">{originalLink}</p>
            <a target="_blank" href={linkHref} className="shortened-link">{shortenedLink}</a>
            {activeButton}
        </div>
    )
}

export default ShortLinkItem