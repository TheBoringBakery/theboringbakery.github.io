import React from 'react';
import {
    Container,
 } from 'react-bootstrap';

function Footer () {
    return (
        <div className="footer text-center text-white py-5">
        <Container>
            <h5>Powered by ❤️</h5>
            <p className="disclaimer pt-4">MoonCaker isn't endorsed by Riot Games and doesn't reflect
            the views or opinions of Riot Games or anyone officially involved
            in producing or managing Riot Games properties. Riot Games,
            and all associated properties are trademarks or registered
            trademarks of Riot Games, Inc.</p>
        </Container>
        </div>
    )
}
export default Footer;
