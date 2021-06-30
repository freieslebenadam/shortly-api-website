import React from 'react'
import Button from './Button'

function ShortLinkItem({originalLink, shortenedLink}) {
    return (
        <div className="short-link-item">
            <p className="original-link">{originalLink}</p>
            <p className="shortened-link">{shortenedLink}</p>
            <Button type="button" border="soft">
                Copy
            </Button>
        </div>
    )
}

export default ShortLinkItem