import React, {useState} from 'react'
const ShortContext = React.createContext();

function ShortContextProvider({children}) {
    const [fetching, setFetching] = useState(false)
    const [shortenedLinks, setShortenedLinks] = useState([])

    function shortenLink(link) {
        let latestId = Math.max.apply(Math, shortenedLinks.map(link => link.id))
        if (latestId === -Infinity) {
            latestId = 0
        }
        let newShortenedLink = {
            id: latestId + 1,
            originalLink: link,
            shortenedLink: ""
        }
        setFetching(true)
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then(response => response.json())
            .then(data => {
                setFetching(false)
                setShortenedLinks(prev => [
                    ...prev,
                    { ...newShortenedLink, shortenedLink: data.result.short_link}
                ])
            })
    }
    return (
        <ShortContext.Provider value={{shortenLink, shortenedLinks, fetching}}>
            {children}
        </ShortContext.Provider>
    )
}

export {ShortContextProvider, ShortContext}