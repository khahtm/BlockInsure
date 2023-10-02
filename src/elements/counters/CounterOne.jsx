import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';




class CounterOne extends Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        let Data = [
            {
                countNum : 2000,
                countTitle: 'Representing the number of satisfied policyholders within the BlockInsure community',
            },
            {
                countNum : 98,
                countTitle: 'Signifying the high customer satisfaction rate achieved by BlockInsure for insurance solutions',
            },
            {
                countNum : 15,
                countTitle: 'Reflecting the total value of assets protected through BlockInsure coverage management.',
            },
        ];

        return(
            <Fragment>
                <div className="row">
                    {Data.map( (value, index) => (
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                            <h5 className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                </VisibilitySensor>
                            </h5>
                            <p className="description">{value.countTitle}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;