import React from 'react';

const SubmitButton = () => {
    <>
        <button> Submit </button>
    </>
};

const AnotherComponent = (props) => {
    //console.log(props.isButtonEnabled);
    return (
        <>
            <h1>Hello Another Component!</h1>
            {props.isButtonEnabled && <button> Submit One </button>}
            {/* {props.isButtonEnabled ? <button> Submit Two </button> : ""} */}
        </>
    );
};

const AnotherComponent2 = (props) => {
    //console.log(props.isButtonEnabled);
    return (
        <>
            <div>
                <h1>Hello Another Component Two!</h1>
                {props.isButtonEnabled && <button> Submit One </button>}
                {/* {props.isButtonEnabled ? <button> Submit Two </button> : ""} */}
            </div>
        </>
    );
};

const AwardsComponent = () => {
    const listAwards = [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hack"
    ];
    
    return (
        <>
            <h1>Awards & Certifications</h1>
            <ul>
                {listAwards.map((obj, index) => {
                    return <li key={index}>{obj}</li>
                })}
            </ul>
            {/* Syntatic Sugar */}
            {/* <ul>
                {listAwards.map((obj, index) => (
                    <li key={index}>{obj}</li>
                ))}
            </ul> */}
        </>
    );
};

class HomePortofolio extends React.Component {

    state = {
        isButtonEnabled: false,
    }

    setButtonStatus = () => {
        this.setState({ isButtonEnabled : !this.state.isButtonEnabled});
    }

    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <button onClick={this.setButtonStatus}> Click Me!</button>
                <AnotherComponent isButtonEnabled={this.state.isButtonEnabled} />
                {this.state.isButtonEnabled && <AnotherComponent2 />}
                <AwardsComponent />
            </div>
        );
    }
}

export default HomePortofolio;