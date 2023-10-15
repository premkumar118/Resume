import Stylecss from "../styles/right-box.module.css"

const Education = () => {
    return (
        <div className={Stylecss.education}>
            <h2>EDUCATION HISTORY</h2>
            <hr />
            <span>
                <h4>Bachelor of Engineering in <br />Electrical and Electronics Engineering</h4>
                <h3>Nandha Engineering College - Erode</h3>
                <h5>AUG 2020 - MAY 2023</h5>
                <p>Completed with CGPA of  <b> 84.6</b></p>
            </span>
            <span>
                <h4>Diploma in <br />Electrical and Electronics Engineering</h4>
                <h3>Nandha Polytechmic College - Erode</h3>
                <h5>APR 2018 - MAY 2020</h5>
                <p>Completed with PERCENTAGE of<b> 82</b></p>
            </span>
            <span>
                <h4>Higher Secondary</h4>
                <h3>GV Higher Secondary School - Metturdam</h3>
                <h5>JUN 2017 - APR 2018</h5>
                <p>Completed with PERCENTAGE of<b> 72</b></p>
            </span>
        </div>
    );
}

export default Education;