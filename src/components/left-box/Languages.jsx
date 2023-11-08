import Stylecss from "../styles/left-box.module.css"

const Languages = () => {
    return (
        <div className={Stylecss.language}>
            <h4>LANGUAGES</h4>
            <hr />
            <ul>
                <li>JAVA</li>
                <li>HTML, CSS</li>
                <li>JAVA SCRIPT</li>
                <li>REACT</li>
                <li>BOOTSTRAP</li>
            </ul>
        </div>
    );
}

export default Languages;
