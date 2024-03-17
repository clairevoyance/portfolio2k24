import { Chrono } from 'react-chrono';
import './Experience.css'
import ExperienceCardContent from './ExperienceCardContent';

const Experience: React.FC = () => {

    const getExperienceCardList = () => {
        // Sample data
        const experienceData = [
            {
                cardTitle: "Microsoft IDC",
                cardSubTitle: "Software Developer - I",
                fromDate: "06-2022",
                toDate: "Present",
                detailedText: "Enhanced backend services' reliability and response time through solo projects, optimizing user experience and ensuring UI tool accessibility. Streamlined operations by 25% through strategic system logic modifications and the implementation of utility API endpoints with robust authentication. Led successful migrations of legacy systems, providing end-to-end support during testing and deployment. Established a centralized monitoring system to ensure comprehensive oversight of system diagnostics and traces. Proactively addressed system issues and security threats through on-call responsibilities, demonstrating flexibility and dedication to team success.",
                techStack: ["Typescript", "React", "C#", "Az DevOPS", "MySQL"]
            },
            {
                cardTitle: "Microsoft IDC",
                cardSubTitle: "Software Development Intern",
                fromDate: "01-2022",
                toDate: "06-2022",
                detailedText: "Successfully migrated a WCF Service to a REST API, enhancing system efficiency and response time. Played a pivotal role in bug resolution, ensuring system reliability and timely issue resolution. Proactively addressed accessibility concerns, improving user experience and meeting SLAs. Implemented automation alerts for continuous monitoring, enabling swift response to anomalies. Documented insights for team reference, fostering informed decision-making and collaborative knowledge sharing.",
                techStack: ["C#", "Azure DevOPS", "WCF", "RestAPI", "MySQL"]
            },
            {
                cardTitle: "Microsoft IDC",
                cardSubTitle: "Software Development Intern",
                fromDate: "04-2021",
                toDate: "06-2021",
                detailedText: "Developed an Azure function to streamline data retrieval from an SQL DB, improving backend process observability. Implemented robust logging mechanisms for the Azure function, enhancing operational visibility and simplifying debugging processes.",
                techStack: ["C#", "Azure Functions", "MySQL"]
            },
            {
                cardTitle: "BIT Mesra",
                cardSubTitle: "Student",
                fromDate: "2018",
                toDate: "2022",
                detailedText: "I hold a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering, graduating with distinction in 2022 with an impressive CGPA of 8.80. During my college years, I actively engaged in extracurricular activities, including participation in ACM ICPC for two consecutive years and contributing to a team shortlisted for the Smart India Hackathon. Additionally, I was a proud member of the NSS Club, where I contributed to community service initiatives. It was during my college journey that I developed a passion for Data Structures and Algorithms (DSA) and Competitive Programming, alongside honing my skills through hands-on project work.",
                techStack: ["C++", "Codeforces", "Codechef", "IEEE", "NSS", "ICPC"]
            }
        ];

        // Map each experience object to an ExperienceCardContent component
        const experienceCards = experienceData.map((experience, index) => (
            <ExperienceCardContent
                key={index}
                cardTitle={experience.cardTitle}
                cardSubTitle={experience.cardSubTitle}
                fromDate={experience.fromDate}
                toDate={experience.toDate}
                detailedText={experience.detailedText}
                techStack={experience.techStack}
            />
        ));

        return experienceCards;
    }


    return (
        <>
            <section id='Experience' className='experienceSectionParentContainer'>
                <div className='customContent' style={{
                    position: 'relative', // {/* For zIndex to be reflected */}
                }}>
                    <Chrono
                        mode="VERTICAL_ALTERNATING"
                        disableToolbar

                        // Disabling the yellow highlight when card is active
                        disableClickOnCircle
                        disableInteraction
                        disableTimelinePoint={false}
                        activeItemIndex='10000'

                        theme={{
                            primary: 'rgb(21, 36, 60)',
                            cardBgColor: 'rgb(21, 36, 60)'
                        }}

                        cardHeight='fit-content' // to cancel out the value for cardheight
                        classNames={{
                            card: 'customContent'
                        }}

                        scrollable // there was some padding issue
                    >
                        {getExperienceCardList()}
                    </Chrono>
                </div>
            </section>
        </>
    )
}

export default Experience;