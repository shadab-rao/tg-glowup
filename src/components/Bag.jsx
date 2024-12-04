import React, { useEffect, useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Products from "./mainComponent/Products";
import { Link, useNavigate } from "react-router-dom";
import {
  getCart,
  payment,
  placeOrder,
  removeCartItem,
  updateCart,
} from "../Api Services/glowHttpServices/glowLoginHttpServices";
import EmptyBag from "./cart/EmptyBag";
import { useDispatch } from "react-redux";
import { incrementCartCount, setCartCount } from "../Redux/cartSlice";
import { capitalize } from "./utils/CapitalLetter";
import Select from "react-select";

const Bag = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token-user");
  const addressId = localStorage.getItem("address_id");
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (userToken) {
      handleCart();
    }
  }, []);

  useEffect(() => {
    // hand();
  }, [selectedAttributes, quantity]);

  const handleCart = async () => {
    if (userToken) {
      const response = await getCart();
      const cartItems = response?.data?.results?.cart?.inventory || [];
      const updatedCartItems = cartItems.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setData(updatedCartItems);
      const totalProducts = response?.data?.results?.cart?.totalProducts || 0;
      setCount(totalProducts);
      dispatch(setCartCount(totalProducts));
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedData = data.map((item) =>
      item.product._id === id ? { ...item, quantity: newQuantity } : item
    );
    setData(updatedData);

    const updatedItem = updatedData.find((item) => item.product._id === id);
    updateProduct(updatedItem, { quantity: newQuantity });
  };

  const handleAttributeChange = (itemId, attributeId, valueId) => {
    setSelectedAttributes((prevSelected) => ({
      ...prevSelected,
      [itemId]: {
        ...prevSelected[itemId],
        [attributeId]: valueId,
      },
    }));

    const updatedItem = data.find((item) => item.product._id === itemId);
    updateProduct(updatedItem, {
      attribute: [attributeId || updatedItem.varient.values[0].attribute._id],
      value: [valueId || updatedItem.varient.values[0]._id],
    });
  };

  const getTotalPrice = () => {
    return data.reduce((total, item) => {
      return total + item.varient.price * item.quantity;
    }, 0);
  };
  const getTotalDiscount = () => {
    return data.reduce((total, item) => {
      return (
        total + (item.varient.price - item.varient.discount) * item.quantity
      );
    }, 0);
  };

  const handleRemove = async (id) => {
    await removeCartItem({cartId:id});
    handleCart();
  };

  // const handlePlaceOrder = async (formData) => {
  //   const response = await placeOrder(formData);
  //   navigate("/checkout",{state:response?.data?.results?.order})
  //   // navigate("/my-order");
  // };

  const handlePayment = async (amount) => {
    const response = await payment(amount);
    const payloadData = response?.data?.results?.obj
    const address = addressId;
    const formData = {
      ...payloadData,
      address,
    };
    // handlePlaceOrder(formData);
    navigate("/checkout", { state: payloadData });
  };


  

  // const handleAttributeChange = (itemId, attributeId, valueId) => {
  //   setSelectedAttributes((prevSelected) => ({
  //     ...prevSelected,
  //     [itemId]: {
  //       [attributeId]: valueId,
  //     },
  //   }));
  // };

  const updateProduct = async (item, updatedFields) => {
    const defaultAttribute = item.varient.values[0]?.attribute?._id;
    const defaultValue = item.varient.values[0]?._id;

    const payload = {
      cartId: item?.cart_id,
      product: item.product._id,
      varient: item.varient._id,
      quantity: updatedFields.quantity || item.quantity,
      decrease: updatedFields.decrease || false,
      attribute:
        updatedFields.attribute?.length > 0
          ? updatedFields.attribute
          : [defaultAttribute],
      value:
        updatedFields.value?.length > 0 ? updatedFields.value : [defaultValue],
    };

    console.log("Payload:", payload);

    try {
      const response = await updateCart(payload);
      console.log("Cart updated:", response);
      handleCart(); // Refresh cart if needed
    } catch (error) {
      console.error("Failed to update cart:", error);
    }

    try {
      const response = await updateCart(payload);
      console.log("Cart updated:", response);
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  if (data.length === 0 || !userToken) {
    return (
      <>
        <Header />
        <div className="container">
          <div className="empty-bag-full-width">
            <EmptyBag />
          </div>
        </div>
        <Footer />
      </>
    );
  }


  const getQuantityOptions = () => {
    return [...Array(10).keys()].map((num) => ({
      value: num + 1,
      label: num + 1,
    }));
  };
  
  const getAttributeOptions = (item) => {
    return item?.varient?.values?.map((value) => ({
      value: value._id,
      label: `${value?.attribute?.name_en}: ${value?.name_en}`,
    }));
  };

  return (
    <>
      <Header />
      <section className="bag-section" style={{ marginBottom: "100px" }}>
        <div className="container">
          <div className="d-flex gap-4 mt-4 mb-3">
            <div className="fs-6 fw-semibold text-capitalize text-start">
              Your Bag
            </div>
            <div className="fs-6 fw-light">{count || "0"} Items</div>
          </div>
          <div className="row mt-md-0 mt-0 mb-4">
            <div
              className="col-lg-8 col-md-8 col-12"
              style={{ borderRadius: "10px" }}
            >
              {data.map((item, index) => (
                <div className="bg-white" style={{ borderRadius: "10px" }}>
                  <div className="Checkout-box border-0 mt-3">
                    <div className="row">
                      <div className="col-md-auto col-4">
                        <div className="Checkout-box-img"  style={{cursor:"pointer"}}
                        onClick={() =>
                          navigate(`/product-details/${item?.product?._id}`)
                        }>
                          <img src={item?.varient?.imagesWeb?.[0]} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-7 col-8 px-lg-auto px-md-0 text-start">
                        <h6 className="Checkout-box-head"  style={{cursor:"pointer"}}
                        onClick={() =>
                          navigate(`/product-details/${item?.product?._id}`)
                        }>
                          {item?.product?.name_en}
                        </h6>
                        <p className="normal-text"  style={{cursor:"pointer"}}
                        onClick={() =>
                          navigate(`/product-details/${item?.product?._id}`)
                        }>
                          {capitalize(item?.product?.description_en)}
                        </p>
                        <h5 className="checkbox-price"  style={{cursor:"pointer"}}
                        onClick={() =>
                          navigate(`/product-details/${item?.product?._id}`)
                        }>
                          {item?.product?.currency} {item?.varient?.price}
                        </h5>
                        <h5
                          className="checkbox-price mt-2"
                          style={{cursor:"pointer",color:"gray"}}
                          onClick={() =>
                            navigate(`/product-details/${item?.product?._id}`)
                          }
                        >
                          Price After Discount: {item?.product?.currency}{" "}
                          {item?.varient?.discount}
                        </h5>
                        <div className="checkbox-span-text">
                          <div className="row mt-3">
                            <div className="col-md-5 col-12">
                            <Select
                               value={
                                selectedAttributes[item.product._id]
                                  ? getAttributeOptions(item).find(
                                      (option) =>
                                        option.value ===
                                        selectedAttributes[item.product._id]?.[item.varient.values[0]?.attribute?._id]
                                    )
                                  : getAttributeOptions(item)[0] 
                              }
                                onChange={(selectedOption) => {
                                  const selectedValueId = selectedOption.value;
                                  const selectedAttributeId =
                                    item.varient.values.find(
                                      (value) => value._id === selectedValueId
                                    )?.attribute?._id;
                                  handleAttributeChange(
                                    item.product._id,
                                    selectedAttributeId,
                                    selectedValueId
                                  );
                                }}
                                options={getAttributeOptions(item)}
                                className="custom-select-container"  
                                classNamePrefix="custom-select" 
                              />
                            </div>
                            <div className="col-md-3 col-12 mt-md-0 mt-4">
                            <Select
                                value={getQuantityOptions().find(
                                  (option) => option.value === item.quantity
                                )}
                                onChange={(selectedOption) =>
                                  handleQuantityChange(item.product._id, selectedOption.value)
                                }
                                options={getQuantityOptions()}
                                className="custom-select-container"  
                                classNamePrefix="custom-select" 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-top mt-4 align-items-center col-lg-12  pt-2 ps-2 mb-2 d-flex gap-5">
                        <div
                          className="d-flex ms-1 gap-2 align-items-center"
                          onClick={() => handleRemove(item?.cart_id)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-trash trash-icon" />
                          <p className="text" style={{ cursor: "pointer" }}>
                            Remove
                          </p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa fa-heart-o trash-icon" />
                          <p className="text" style={{ cursor: "pointer" }}>
                            Add To Wishlist
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-6 col-md-8 col-12 mx-auto mt-md-5 mt-3">
                <Link to="/" className="comman-btn">
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4">
              <h5 className="text fw-bold text-start">Payment Methods</h5>
              <div className="d-flex justify-content-around">
                <div className="payment-img-wrapper">
                  <img src="assets/img/Visa2.png" alt="" />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/cart2.png" alt="" />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/applePay2.png" alt="" />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/paypal2.png" alt="" />
                </div>
              </div>
              <div className="mt-3">
                <h5 className="text fw-bold text-start">Price Details</h5>
                <div className="Checkout-box mt-3 px-3 py-3 bg-white">
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text text-start">Subtotal</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR {getTotalPrice()}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text text-start">Total Discount</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR {getTotalDiscount()}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text text-start">Tax</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR 0</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text text-start">Grand Total</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">
                        SAR {getTotalPrice() - getTotalDiscount()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-4">
                    <button
                      className="comman-btn"
                      onClick={() => handlePayment({ amount: getTotalPrice() })}
                    >
                      Checkout Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bag;
