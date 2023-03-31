import React from 'react'
import approachStyles from './Approach.module.css'

const Approach = () => {
    const approach = [
        { name: "Youtube", url: "https://www.youtube.com/channel/UCgcd6qxn6oNMxYDeD2uwaKA" },
        { name: "Github", url: "https://github.com/beKashif" },
        { name: "SoftoKit", url: "https://softokit.com/" },
        { name: "ConvertingApp", url: "https://www.convertingapp.com/" }
    ]
  return (
    <div className={approachStyles.mainContainer}>
        <div className={approachStyles.container}>
            <h2>Approach me</h2>
            <ul>
                {approach.map((skill) => (
                    <li key={skill.name}>
                        <a href={skill.url} target='_blank' rel='noopener noreferrer'>
                            {skill.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Approach