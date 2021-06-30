import React, {useState, useContext} from 'react'
import '../style/Shortener.scss'
import Button from './Button'
import ShortLinkItem from './ShortLinkItem'
import {ShortContext} from '../ShortContext'

function Shortener() {
    const {shortenedLinks} = useContext(ShortContext)
    const [input, setInput] = useState("")
    
    let valid = false
    const invalidClass = valid ? "" : "invalid"
    const hiddenText = valid ? "hidden" : ""

    const shortLinkItems = shortenedLinks.map(item => {
        return (
            <ShortLinkItem
                key={item}
                originalLink={item.originalLink}
                shortenedLink={item.shortenedLink}
            />
        )
    })

    return (
        <article id="shortener">
            <div className="container">
                <form>
                    <input 
                        className={`${invalidClass}`}
                        type="text"
                        placeholder="Shorten a link here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <p className={`invalid-text ${hiddenText}`}>
                        Please enter a valid url
                    </p>
                    <Button border="soft">
                        Shorten It!
                    </Button>
                </form>
                <div className="link-list">
                    {shortLinkItems}
                </div>
            </div>
        </article>
    )
}

export default Shortener