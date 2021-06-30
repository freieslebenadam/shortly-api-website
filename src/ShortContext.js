import React, {useState, useEffect} from 'react'
const ShortContext = React.createContext();

function ShortContextProvider({children}) {
    const [shortenedLinks, setShortenedLinks] = useState([
        {originalLink:"https://www.frontendmentor.io/",shortenedLink:"https://rel.ink/k4lKyk"},
        {originalLink:"https://www.frontendmentor.io/sdf186g51a68s4f1s65d1f98s1df65s1",shortenedLink:"https://rel.ink/k4lKyk"}
    ])

    function shortenLink(link) {
        let newShortenedLink = {
            originalLink: link,
            shortenedLink: ""
        }
        setShortenedLinks(prev => [
            ...prev,
            newShortenedLink
        ])
    }
    return (
        <ShortContext.Provider value={{shortenLink, shortenedLinks}}>
            {children}
        </ShortContext.Provider>
    )
}

export {ShortContextProvider, ShortContext}