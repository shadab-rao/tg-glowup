import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import { productDetail } from '../Api Services/glowHttpServices/glowLoginHttpServices'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [viewData,setViewData] = useState();
  const{id} = useParams()

  useEffect(()=>{
    handleView()
  },[])

  const handleView = async()=>{
    const response = await productDetail(id)
    setViewData(response?.data?.results)
  }
  return (
    <>
    <Header/>
   <div>
  <section className="product-details">
    <div className="py-4">
      <div className="container">
        <div className="custom-breadcrum">
          <div className="custom-breadcrum-list">Home</div>
          <div className="custom-breadcrum-list">Women Skincare</div>
          <div className="custom-breadcrum-list active">de rose advanced serum</div>
        </div>
        <div className="row mt-4">
          <div className="col-md-auto col-auto">
            <div className="position-relative">
              <div className="slider-arrow slider-up" onclick="scrollUp()">
                ▲
              </div>
              <div id="thumbnails" className="product-detail-height-overflow">
                <div className="thumbnail active product-detail-img-wrapper">
                  <img src="assets/img/products/elf_p1.jpg" alt />
                </div>
                <div className="thumbnail product-detail-img-wrapper">
                  <img src="assets/img/products/elf_p1.jpg" alt />
                </div>
                <div className="thumbnail product-detail-img-wrapper">
                  <img src="assets/img/products/p3.jpg" alt />
                </div>
                <div className="thumbnail product-detail-img-wrapper">
                  <img src="assets/img/products/elf_p1.jpg" alt />
                </div>
                <div className="thumbnail product-detail-img-wrapper">
                  <img src="assets/img/products/elf_p1.jpg" alt />
                </div>
                <div className="thumbnail product-detail-img-wrapper">
                  <img src="assets/img/products/elf_p1.jpg" alt />
                </div>
                <div className="thumbnail product-detail-img-wrapper">
                  <img src="assets/img/products/elf_p1.jpg" alt />
                </div>
              </div>
              <div className="slider-arrow slider-down" onclick="scrollDown()">
                ▼
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-10 col-8">
            <div className="product-detail-main-img">
              <img src="assets/img/products/main_elf.png" alt />
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-12 mt-lg-0 mt-md-4 mt-4">
            <h2 className="product-main-heading text-start">beautya prestige micro-huile de rose advanced serum</h2>
            <h6 className="small-heading text-start">Anti-aging face serum</h6>
            <div className="list-span d-flex gap-3 text-start">
              <span>all types of skin</span>
              <span>am or pm</span>
              <span>brightening</span>
            </div>
            <p className="light-text text-start">VC_1521178</p>
            <h5 className="price-text text-start">SAR 520.00</h5>
            <div>
              <div className="row">
                <div className="col-auto">
                  <div className="box">
                    <div className='text-start'>
                      <p className>15 ML</p>
                      <p className>SAR 130</p>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="box">
                    <div className='text-start'>
                      <p className>15 ML</p>
                      <p className>SAR 130</p>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="box">
                    <div className="text-start">
                      <p className>15 ML</p>
                      <p className>SAR 130</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 mt-4">
              <button className="comman-btn ">Add to Bag</button>
              <button className="comman-border-btn">Add To wishlist</button>
            </div>
            <div className="mt-4 position-relative text-start">
              <p className="small-heading mb-0 text-start">Check Delivery</p>
              <input type="text" className="check-delivery-input" placeholder={201012} readOnly />
              <p className="small-heading mb-0 check-delivery-text">Change</p>
            </div>
            <div className="mt-4">
              <div className="d-flex gap-2 mb-3">
                <img src="assets/img/icon/delivery_van.png" className="icon" alt />
                <p className="text-icon m-0">Estimated Delivery 4-7 Working Days</p>
              </div>
              <div className="d-flex gap-2">
                <img src="assets/img/icon/box-remove.png" className="icon" alt />
                <p className="text-icon m-0">Non- Returnable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* products-details End */}
  {/* description start */}
  <section className="description">
    <div className="container mt-lg-5 mt-md-0 mt-4">
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
      </ul>
      <div className="row">
        <div className="col-lg-10 col-md-11 col-12">
          <div className="tab-content mt-3" id="myTabContent">
            <div className="tab-pane fade show active" id="makeup" role="tabpanel" aria-labelledby="makeup-tab">
              <div className="mb-4">
                <p className='text-start'>
                  Beautya's 1st revitalizing serum that concentrates the double power of the Rose
                  de
                  Granville from the stem to the flower to revitalize the skin twice as fast (1)
                  and
                  visibly rejuvenate.
                  Created after 20 years of research, the 10,000 (2) micro-pearls rich in
                  revitalizing
                  rose micro-nutrients are now completed by the power of the Rose sap. The
                  next-generation, 92% natural-origin (3) formula of La Micro-Huile de Rose
                  Advanced Serum
                  is twice as concentrated,(4) combining the nourishing richness of an oil with
                  the deep
                  penetration of a serum.
                </p>
              </div>
              <div className="mb-4">
                <p className='text-start'>
                  From the first application of the serum, the skin appears plumped. In 3 weeks,
                  2x improvement in the look or feel of skin elasticity.(5) With regular use, skin
                  looks and feels transformed. As if replenished from within, the skin seems
                  denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial
                  contours appear enhanced.
                </p>
              </div>
              <div className="mb-4">
                <p className='text-start'>
                  Reveal your extraordinary beauty with Beautya Prestige
                </p>
              </div>
              <div className="mb-4">
                <p className='text-start'>
                  (1) Instrumental test, 32 panelists, after 30 min. <br />
                  (2) In a 30 ml bottle. <br />
                  (3) Amount calculated based on the ISO 16128-1 and ISO 16128-2 standard. Water
                  percentage included. The remaining 8% of ingredients contribute to the formula’s
                  performance, sensory appeal and stability. <br />
                  (4) In Rose de Granville micro-nutrients compared to the previous formula. <br />
                  (5) Clinical assessment by a dermatologist on the evolution of the product’s
                  performance on the skin elasticity, comparison between the effect after 7 days
                  and 28 days on 34 women.
                </p>
              </div>
            </div>
            <div className="tab-pane fade" id="skin" role="tabpanel" aria-labelledby="skin-tab">
              <div>
                <div className="mb-4">
                  <p className='text-start'>
                    Beautya's 1st revitalizing serum that concentrates the double power of the
                    Rose
                    de
                    Granville from the stem to the flower to revitalize the skin twice as fast
                    (1)
                    and
                    visibly rejuvenate.
                    Created after 20 years of research, the 10,000 (2) micro-pearls rich in
                    revitalizing
                    rose micro-nutrients are now completed by the power of the Rose sap. The
                    next-generation, 92% natural-origin (3) formula of La Micro-Huile de Rose
                    Advanced Serum
                    is twice as concentrated,(4) combining the nourishing richness of an oil
                    with
                    the deep
                    penetration of a serum.
                  </p>
                </div>
                <div className="mb-4">
                  <p className='text-start'>
                    From the first application of the serum, the skin appears plumped. In 3
                    weeks,
                    2x improvement in the look or feel of skin elasticity.(5) With regular use,
                    skin
                    looks and feels transformed. As if replenished from within, the skin seems
                    denser and firmer, and wrinkles appear noticeably reduced. As if lifted,
                    facial
                    contours appear enhanced.
                  </p>
                </div>
                <div className="mb-4">
                  <p className='text-start'>
                    Reveal your extraordinary beauty with Beautya Prestige
                  </p>
                </div>
                <div className="mb-4">
                  <p className='text-start'>
                    (1) Instrumental test, 32 panelists, after 30 min. <br />
                    (2) In a 30 ml bottle. <br />
                    (3) Amount calculated based on the ISO 16128-1 and ISO 16128-2 standard.
                    Water
                    percentage included. The remaining 8% of ingredients contribute to the
                    formula’s
                    performance, sensory appeal and stability. <br />
                    (4) In Rose de Granville micro-nutrients compared to the previous formula.
                    <br />
                    (5) Clinical assessment by a dermatologist on the evolution of the product’s
                    performance on the skin elasticity, comparison between the effect after 7
                    days
                    and 28 days on 34 women.
                  </p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="hair" role="tabpanel" aria-labelledby="hair-tab">
              <div>
                <div className="mb-4">
                  <p className='text-start'>
                    Beautya's 1st revitalizing serum that concentrates the double power of the
                    Rose
                    de
                    Granville from the stem to the flower to revitalize the skin twice as fast
                    (1)
                    and
                    visibly rejuvenate.
                    Created after 20 years of research, the 10,000 (2) micro-pearls rich in
                    revitalizing
                    rose micro-nutrients are now completed by the power of the Rose sap. The
                    next-generation, 92% natural-origin (3) formula of La Micro-Huile de Rose
                    Advanced Serum
                    is twice as concentrated,(4) combining the nourishing richness of an oil
                    with
                    the deep
                    penetration of a serum.
                  </p>
                </div>
                <div className="mb-4">
                  <p className='text-start'>
                    From the first application of the serum, the skin appears plumped. In 3
                    weeks,
                    2x improvement in the look or feel of skin elasticity.(5) With regular use,
                    skin
                    looks and feels transformed. As if replenished from within, the skin seems
                    denser and firmer, and wrinkles appear noticeably reduced. As if lifted,
                    facial
                    contours appear enhanced.
                  </p>
                </div>
                <div className="mb-4">
                  <p className='text-start'>
                    Reveal your extraordinary beauty with Beautya Prestige
                  </p>
                </div>
                <div className="mb-4">
                  <p className='text-start'>
                    (1) Instrumental test, 32 panelists, after 30 min. <br />
                    (2) In a 30 ml bottle. <br />
                    (3) Amount calculated based on the ISO 16128-1 and ISO 16128-2 standard.
                    Water
                    percentage included. The remaining 8% of ingredients contribute to the
                    formula’s
                    performance, sensory appeal and stability. <br />
                    (4) In Rose de Granville micro-nutrients compared to the previous formula.
                    <br />
                    (5) Clinical assessment by a dermatologist on the evolution of the product’s
                    performance on the skin elasticity, comparison between the effect after 7
                    days
                    and 28 days on 34 women.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* description End */}
  {/* similar Product start */}
  <section className="similar-product">
    <div className="container pb-5">
      <div className="heading-wrapper">
        <h5 className="bold-heading text-start">Similar Products</h5>
      </div>
      <div className="row mt-4 mb-5">
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
              <div className="mt-4">
                <button className="comman-btn">Add to Bag</button>
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
              <div className="mt-4">
                <button className="comman-btn">Add to Bag</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default ProductDetail