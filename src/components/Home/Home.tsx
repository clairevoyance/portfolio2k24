import './Home.css'
import ProfilePicture from '../../assets/ProfilePicture.png'
import { ReactTyped } from 'react-typed';

const aboutTextData = [
    '<br/>Welcome to my little corner of the internet! <br/><br/>I\'m currently a software enthusiast at Microsoft, passionate about building awesome stuff that make systems breathe better. <br/><br/>From coding cool systems to exploring new hobbies, I\'m always on the lookout for exciting adventures. <br/><br/>When I\'m not glued to the screen, you\'ll find me out and about, hitting the badminton court or vibing to some good music! <br/><br/>So, whether you\'re a tech guru or just along for the ride, let\'s connect and make some memories together!',
];

const About: React.FC = () => {
    return (
        <>
            <section id="Home" className='homeSectionParentContainer'>
                <section className='containerOne'>
                    <div> {/* Container for all the vertical stuff */}
                        <div>
                            <span style={{
                                fontSize: '35px'
                            }}>Hey There!</span>
                        </div>
                        <div className="aboutText"> {/* Container for descriptive text */}
                            <ReactTyped
                                strings={aboutTextData}
                                typeSpeed={40}
                                loop={false}
                                cursorChar='_'
                                startWhenVisible
                            />
                        </div>
                    </div>
                    <div className="aboutImage"> {/* Container for image */}
                        <img
                            style={{
                                maxHeight: '25rem',
                                maxWidth: '25rem'
                            }}
                            src={ProfilePicture} alt="Abhishek Sahai - Image" />
                    </div>
                </section>
            </section>
        </>
    )
}

export default About;