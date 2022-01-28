import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Donate = () => {
  const initialData = {
    amount: "",
    gift: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const navigate = useNavigate()



  const [formData, setFormData] = useState(initialData);

  const [isSelected, setIsSelected] = useState(false);

  const [disabled, setDisabled] = useState(true);



  // premium disabled
  function disabledPremium(value) {
    console.log(value);
    if (value < 100) {
      setDisabled(true);
      formData.gift = "";

    } else {
      setDisabled(false);
    }
  }

  function handleChange(e) {
    // e.preventDefault();
    const { name, value, type, checked,  } = e.target;

    setFormData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });

    setIsSelected(false);
    disabledPremium(value);

 
  }


  function handleChangeSelected() {
    console.log("other amount");
    setIsSelected(true);
    formData.amount = 0;
  }


  function handleChangeInputOtherAmount(e) {
    const { name, value } = e.target;
    setFormData(() => ({ [name]: value }));
    disabledPremium(value);
  }

  function submitData(e) {
    e.preventDefault();
    console.log(formData);
    navigate("../donateinfo", { state: formData });
  
  }
  return (
    <>
      <h2 className="main-title">Donate</h2>
      <form onSubmit={submitData} className="form-container">
        <h3 className="main-label">Contribution Amount</h3>
        <div className="wrapper radioArea">
          <div className="toggleButton">
            <input
              type="radio"
              id="s40"
              name="amount"
              value="40"
              onChange={handleChange}
              checked={formData.amount === "40"}
            />
            <label htmlFor="s40">$40</label>
          </div>
          <div className="toggleButton">
            <input
              type="radio"
              id="s100"
              name="amount"
              value="100"
              onChange={handleChange}
              checked={formData.amount === "100"}
            />
            <label htmlFor="s100">$100</label>
          </div>
          <div className="toggleButton">
            <input
              type="radio"
              id="s250"
              name="amount"
              value="250"
              onChange={handleChange}
              checked={formData.amount === "250"}
            />
            <label htmlFor="s250">$250</label>
          </div>
          <div className="toggleButton">
            <input
              type="radio"
              id="s-500"
              name="amount"
              value="500"
              onChange={handleChange}
              checked={formData.amount === "500"}
            />
            <label htmlFor="s-500">$500</label>
          </div>
          <div className="toggleButton">
            <input
              type="radio"
              id="s-1000"
              name="amount"
              value="1000"
              onChange={handleChange}
              checked={formData.amount === "1000"}
            />
            <label htmlFor="s-1000">$1000</label>
          </div>
          <div className="toggleButton">
            <input
              type="radio"
              id="otherAmount"
              name="amount"
              value=""
              onClick={handleChangeSelected}
              //checked={FormData.amount === "40"}
            />
            <label htmlFor="otherAmount">Other amount</label>
          </div>
        </div>

        <div className="CTA-wrapper">
          {isSelected && (
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={formData.otherAmount}
              onChange={handleChangeInputOtherAmount}
              className="input-amount"
            />
          )}
        </div>
        <div className="wrapper">
          <h3 className="total">
            Total:<span>${formData.amount}</span>
          </h3>
        </div>

        {/* premiun */}

        <h3 className="main-label" style={{ marginTop: "1rem" }}>
          Premium Gifts
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          As our way of saying thank you, we're offering a selection of gifts.
          Click on the item to select !
        </p>
        <div className="wrapper radioArea">
          <div
            className={`toggleButton premium  ${disabled ? "disabled" : ""}`}
          >
            <input
              type="radio"
              id="West Hudson Trails Map"
              name="gift"
              value="West Hudson Trails Map"
              onChange={handleChange}
              //checked={FormData.amount === "40"}
            />
            <label htmlFor="West Hudson Trails Map">
              West Hudson Trails Map
            </label>
          </div>
          <div
            className={`toggleButton premium  ${disabled ? "disabled" : ""}`}
          >
            <input
              type="radio"
              id="East Hudson Trails Map"
              name="gift"
              value="East Hudson Trails Map"
              onChange={handleChange}
              //checked={FormData.amount === "40"}
            />
            <label htmlFor="East Hudson Trails Map">
              East Hudson Trails Map
            </label>
          </div>
          <div
            className={`toggleButton premium  ${disabled ? "disabled" : ""}`}
          >
            <input
              type="radio"
              id="Hiking Long Island Book"
              name="gift"
              value="Hiking Long Island Book"
              onChange={handleChange}
              //checked={FormData.gift === "Hiking Long Island Book"}
            />
            <label htmlFor="Hiking Long Island Book">
              Hiking Long Island Book
            </label>
          </div>
          <div
            className={`toggleButton premium  ${disabled ? "disabled" : ""}`}
          >
            <input
              type="radio"
              id="Quater Zip Pullover"
              name="gift"
              value="Quater Zip Pullover"
              onChange={handleChange}
              //checked={FormData.amount === "40"}
            />
            <label htmlFor="Quater Zip Pullover">Quater Zip Pullover</label>
          </div>
        </div>

        <h3 className="main-label" style={{ marginTop: "1rem" }}>
          Shipping Information
        </h3>
        <div className="wrapper">
          <div className="section-wrapper">
            <div className="form-control">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                onChange={handleChange}
                name="firstName"
                className="input-amount"
              />
            </div>
            <div className="form-control">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                onChange={handleChange}
                name="lastName"
                className="input-amount"
              />
            </div>
          </div>
          <br />
          <div className="form-control">
            <label htmlFor="address">Street address</label>
            <input
              type="text"
              id="address"
              onChange={handleChange}
              name="address"
              className="input-amount"
            />
          </div>
          <div className="section-wrapper">
            <div className="form-control">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                onChange={handleChange}
                name="city"
                className="input-amount"
              />
            </div>
            <div className="form-control">
              <label htmlFor="state">State</label>

              <select
                onChange={handleChange}
                name="state"
                className="input-amount"
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="zipCode">Zip code</label>
              <input
                type="text"
                id="zipCode"
                onChange={handleChange}
                name="zipCode"
                className="input-amount"
              />
            </div>
          </div>
        </div>

        <hr style={{ marginTop: "1rem" }} />
        <div className="CTA-wrapper">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Donate;
