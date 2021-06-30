import React from 'react'
import './App.scss'
import Header from './components/Header'
import Intro from './components/Intro'
import Shortener from './components/Shortener'
import Statistics from './components/Statistics'
import Footer from './components/Footer'
import {ShortContextProvider} from './ShortContext'

function App() {
    return (
        <ShortContextProvider>
            <Header />
            <main>
                <Intro />
                <Shortener />
                <Statistics />
            </main>
            <Footer />
        </ShortContextProvider>
    )
}

export default App