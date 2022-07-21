import NavigationWrapper from "./Navigation.style";
// import SubNavigation from '../../../../src/components/SubNavigation/index'
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Input,
  Popover,
  PopoverHeader,
  PopoverBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const index = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [modalCreate, setModalCreate] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalPop, setModalPop] = useState("hidden");

  const toggleHandle = () => {
    setModal(!modal);
    setModalPop("hidden");
  };
  const createToggleHandle = () => {
    setModalCreate(!modalCreate);
    setModal(!modal);
  };
  return (
    <>
      <NavigationWrapper>
        <div className="relative">
          <Navbar {...args}>
            <NavbarBrand href="/" className="d-flex">
              <div>
                <img
                  src="/app/Navigation/mainlogo.png"
                  className="mainLogo"
                ></img>
                <div className="d-flex explore">
                  <a>
                    Explore <span>plus</span>
                  </a>
                  <img
                    src="/app/Navigation/plus.png"
                    className="plus-img"
                  ></img>
                </div>
              </div>
            </NavbarBrand>
            {/* <NavItem> */}
            <div className="relative d-flex">
              <Input
                className=" mx-3 input-control rounded-none"
                placeholder="search for product, brand and more"
              />
              <i class="  absolute text-primary right-6  top-3  fa-solid fa-magnifying-glass"></i>
            </div>
            {/* </NavItem> */}
            <span className="relative">
              <Button
                color="light"
                className="text-primary fw-bold rounded-none px-10 py-1 bg-white"
                onClick={toggleHandle}
                onMouseEnter={() => setModalPop("block")}
              >
                Login
              </Button>

              <Modal isOpen={modal} fade={false} toggle={toggleHandle}>
                <ModalHeader toggle={toggleHandle} className="text-xl">
                  Login{" "}
                </ModalHeader>

                <ModalBody>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div class="mb-3 form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary text-white bg-blue-600"
                    >
                      Submit
                    </button>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="text-white bg-blue-600"
                    // href="/create-an-account"
                    onClick={createToggleHandle}
                  >
                    Create an Account
                  </Button>
                  <Button
                    color="primary"
                    onClick={toggleHandle}
                    className="text-white bg-blue-600"
                  >
                    Close
                  </Button>
                </ModalFooter>
              </Modal>

              <Modal
                isOpen={modalCreate}
                fade={false}
                toggle={createToggleHandle}
                size="lg"
                fullscreen={true}
              >
                <ModalBody>
                  <section class="vh-100 bg-image">
                    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                      <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style={{ borderRadius: 15 }}>
                              <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">
                                  Create an account
                                </h2>

                                <form>
                                  <div class="form-outline mb-4">
                                    <input
                                      type="text"
                                      id="form3Example1cg"
                                      class="form-control form-control-lg"
                                    />
                                    <label
                                      class="form-label"
                                      for="form3Example1cg"
                                    >
                                      Your Name
                                    </label>
                                  </div>

                                  <div class="form-outline mb-4">
                                    <input
                                      type="email"
                                      id="form3Example3cg"
                                      class="form-control form-control-lg"
                                    />
                                    <label
                                      class="form-label"
                                      for="form3Example3cg"
                                    >
                                      Your Email
                                    </label>
                                  </div>

                                  <div class="form-outline mb-4">
                                    <input
                                      type="password"
                                      id="form3Example4cg"
                                      class="form-control form-control-lg"
                                    />
                                    <label
                                      class="form-label"
                                      for="form3Example4cg"
                                    >
                                      Password
                                    </label>
                                  </div>

                                  <div class="form-outline mb-4">
                                    <input
                                      type="password"
                                      id="form3Example4cdg"
                                      class="form-control form-control-lg"
                                    />
                                    <label
                                      class="form-label"
                                      for="form3Example4cdg"
                                    >
                                      Repeat your password
                                    </label>
                                  </div>

                                  <div class="form-check d-flex justify-content-center mb-5">
                                    <input
                                      class="form-check-input me-2"
                                      type="checkbox"
                                      value=""
                                      id="form2Example3cg"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="form2Example3g"
                                    >
                                      I agree all statements in{" "}
                                      <a href="#!" class="text-body">
                                        <u>Terms of service</u>
                                      </a>
                                    </label>
                                  </div>

                                  <div class="d-flex justify-content-center">
                                    <button
                                      type="button"
                                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                    >
                                      Register
                                    </button>
                                  </div>

                                  <p class="text-center text-muted mt-5 mb-0">
                                    Have already an account?{" "}
                                    <a href="#!" class="fw-bold text-body">
                                      <u
                                        onClick={() => {
                                          setModalCreate(!modalCreate);
                                          setModal(!modal);
                                        }}
                                      >
                                        Login here
                                      </u>
                                    </a>
                                  </p>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </ModalBody>
                <Button
                  color="primary"
                  onClick={() => setModalCreate(!modalCreate)}
                  className="text-white bg-blue-600"
                >
                  Close
                </Button>
              </Modal>

              <div
                className={`absolute w-60 mt-1 ${modalPop} border cu-white`}
                onMouseLeave={() => setModalPop("hidden")}
              >
                <div className="d-flex justify-between h-5  mb-5 ">
                  <h1 className="px-3 py-4 font-semibold">New Customer?</h1>
                  <a
                    className="px-3 py-4 text-blue-600 font-semibold cursor-pointer"
                    onClick={() => setModalCreate(!modalCreate)}
                  >
                    Sign Up
                  </a>
                  <hr></hr>
                </div>
              </div>
            </span>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="/About/" className="text-light fw-bold">
                    Become a seller
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="text-light fw-bold">
                    More
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#" className="text-light fw-bold">
                    Cart
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
       {/* <SubNavigation/> */}
        
      </NavigationWrapper>
    </>
  );
};

export default index;
