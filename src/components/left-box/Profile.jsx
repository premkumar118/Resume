import image from "../profile-image/PREM1.jpg"
import Stylecss from "../styles/left-box.module.css"

const Profile = () => {
    return (
        <div className={Stylecss.profile}>
            <img src={image} alt="img" />
            <h1>PREMKUMAR R</h1>
            <h3>FRESHER</h3>
        </div>
    );
}

export default Profile;