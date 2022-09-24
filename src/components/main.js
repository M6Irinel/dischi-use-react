import axios from "axios";
import React, { Component } from "react";
import Card from "./card";

class Main extends Component {

    state = {
        disks: [],
    }

    responseAPI () {
        axios.get( `https://flynn.boolean.careers/exercises/api/array/music` )
            .then( r => {
                this.setState( { disks: r.data.response } );
            } );
    }

    componentDidMount () {
        this.responseAPI();
    }
    
    render () {

        return (
            <main>
                <section>
                    <div className="container py-20">
                        <div>
                            <ul className="p-3 p-0-sm row-10-sm row-md row-10-xl gap-30">
                                { this.state.disks.map( ( card, i ) => (
                                    <Card
                                        key={ i }
                                        card={ card }
                                    />
                                ) ) }
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
export default Main;