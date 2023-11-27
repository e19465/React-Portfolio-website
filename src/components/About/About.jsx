import './about.css'
import Phograoher from '../../img/phtog.jpg'
import Award from '../../img/award.png'
const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img className="a-img" src={Phograoher} alt="" />
            </div>
        </div>

        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be distracted by the
                readable content.
            </p>
            <p className="a-desc">
                As a passionate individual, I navigate through life with curiosity and a love for learning. I thrive on creative expression, finding joy in both words and code. My diverse interests span technology, art, and culture, shaping a dynamic perspective that fuels my constant quest for knowledge and meaningful connections.
            </p>
            <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">
                    International Design Awards 2023
                </h4>
                <p className="a-award-desc">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and fugit.
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About