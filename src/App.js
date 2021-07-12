import React from 'react'
import Favicon from 'react-favicon'
import './App.scss'
import Header from './components/Header'
import Intro from './components/Intro'
import Shortener from './components/Shortener'
import Statistics from './components/Statistics'
import Footer from './components/Footer'
import {ShortContextProvider} from './ShortContext'
import fav from './images/favicon_32x32.png'

function App() {
    return (
        <>
            <Favicon url={fav} />
            <ShortContextProvider>
                <Header />
                <main>
                    <Intro />
                    <Shortener />
                    <Statistics />
                </main>
                <Footer />
            </ShortContextProvider>
        </>
    )
}

export default App