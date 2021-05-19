import '../App.css';
import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        streetAddress: "",
        appartment: "",
        postalCode: "",
        city: "",
        state: "",
        country: "",
        phone: "",
    }

    handleInputFormValues= (event) => {
    console.log(event.target.name);
    this.setState({
        [event.target.name]: event.target.value,
    });
};

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(Object.keys(e.target));
    };

    render() {
        return (
            <div>
               <h1 className="shipping-form-header">Forms React</h1>
                    <div className="shipping-form-container">
                        <form action="" className="shipping-form" onSubmit={this.handleSubmit}>
                        
          <input name="firstName" type="shipping-input-text-firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputFormValues} />
          <input name="lastName" type="shipping-input-text-lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputFormValues} />
          <input name="street" type="shipping-input-text-street" placeholder="Street Address" value={this.state.streetAddress} onChange={this.handleInputFormValues} />
          <input type="shipping-input-text-apt" placeholder="Apt, Suite" value={this.state.appartment} onChange={this.handleInputFormValues} />
          <input type="shipping-input-text-postal" placeholder="Postal Code" value={this.state.postalCode} onChange={this.handleInputFormValues} />
          <input type="shipping-input-text-city" placeholder="City" value={this.state.city} onChange={this.handleInputFormValues} />
          <input type="shipping-input-text-state" placeholder="State" value={this.state.state} onChange={this.handleInputFormValues} />
          <input type="shipping-input-text-country" placeholder="Country" value={this.state.country} onChange={this.handleInputFormValues} />
          <input type="shipping-input-text-phone" placeholder="Phone" value={this.state.phone} onChange={this.handleInputFormValues} />
          <input type="shipping-input-button" placeholder="Submit" />
      </form>
      </div> 
            </div>
        )
    }
}
