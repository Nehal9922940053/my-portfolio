import "./about.css"
import Award from "../../img/award.png"

const About = () =>{
    return(
        <div className="a">
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt=""
        className="a-img"
        />
        </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        It is a long established fact that a reader will be distracted by the 
        readble content.
        </p>
        <p className="a-desc">
        Node.js is a cross-platform runtime environment and 
        library for running JavaScript applications outside the browser. 
        It is used for creating server-side and networking web applications.
        It is open source and free to use.
        </p>
        <div className="a-award">
        <img src={Award} alt="" className="a-award-img"/>
        <div className="a-award-texts">
        <h4 className="a-award-title">
        International Design Award 2021
        </h4>
        <p className="a-award-desc">
        Node.js is a cross-platform environment and library 
        for running JavaScript applications which is used to
         create networking and server-side applications.
        </p>
        </div> 
        </div>
        </div>
        </div>
    );
}



export default About;