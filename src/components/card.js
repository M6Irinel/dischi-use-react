import React, { Component } from "react";

class Card extends Component {
    render () {
        return (
            <li className="g-col-5-sm g-col-4-md g-col-3-lg g-col-2-xl t-center p-3 mb-5 mb-0-sm flex f-column scale-sm-H transition-all duration-2 rounded-2-H ease-in">

                <div className="h-50 mb-3 f-col-6">
                    <img className="fluid-img d-block obj-cover" src={ this.props.card.poster } alt={ this.props.card.title } />
                </div>

                <h2 className="white px-5 py-5 lato">
                    { this.props.card.title }
                </h2>

                <h4 className="gray-5 pb-1 lato">
                    { this.props.card.author }
                </h4>

                <p className="gray-5 lato">
                    { this.props.card.year }
                </p>
            </li>
        );
    }
}
export default Card;