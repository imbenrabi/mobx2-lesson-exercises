import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

//inject your store here
@inject('RestaurantStore')
class Reservation extends Component {
    handleSeat = () => this.props.RestaurantStore.seatRes(this.props.res.id);
    handleComplete = () => this.props.RestaurantStore.completeRes(this.props.res.id)

    render() {
        const res = this.props.res;
        return (
            <div className={res.completed ? 'conditional' : null}>
                <span>Name: {res.name} </span>
                <span>Number of people: {res.numPeople} </span>
                <span>Seated: {`${res.seated}`} </span>
                <span>Completed: {`${res.completed}`}</span>
                <button onClick={this.handleSeat}>Seat Reservation</button>
                <button onClick={this.handleComplete}>Complete Reservation</button>
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
            //use the class "conditional" to conditionally render completed reservations
            //You should hav ea complete reservation button to complete the reservation
        )
    }
}

export default Reservation