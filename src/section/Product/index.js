import ProductWrapper from "./Product.style";
const index = () => {
  return (
    <>
      <ProductWrapper>
        <div className="container my-2 flex justify-between mx-10 border-b-1">
          <div className="flex gap-1">
            <h1 className="text-sm font-bold">Electronics</h1>
            <spnan className="text-sm text-gray-500">
              <i class="fa-solid fa-angle-down"></i>
            </spnan>
          </div>
          <div className="flex gap-1">
            <h1 className="text-sm font-bold">TVs & Appliances</h1>
            <spnan className="text-sm text-gray-500">
              <i class="fa-solid fa-angle-down"></i>
            </spnan>
          </div>
          <div className="flex gap-1">
            <h1 className="text-sm font-bold">Men</h1>
            <spnan className="text-sm text-gray-500">
              <i class="fa-solid fa-angle-down"></i>
            </spnan>
          </div>
          <div className="flex gap-1">
            <h1 className="text-sm font-bold">Women</h1>
            <spnan className="text-sm text-gray-500">
              <i class="fa-solid fa-angle-down"></i>
            </spnan>
          </div>
          <div className="flex gap-1">
            <h1 className="text-sm font-bold">Baby & Kids</h1>
            <spnan className="text-sm text-gray-500">
              <i class="fa-solid fa-angle-down"></i>
            </spnan>
          </div>
          <div className="flex gap-1">
            <h1 className="text-sm font-bold">Home & Furniture</h1>
            <spnan className="text-sm text-gray-500">
              <i class="fa-solid fa-angle-down"></i>
            </spnan>
          </div>
          <div className="flex gap-1">
            <h1 className="text-sm font-bold">Sports, Books & More</h1>
            <spnan className="text-sm text-gray-500">
              <i class="fa-solid fa-angle-down"></i>
            </spnan>
          </div>
          <div className="flex gap-1">
            <h1 className="text-sm font-bold">Flights</h1>
            <spnan className="text-sm text-gray-500">
              <i class="fa-solid fa-angle-down"></i>
            </spnan>
          </div>
        </div>
        <hr></hr>
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-1 mt-3">
            <div className="col-span-4 border">
              <div>
                <img
                  src="/app/Product/mainp.webp"
                  className="mx-auto my-3"
                ></img>
              </div>
              <div className="flex gap-2 justify-end">
                <button className="py-3 cyellow px-16 text-xl text-white rounded">
                  Add to cart
                </button>
                <button className="py-3 cred px-16 text-white rounded">
                  BUY NOW
                </button>
              </div>
            </div>

            <div className="col-span-8 border  px-3">
              <div className="flex gap-2 py-2 ">
                <div className="flex gap-1 text-sm">
                  <p>Home</p>
                  <i class="fa-solid fa-angle-right text-sm"></i>
                </div>
                <div className="flex gap-1 text-sm">
                  <p>Mobiles & Accessories</p>
                  <i class="fa-solid fa-angle-right text-sm"></i>
                </div>
                <div className="flex gap-1 text-sm">
                  <p>Mobiles</p>
                  <i class="fa-solid fa-angle-right text-sm"></i>
                </div>
                <div className="flex gap-1 text-sm">
                  <p> realme Mobiles</p>
                  <i class="fa-solid fa-angle-right text-sm"></i>
                </div>
                <div className="flex gap-1 text-sm">
                  <p>realme c35 Mobiles</p>
                </div>
              </div>

              <div>
                <h1 className="text-xl">
                  realme C35 (Glowing Black, 128 GB) (4 GB RAM)
                </h1>
                <div className="flex py-2 gap-3">
                  <button className="bg-success text-white px-2 rounded-sm text-sm">
                    4.4
                  </button>
                  <p className="text-slate-500 font-semibold text-sm">
                    80,730 Ratings & 5408 Reviews
                  </p>
                  <img src="/app/search/assured.png" className="assured "></img>
                </div>

                <div className="flex gap-3">
                  <h1 className="text-3xl ">₹12,999</h1>
                  <h1 className="line-through mt-2 text-slate-500">₹14999</h1>
                  <h1 className="mt-2 text-green-700 font-semibold">13% off</h1>
                </div>

                <h1 className="font-semibold my-2">Available Offers</h1>

                <div className="flex gap-3 my-3">
                  <i class="fa-solid fa-house-circle-check text-green-700"></i>
                  <h1>EMI starting from ₹451/month</h1>
                  <button className=" text-blue-500 font-semibold">
                    View Plans
                  </button>
                </div>
                
                <div className="flex gap-4 items-center">
                <img src="/app/Product/realme.webp" className="realme"></img>
                <h1>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</h1>
                <button>Know More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductWrapper>
    </>
  );
};

export default index;
