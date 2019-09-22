import React from 'react';
import guideText from './guideText';
import './Guide.css';

class Guide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleAccordionClick(e) {
        if (e.target.className === "accordion active") {
            e.target.className = "accordion";
        }
        else if (e.target.className === "accordion") {
            e.target.className = "accordion active";
        }
        var panel = e.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    render() {
        const sections = [];

        guideText.forEach((value, key) => {
            sections.push(
                <div className="section">
                    <div className="accordion" onClick={(e) => { this.handleAccordionClick(e) }}>{key}</div>
                    <div className="panel">
                        <p className="content" dangerouslySetInnerHTML={{ __html: value }} />
                    </div>
                </div>
            );
        });

        return (
            <div className="Guide">
                <br />
                <div className="top-heading">
                    <h2>Werewolves</h2>
                    <span>A Narrator&rsquo;s Guide</span>
                </div>
                {sections}
                <br />
                <br />
                <br />
            </div>
        )
    };
}

export default Guide;
