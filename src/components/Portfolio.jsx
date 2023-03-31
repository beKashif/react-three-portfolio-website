import React from 'react'
import portfolioStyles from './Portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={portfolioStyles.container}>
        <h1>My Portfolio</h1>
        <ul>
            
            <li className={portfolioStyles.skillsList}>
                <iframe src="https://www.convertingapp.com/" frameBorder="0"></iframe>
            </li>
            <li className={portfolioStyles.skillsList}>
                <iframe src="https://softokit.com/" frameBorder="0"></iframe>
            </li>

        </ul>
    </div>
  )
}

export default Portfolio