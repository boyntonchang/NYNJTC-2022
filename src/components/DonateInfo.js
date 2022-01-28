import { useLocation } from "react-router-dom";

const DonateInfo = () => {

    const location = useLocation()
  return (
    <>
      <h4 className="main-title">Donation information</h4>
      <div class="column-area">
          <div class="info-area">
              <label className="small-label">Contributor</label>
              <h3>
                {location.state.firstName} {location.state.lastName}
              </h3>
          </div>
          <div class="info-area">
              <label className="small-label">Contribution amount</label>
              <h3>${location.state.amount}</h3>
          </div>
          <div class="info-area">
              <label className="small-label">Premium gifts</label>
              <h3>{location.state.gift}</h3>
          </div>
          <div class="info-area">
              <label className="small-label">Shipping address</label>
              <h3>{location.state.address}</h3>
              <h3>{location.state.city}</h3>
              <h3>{location.state.state}</h3>
              <h3>{location.state.zipCode}</h3>
          </div>
      </div>
    </>
  );
};

export default DonateInfo;
