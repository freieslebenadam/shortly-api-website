import React, {useState} from 'react'
import '../style/Shortener.scss'
import Button from './Button'
import ShortLinkItem from './ShortLinkItem'

function Shortener() {
    const [input, setInput] = useState("")
    let valid = false
    const invalidClass = valid ? "" : "invalid"
    const hiddenText = valid ? "hidden" : ""

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
                    <ShortLinkItem 
                        originalLink="https://www.frontendmentor.io/"
                        shortenedLink="https://rel.ink/k4lKyk"
                    />
                    <ShortLinkItem 
                        originalLink="https://www.frontendmentor.io/sdf186g51a68s4f1s65d1f98s1df65s1"
                        shortenedLink="https://rel.ink/k4lKyk"
                    />
                </div>
            </div>
        </article>
    )
}

export default Shortener