import React from 'react'
import SkillsStyle from './Skills.module.css'

const Skills = () => {
    const skills =  [
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "Bootstrap", url: "https://getbootstrap.com/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React JS", url: "https://reactjs.org/" },
        { name: "React Native", url: "https://reactnative.dev/" },
        { name: "Next JS", url: "https://nextjs.org/" },
        { name: "Node JS", url: "https://nodejs.org/" },
        { name: "Express JS", url: "https://expressjs.com/" },
        { name: "Python", url: "https://www.python.org/" },
        { name: "Flask", url: "https://flask.palletsprojects.com/" },
        { name: "Three.js", url: "https://threejs.org/" }
    ];
  return (
    <div className={SkillsStyle.mainContainer}>
        <div className={SkillsStyle.container}>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill) => (
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

export default Skills