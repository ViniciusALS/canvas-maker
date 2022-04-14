import React from 'react';
import logoWhite from '../../public/logoWhite.svg'

interface HeaderSettings {
    theme: string
}

class Header extends React.Component {

    constructor(props: HeaderSettings) {
        super(props);
        this.state = {
            theme: props.theme
        }
    }

    render() {
        return(
            <nav>
                <img src={logoWhite} alt="canvas maker logo" />
                <h1>Canvas Maker</h1>    
            </nav>
        );
    }
}

export default Header;