import SearchWrapper from "./Search.style";

const index = () => {
  return (
    <>
      <SearchWrapper>
        <div className="container my-2 flex justify-between mx-10">
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
        {/* --------------------------------------------------section 2 ---------------------------------------*/}

        <div className="container-fluid border  ">
          <div class="grid grid-cols-12 gap-1 mt-3">
            <div class="col-span-2 border">
              <div className="flex flex-col">
                <div>
                  <h1 className="py-3 px-3 text-xl font-thick justify-start w-full h-auto">
                    Filter
                  </h1>
                  <hr className="w-54"></hr>
                </div>

                <div>
                  <h1 className="pb-2 pt-3 px-3 font-semibold text-sm">
                    CATEGORIES
                  </h1>
                  <div className="px-3">
                    <div className="flex py-2 gap-2">
                      {" "}
                      <i class="fa-solid fa-angle-left"></i>
                      <h1>Mobiles & Accessories</h1>
                    </div>
                    <h1 className="py-2 pl-2">Mobiles</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------Right section--------------------------------------- */}
            <div class="col-span-10 border px-3">
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
                </div>
              </div>
              <h1 className="text-black font-semibold">
                Showing 1 – 6 of 6 results for "realme c35 mobile"
              </h1>
              <div className="py-2">
                <a className="text-sm  pr-2">Sort By</a>
                <a className="text-sm  px-2">Relevance</a>
                <a className="text-sm  px-2">Popularity</a>
                <a className="text-sm  px-2">Price -- Low to High</a>
                <a className="text-sm  px-2">Price -- High to Low</a>
                <a className="text-sm  px-2">Newest First</a>
              </div>
              <hr></hr>

              <div>
                <div class="grid grid-cols-12 py-3">
                  <div class=" col-span-3 ">
                    <div className="">
                      <img
                        src="/app/search/phone.webp"
                        className="mx-auto cHeight"
                      ></img>
                      <div className="my-3">
                        <input type="checkbox"></input>
                        <span className="ml-2">Add to Compare</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-5">
                    <div className="">
                      <h1 className="text-xl font-semibold">
                        realme C35 (Glowing Green, 128 GB)
                      </h1>
                      <div className="flex py-2 gap-2">
                        <button className="bg-success text-white px-2 rounded-sm text-sm">
                          4.4
                        </button>
                        <p className="text-slate-500 font-semibold text-sm">
                          80,730 Ratings & 5408 Reviews
                        </p>
                      </div>
                      <ul>
                        <li className="list-disc text-sm ml-4">
                          4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                        </li>
                        <li className="list-disc text-sm ml-4">
                          16.76 cm (6.6 inch) Full HD+ Display
                        </li>
                        <li className="list-disc text-sm ml-4">
                          50MP + 2MP + 0.3MP | 8MP Front Camera
                        </li>
                        <li className="list-disc text-sm ml-4">
                          5000 mAh Lithium Polymer Battery
                        </li>
                        <li className="list-disc text-sm ml-4">
                          Unisoc Tiger T616 Processor
                        </li>
                        <li className="list-disc text-sm ml-4">
                          1 Year Warranty for Phone and 6 Months Warranty for
                          In-Box Accessories
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-span-4">
                    <div>
                      <div className="flex gap-3">
                        <h1 className="text-2xl">₹12,999</h1>
                        <img
                          src="/app/search/assured.png"
                          className="assured mt-2 "
                        ></img>
                      </div>
                      <div className="flex gap-2 text-sm mt-1">
                        <p className="text-slate-600 line-through">14999</p>
                        <span className="text-green-700">13% off</span>
                      </div>
                      <div className="text-sm mt-2">
                        <h1>Free Delivery</h1>
                        <h1>Upto ₹12,000 Off on Exchange</h1>
                        <h1 className="text-green-700 font-semibold">
                          Bank offer
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div class="grid grid-cols-12 py-3">
                  <div class=" col-span-3 ">
                    <div className="">
                      <img
                        src="/app/search/phone.webp"
                        className="mx-auto cHeight"
                      ></img>
                      <div className="my-3">
                        <input type="checkbox"></input>
                        <span className="ml-2">Add to Compare</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-5">
                    <div className="">
                      <h1 className="text-xl font-semibold">
                        realme C35 (Glowing Green, 64 GB)
                      </h1>
                      <div className="flex py-2 gap-2">
                        <button className="bg-success text-white px-2 rounded-sm text-sm">
                          4.4
                        </button>
                        <p className="text-slate-500 font-semibold text-sm">
                          80,730 Ratings & 5408 Reviews
                        </p>
                      </div>
                      <ul>
                        <li className="list-disc text-sm ml-4">
                          4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                        </li>
                        <li className="list-disc text-sm ml-4">
                          16.76 cm (6.6 inch) Full HD+ Display
                        </li>
                        <li className="list-disc text-sm ml-4">
                          50MP + 2MP + 0.3MP | 8MP Front Camera
                        </li>
                        <li className="list-disc text-sm ml-4">
                          5000 mAh Lithium Polymer Battery
                        </li>
                        <li className="list-disc text-sm ml-4">
                          Unisoc Tiger T616 Processor
                        </li>
                        <li className="list-disc text-sm ml-4">
                          1 Year Warranty for Phone and 6 Months Warranty for
                          In-Box Accessories
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-span-4">
                    <div>
                      <div className="flex gap-3">
                        <h1 className="text-2xl">₹12,999</h1>
                        <img
                          src="/app/search/assured.png"
                          className="assured mt-2 "
                        ></img>
                      </div>
                      <div className="flex gap-2 text-sm mt-1">
                        <p className="text-slate-600 line-through">14999</p>
                        <span className="text-green-700">13% off</span>
                      </div>
                      <div className="text-sm mt-2">
                        <h1>Free Delivery</h1>
                        <h1>Upto ₹12,000 Off on Exchange</h1>
                        <h1 className="text-green-700 font-semibold">
                          Bank offer
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div class="grid grid-cols-12 py-3">
                  <div class=" col-span-3 ">
                    <div className="">
                      <img
                        src="/app/search/phone1.webp"
                        className="mx-auto cHeight"
                      ></img>
                      <div className="my-3">
                        <input type="checkbox"></input>
                        <span className="ml-2">Add to Compare</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-5">
                    <div className="">
                      <h1 className="text-xl font-semibold">
                        realme C35 (Glowing Green, 128 GB)
                      </h1>
                      <div className="flex py-2 gap-2">
                        <button className="bg-success text-white px-2 rounded-sm text-sm">
                          4.4
                        </button>
                        <p className="text-slate-500 font-semibold text-sm">
                          80,730 Ratings & 5408 Reviews
                        </p>
                      </div>
                      <ul>
                        <li className="list-disc text-sm ml-4">
                          4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                        </li>
                        <li className="list-disc text-sm ml-4">
                          16.76 cm (6.6 inch) Full HD+ Display
                        </li>
                        <li className="list-disc text-sm ml-4">
                          50MP + 2MP + 0.3MP | 8MP Front Camera
                        </li>
                        <li className="list-disc text-sm ml-4">
                          5000 mAh Lithium Polymer Battery
                        </li>
                        <li className="list-disc text-sm ml-4">
                          Unisoc Tiger T616 Processor
                        </li>
                        <li className="list-disc text-sm ml-4">
                          1 Year Warranty for Phone and 6 Months Warranty for
                          In-Box Accessories
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-span-4">
                    <div>
                      <div className="flex gap-3">
                        <h1 className="text-2xl">₹12,999</h1>
                        <img
                          src="/app/search/assured.png"
                          className="assured mt-2 "
                        ></img>
                      </div>
                      <div className="flex gap-2 text-sm mt-1">
                        <p className="text-slate-600 line-through">14999</p>
                        <span className="text-green-700">13% off</span>
                      </div>
                      <div className="text-sm mt-2">
                        <h1>Free Delivery</h1>
                        <h1>Upto ₹12,000 Off on Exchange</h1>
                        <h1 className="text-green-700 font-semibold">
                          Bank offer
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div class="grid grid-cols-12 py-3">
                  <div class=" col-span-3 ">
                    <div className="">
                      <img
                        src="/app/search/phone.webp"
                        className="mx-auto cHeight"
                      ></img>
                      <div className="my-3">
                        <input type="checkbox"></input>
                        <span className="ml-2">Add to Compare</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-5">
                    <div className="">
                      <h1 className="text-xl font-semibold">
                        realme C35 (Glowing Green, 128 GB)
                      </h1>
                      <div className="flex py-2 gap-2">
                        <button className="bg-success text-white px-2 rounded-sm text-sm">
                          4.4
                        </button>
                        <p className="text-slate-500 font-semibold text-sm">
                          80,730 Ratings & 5408 Reviews
                        </p>
                      </div>
                      <ul>
                        <li className="list-disc text-sm ml-4">
                          4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                        </li>
                        <li className="list-disc text-sm ml-4">
                          16.76 cm (6.6 inch) Full HD+ Display
                        </li>
                        <li className="list-disc text-sm ml-4">
                          50MP + 2MP + 0.3MP | 8MP Front Camera
                        </li>
                        <li className="list-disc text-sm ml-4">
                          5000 mAh Lithium Polymer Battery
                        </li>
                        <li className="list-disc text-sm ml-4">
                          Unisoc Tiger T616 Processor
                        </li>
                        <li className="list-disc text-sm ml-4">
                          1 Year Warranty for Phone and 6 Months Warranty for
                          In-Box Accessories
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-span-4">
                    <div>
                      <div className="flex gap-3">
                        <h1 className="text-2xl">₹12,999</h1>
                        <img
                          src="/app/search/assured.png"
                          className="assured mt-2 "
                        ></img>
                      </div>
                      <div className="flex gap-2 text-sm mt-1">
                        <p className="text-slate-600 line-through">14999</p>
                        <span className="text-green-700">13% off</span>
                      </div>
                      <div className="text-sm mt-2">
                        <h1>Free Delivery</h1>
                        <h1>Upto ₹12,000 Off on Exchange</h1>
                        <h1 className="text-green-700 font-semibold">
                          Bank offer
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div class="grid grid-cols-12 py-3">
                  <div class=" col-span-3 ">
                    <div className="">
                      <img
                        src="/app/search/phone1.webp"
                        className="mx-auto cHeight"
                      ></img>
                      <div className="my-3">
                        <input type="checkbox"></input>
                        <span className="ml-2">Add to Compare</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-5">
                    <div className="">
                      <h1 className="text-xl font-semibold">
                        realme C35 (Glowing Green, 128 GB)
                      </h1>
                      <div className="flex py-2 gap-2">
                        <button className="bg-success text-white px-2 rounded-sm text-sm">
                          4.4
                        </button>
                        <p className="text-slate-500 font-semibold text-sm">
                          80,730 Ratings & 5408 Reviews
                        </p>
                      </div>
                      <ul>
                        <li className="list-disc text-sm ml-4">
                          4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                        </li>
                        <li className="list-disc text-sm ml-4">
                          16.76 cm (6.6 inch) Full HD+ Display
                        </li>
                        <li className="list-disc text-sm ml-4">
                          50MP + 2MP + 0.3MP | 8MP Front Camera
                        </li>
                        <li className="list-disc text-sm ml-4">
                          5000 mAh Lithium Polymer Battery
                        </li>
                        <li className="list-disc text-sm ml-4">
                          Unisoc Tiger T616 Processor
                        </li>
                        <li className="list-disc text-sm ml-4">
                          1 Year Warranty for Phone and 6 Months Warranty for
                          In-Box Accessories
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-span-4">
                    <div>
                      <div className="flex gap-3">
                        <h1 className="text-2xl">₹12,999</h1>
                        <img
                          src="/app/search/assured.png"
                          className="assured mt-2 "
                        ></img>
                      </div>
                      <div className="flex gap-2 text-sm mt-1">
                        <p className="text-slate-600 line-through">14999</p>
                        <span className="text-green-700">13% off</span>
                      </div>
                      <div className="text-sm mt-2">
                        <h1>Free Delivery</h1>
                        <h1>Upto ₹12,000 Off on Exchange</h1>
                        <h1 className="text-green-700 font-semibold">
                          Bank offer
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SearchWrapper>
    </>
  );
};

export default index;
