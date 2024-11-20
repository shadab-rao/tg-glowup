import React from 'react'
import Header from '../common/Header'

const EmptyWisList = () => {
  return (
   <>
   <section className="mb-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col-11">
        <div className="mt-5 mb-4">
          <div className="bag-icon">
            <img src="assets/img/icon/empty_whishlist.png" alt />
          </div>
        </div>
        <h5 className="comman-heading text-center">
          You have no items in your <br />
          Wishlist
        </h5>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default EmptyWisList