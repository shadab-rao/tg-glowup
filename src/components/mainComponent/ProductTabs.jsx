import React from 'react'

const ProductTabs = () => {
  return (
   <>
  <div className="my-5 ">
  <div className="container">
    <ul className="nav nav-tabs custom-tabs w-fit" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active" id="makeup-tab" data-toggle="tab" href="#makeup" role="tab" aria-controls="makeup" aria-selected="true">Makeup</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="skin-tab" data-toggle="tab" href="#skin" role="tab" aria-controls="skin" aria-selected="false">Skin</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="hair-tab" data-toggle="tab" href="#hair" role="tab" aria-controls="hair" aria-selected="false">Hair</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="fragrance-tab" data-toggle="tab" href="#fragrance" role="tab" aria-controls="fragrance" aria-selected="false">Fragrance</a>
      </li>
    </ul>
    <div className="tab-content mt-3" id="myTabContent">
      <div className="tab-pane fade show active" id="makeup" role="tabpanel" aria-labelledby="makeup-tab">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/mac_stuio_fix.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="new-label">
                <p className>New</p>
              </div>
              <div className="heart-icon">
                <i className="fa fa-heart" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/concealer.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/glow_screen.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/glow_stick.jpg" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/frizz_oil.jpg" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="new-label">
                <p className>New</p>
              </div>
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/scalp_oil.jpg" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/glue.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/tocobo.jpg" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="skin" role="tabpanel" aria-labelledby="skin-tab">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/mac_stuio_fix.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/concealer.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/glow_screen.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/glow_stick.jpg" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="hair" role="tabpanel" aria-labelledby="hair-tab">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/concealer.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="fragrance" role="tabpanel" aria-labelledby="fragrance-tab">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/mac_stuio_fix.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/glow_screen.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
            <div className="comman-card">
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/glow_stick.jpg" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph text-start">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default ProductTabs