import ProfilePic1 from './assets/Profile 1.jpg'
import ProfilePic2 from './assets/Profile 2.jpg'
import ProfilePic3 from './assets/Profile 3.jpg'
import ProfilePic4 from './assets/Profile 4.jpg'
import ProfilePic5 from './assets/Profile 5.jpg'
import ProfilePic6 from './assets/Profile 6.jpg'


function Card() {
    return (
        <div className="container">
        <div className="card">
            <img className="card-image" src={ProfilePic1} alt="profile picture" />
            <h2 className="card-title">Pratap Sing</h2>
            <p className="card-text">Software Engineer</p>
        </div>
        <div className="card">
            <img className="card-image" src={ProfilePic2} alt="profile picture" />
            <h2 className="card-title">Pratap Sing</h2>
            <p className="card-text">Software Engineer</p>
        </div>
        <div className="card">
            <img className="card-image" src={ProfilePic3} alt="profile picture" />
            <h2 className="card-title">Pratap Sing</h2>
            <p className="card-text">Software Engineer</p>
        </div>
        <div className="card">
            <img className="card-image" src={ProfilePic4} alt="profile picture" />
            <h2 className="card-title">Pratap Sing</h2>
            <p className="card-text">Software Engineer</p>
        </div>
        <div className="card">
            <img className="card-image" src={ProfilePic5} alt="profile picture" />
            <h2 className="card-title">Pratap Sing</h2>
            <p className="card-text">Software Engineer</p>
        </div>
        <div className="card">
            <img className="card-image" src={ProfilePic6} alt="profile picture" />
            <h2 className="card-title">Pratap Sing</h2>
            <p className="card-text">Software Engineer</p>
        </div>
        </div>
    );
}

export default Card;

