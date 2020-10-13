import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

@inject("GeneralStore", "RestaurantStore")

@observer
class Restaurant extends Component {
    handleAddRes = () => {
        this.props.RestaurantStore.addRes(this.props.GeneralStore.name, this.props.GeneralStore.numPeople)
    }
    render() {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>You have {this.props.RestaurantStore.restPopulation} people in the restaurant</div>
                <div>You have completed {this.props.RestaurantStore.completedTables} tables</div>
                {/* Add in # of people in restaurant */}
                {/* Add in # of completed tables with id "completedTables*/}
                <ResInput />
                <button id="addRes" onClick={this.handleAddRes}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className="reservations">
                    {this.props.RestaurantStore.reservations.map(r => <Reservation key={r.id} res={r} />)}
                    {/* Map reservation data to Reservation components here */}
                </div>
            </div>
        )
    }
}
//functional component example
// //adding our GeneralStore as a prop of the ResInput component & making the component an observer
// const ResInput = inject("GeneralStore")(observer((props) => {

//     inputHandler = (e) => {
//         this.props.GeneralStore.handleInput(e.target.name, e.target.value)
//     }
//     //the rest of the component
// }))

export default Restaurant