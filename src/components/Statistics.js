import React from 'react'
import '../style/Statistics.scss'
import Stat from './Stat'

import iconRecords from '../images/icon-detailed-records.svg'
import iconCustom from '../images/icon-fully-customizable.svg'
import iconBrand from '../images/icon-brand-recognition.svg'

function Statistics() {
    return (
        <article id="statistics">
            <div className="container">
                <section className="statistics">
                    <div className="statistics-info">
                        <h1>Advanced Statistics</h1>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                    </div>
                    <div className="statistics-content">
                        <Stat 
                            icon={iconBrand}
                            title="Brand Recognition"
                            text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
                        />
                        <Stat 
                            icon={iconRecords}
                            title="Detailed Records"
                            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                        />
                        <Stat 
                            icon={iconCustom}
                            title="Fully Customizable"
                            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                        />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Statistics