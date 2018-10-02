import React, { Component } from 'react';
import '../App.css';

class FrontSection extends Component {
    render() {
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 frontSection'}>
                        <ul className={'menu'}>
                            <li className={'logo'}><b>awww</b>.<span>software</span></li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Case studies</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontSection;
