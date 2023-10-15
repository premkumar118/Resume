import Stylecss from "../styles/left-box.module.css"

const Skills = () => {
    return (
        <div className={Stylecss.skills}>
            <h4>SKILLS</h4>
            <hr />
            <ul>
                <li>Computer Literacy</li>
                <li>Good Communication</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
            </ul>
        </div>
    );
}

export default Skills;