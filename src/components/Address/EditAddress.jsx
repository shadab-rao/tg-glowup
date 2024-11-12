import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const EditAddress = () => {
  return (
    <>
    <Header/>
   <section className="my-order">
  <div className="container mt-4 mb-5">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-12">
        <div className="my-account">
          <div className="user-box">
            <div className="d-flex gap-3">
              <div className="user-img">
                <img src="assets/img/user.jpg" alt />
              </div>
              <div>
                <h5 className="text text-white">Aman Singh</h5>
                <p className="comman-small-text">amansingh.miller@email.com</p>
                <div className="mt-2">
                  <a href className="edit-btn">Edit</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text fw-semibold mb-4">My Account</h5>
            <div className="list-box-wrapper">
              <div className="list-box">
                <div className="icon active">
                  <img src="assets/img/svg/box.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>My Order</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
              <div className="list-box">
                <div className="icon">
                  <img src="assets/img/svg/location.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>My address</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
              <div className="list-box">
                <div className="icon">
                  <img src="assets/img/svg/heart-light.svg" alt />
                </div>
                <div className="text-wrapper">
                  <p className>My Wishlist</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h5 className="text fw-semibold mb-4">Others</h5>
            <div className="list-box-wrapper">
              <div className="list-box">
                <div className="icon">
                  <img src="assets/img/svg/link-circle.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>Referral Program</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
              <div className="list-box">
                <div className="icon">
                  <img src="assets/img/svg/setting-2.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>Settings</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
              <div className="list-box">
                <div className="icon">
                  <img src="assets/img/svg/file-lines.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>About us</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
              <div className="list-box">
                <div className="icon">
                  <img src="assets/img/svg/file-minus.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>Terms &amp; Conditions</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
              <div className="list-box">
                <div className="icon">
                  <img src="assets/img/svg/call.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>Help &amp; Support</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
              <div className="list-box">
                <div className="icon">
                  <img src="assets/img/svg/file-sheild.svg" alt />
                </div>
                <div className="text-wrapper">
                  <p className>Privacy Policy</p>
                  <i className="fa fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-8 col-12">
        <div className>
          <div className>
            <h5 className="text fw-bold mb-4">Contact info</h5>
          </div>
          <div className>
            <div className="card-box">
              <div className="form-design">
                <div className="row">
                  <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                    <div className="form-group">
                      <label htmlFor className="form-label">Full Name*</label>
                      <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                    <div className="form-group">
                      <label htmlFor className="form-label">Phone Number*</label>
                      <div className="input-group mb-3 flex-nowrap">
                        <button className="btn border d-flex align-items-center gap-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <div className="dropdowm-img">
                            <img src="assets/img/saudi_enaya.png" alt />
                          </div>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item d-flex gap-3" href="#">
                              <div className="dropdowm-img">
                                <img src="assets/img/saudi_enaya.png" alt />
                              </div>
                              Ind
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex gap-3" href="#">
                              <div className="dropdowm-img">
                                <img src="assets/img/saudi_enaya.png" alt />
                              </div>
                              Ind
                            </a>
                          </li>
                        </ul>
                        <input type="text" className="form-control" placeholder="+971 505 789 9890" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className>
            <h5 className="text fw-bold mb-4">Address info</h5>
          </div>
          <div className="card-box">
            <div className="form-design">
              <div className="row">
                <div className="col-lg-12 col-12 mt-lg-0">
                  <div className="form-group">
                    <label htmlFor className="form-label">Address ( House No, Building , Street )*</label>
                    <input type="text" className="form-control" placeholder="Pincode" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-lg-0">
                  <div className="form-group">
                    <label htmlFor className="form-label">City*</label>
                    <input type="text" className="form-control" placeholder="City Name" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-lg-0">
                  <div className="form-group">
                    <label htmlFor className="form-label">State*</label>
                    <input type="text" className="form-control" placeholder="State Name" />
                  </div>
                </div>
                <div className="form-group mt-md-3 mt-4">
                  <div className="d-flex gap-2 align-items-center">
                    <input type="checkbox" className="form-checkbox" defaultChecked />
                    <span className="form-label m-0">Save in address book </span>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <input type="checkbox" className="form-checkbox" defaultChecked />
                    <span className="form-label m-0">Save in my profile </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="col-lg-6 col-md-8 col-12">
              <button className="comman-btn">Save Address</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default EditAddress