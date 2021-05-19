import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Forms React</h1>
      <div className="shipping-form-container">
        <form action="" className="shipping-form">
          <input type="shipping-input-text-firstName" placeholder="First Name" />
          <input type="shipping-input-text-lastName" placeholder="Last Name" />
          <input type="shipping-input-text-street" placeholder="Street Address" />
          <input type="shipping-input-text-apt" placeholder="Apt, Suite" />
          <input type="shipping-input-text-postal" placeholder="Postal Code" />
          <input type="shipping-input-text-city" placeholder="City" />
          <input type="shipping-input-text-state" placeholder="State" />
          <input type="shipping-input-text-country" placeholder="Country" />
          <input type="shipping-input-text-phone" placeholder="Phone" />
          <input type="shipping-input-button" placeholder="Submit" />
      </form>
      </div>
    </div>
  );
}

export default App;
