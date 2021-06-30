import React, {useState, useContext, useEffect} from 'react'
import '../style/Shortener.scss'
import Button from './Button'
import ShortLinkItem from './ShortLinkItem'
import {ShortContext} from '../ShortContext'

function Shortener() {
    const {shortenedLinks, shortenLink, fetching} = useContext(ShortContext)
    const [input, setInput] = useState("")
    const [valid, setValid] = useState(false)
    const [validAction, setValidAction] = useState(false)
    const [showValid, setShowValid] = useState(false)

    const validRE = /^((http|https)(:\/\/))?[A-Za-z0-9\.]+\.[a-z0-9]+/
    const invalidClass = valid ? "" : "invalid"
    const hiddenClass = valid ? "invalid-text hidden" : "invalid-text"

    const shortLinkItems = shortenedLinks.map(item => {
        return (
            <ShortLinkItem
                key={item.id}
                originalLink={item.originalLink}
                shortenedLink={item.shortenedLink}
            />
        )
    })

    function validateInput() {
        if (valid) {
            setValidAction(true)
            setShowValid(false)
        } else {
            setValidAction(false)
            setShowValid(true)
        }
    }

    useEffect(() => {
        if (validAction) {
            shortenLink(input)
            setInput("")
            setValidAction(false)
        }
    }, [validAction])

    function handleClick() {
        validateInput()
    }

    function handleChange(e) {
        setInput(e.target.value)
        setValid(validRE.test(e.target.value))
    }

    return (
        <article id="shortener">
            <div className="container">
                <form>
                    <input 
                        className={showValid ? invalidClass : ""}
                        type="text"
                        placeholder="Shorten a link here..."
                        value={input}
                        onChange={(e) => handleChange(e)}
                    />
                    <p className={showValid ? hiddenClass : "invalid-text hidden"}>
                        Please enter a valid url
                    </p>
                    <Button specialClass={fetching ? "inactive" : ""} onClick={fetching ? null : handleClick} border="soft">
                        {fetching ? "Shortening..." : "Shorten It!"}
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