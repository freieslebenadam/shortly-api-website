import React from 'react'
import '../style/Intro.scss'
import Button from './Button'
import vectorWorking from '../images/illustration-working.svg'

function Intro() {
    return (
        <article id="intro">
            
            <div className="container">
                <section className="intro">
                    <div className="intro-pic">
                        <div className="intro-pic-img">
                            <img src={vectorWorking} alt="Picture not found" />
                        </div>
                    </div>
                    <div className="intro-info">
                        <h1>More than just shorter links</h1>
                        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                        <div className="intro-info-button-wrapper">
                            <Button type="anchor" link="#" function="button" >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Intro