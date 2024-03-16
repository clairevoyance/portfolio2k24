import './Header.css'
import Logo from '../../assets/Logo-Final.png'
import React from 'react'
import { HeaderRoute } from './Header.models'
import { useNavigate } from 'react-router-dom'


interface HeaderComponentProps {

}

const Header: React.FC<HeaderComponentProps> = () => {

    const [headerRoutes, setHeaderRoutes] = React.useState<HeaderRoute[]>([]);
    const [isRouteSelected, setIsRouteSelected] = React.useState<boolean>(true);
    const [selectedRouteIndex, setSelectedRouteIndex] = React.useState<number>(0);
    const navigateTo = useNavigate();

    React.useEffect(() => {

        // adding all the header routes
        const routes : HeaderRoute[] = [
            {
                displayName: 'Home',
                path: '/'
            },
            {
                displayName: 'Experience',
                path: '/experience'
            },
            {
                displayName: 'Skills',
                path: '/skills'
            },
            {
                displayName: 'Projects',
                path: '/projects'
            },
            {
                displayName: 'Contact Me',
                path: '/contactMe'
            }
        ]

        setHeaderRoutes(routes);
        
    }, [])

    return (
        <>
            <div className="parentContainer">
                <div className='animatedLogo'>
                    {/* Animated Logo of the letter A */}
                    <img style={{
                        maxHeight: '50px',
                        maxWidth: '50px'
                    }} src={Logo} alt="Logo image" />
                </div>
                <div className='main-content'>
                    {/* Map over headerSections and render each section dynamically */}
                    {headerRoutes.map((headerRoute, index) => (
                        <div
                            key={index} // Add a unique key for each element (recommended)
                            className={"individualRouteLinkComponent" + ((isRouteSelected && selectedRouteIndex == index) ? " individualRouteLinkSelected" : "")}
                            onClick={() => {
                                navigateTo(headerRoute.path)
                                setIsRouteSelected(true);
                                setSelectedRouteIndex(index);
                            }}
                        >
                            {headerRoute.displayName}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header;