import React from 'react'
import './App.scss'
import Header from './components/Header'
import Intro from './components/Intro'
import Shortener from './components/Shortener'
import Statistics from './components/Statistics'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Shortener />
                <Statistics />
            </main>
            <Footer />
        </>
    )
}

export default App