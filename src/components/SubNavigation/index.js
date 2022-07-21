import SubNavWrapper from "./Subnav.style";

const index = () => {
  return (
    <>
      <SubNavWrapper>
      <div className="container py-3 d-flex gap-16 ">
          <div>
            <img src="/app/Navigation/offer.webp" className="Sub-Card"></img>
            <h1 className="fw-bold">Top Offers</h1>
          </div>
          <div>
            <img src="/app/Navigation/grosery.webp" className="Sub-Card"></img>
            <h1 className="fw-bold">Grocery</h1>
          </div>
          <div>
            <img src="/app/Navigation/mobile.webp" className="Sub-Card"></img>
            <h1 className="fw-bold">Mobiles</h1>
          </div>
          <div>
            <img src="/app/Navigation/fashion.webp" className="Sub-Card"></img>
            <h1 className="fw-bold">Fashion</h1>
          </div>
          <div>
            <img
              src="/app/Navigation/electronics.webp"
              className="Sub-Card"
            ></img>
            <h1 className="fw-bold">Electronics</h1>
          </div>
          <div>
            <img src="/app/Navigation/home.webp" className="Sub-Card"></img>
            <h1 className="fw-bold">Home</h1>
          </div>
          <div>
            <img
              src="/app/Navigation/appliances.webp"
              className="Sub-Card"
            ></img>
            <h1 className="fw-bold">Appliances</h1>
          </div>
          <div>
            <img src="/app/Navigation/travel.webp" className="Sub-Card"></img>
            <h1 className="fw-bold">Travel</h1>
          </div>
          <div>
            <img src="/app/Navigation/baby.webp" className="Sub-Card"></img>
            <h1 className="fw-bold">Beauty, Toys & More</h1>
          </div>
        </div> 
      </SubNavWrapper>
    </>
  );
};

export default index;
