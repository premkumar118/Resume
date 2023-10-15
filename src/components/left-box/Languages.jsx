import Stylecss from "../styles/left-box.module.css"

const Languages = () => {
    return (
        <div className={Stylecss.language}>
            <h4>LANGUAGES</h4>
            <hr />
            <ul>
                <li>JAVA</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>BOOTSTRAP</li>
                <li>TAILWIND</li>
                <li>REACT</li>
            </ul>
        </div>
    );
}

export default Languages;