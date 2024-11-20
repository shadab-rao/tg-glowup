import Swal from "sweetalert2";
import glowHttpServie from "../glowHttpServie.js";

export async function glowLogin(formData) {
  try {
    const { data, headers } = await glowHttpServie.put(
      `${process.env.REACT_APP_APIENDPOINT}/auth/signin`,
      formData
    );

    console.log(JSON.stringify(formData));
    if (!data?.error) {
      // localStorage.setItem("glow-user", JSON.stringify(data?.results));
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.results?.otp,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });

      return { data };
    } else
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}

export async function verifyOTP(formData) {
  try {
    const response = await glowHttpServie.put(
      `${process.env.REACT_APP_APIENDPOINT}/auth/verifyOTP`,
      formData,
      {
        headers: {
          "x-auth-language": "English",
        },
      }
    );

    const { data } = response;

    if (!data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });

      const token = data.results.token;
      if (token) {
        await localStorage.removeItem("token-user");
        await localStorage.setItem("token-user", token);
      }
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    return { error };
  }
}
export async function editProfile(formData) {
  try {
    const response = await glowHttpServie.put(
      `${process.env.REACT_APP_APIENDPOINT}/auth/editUserProfile`,
      formData
    );

    const { data } = response;

    if (!data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    if (!data.error) return { data };
  } catch (error) {
    if (error.response) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    return { error };
  }
}
export async function addToCart(formData) {
  try {
    const response = await glowHttpServie.post(
      `${process.env.REACT_APP_APIENDPOINT}/cart/addToCart`,
      formData
    );

    const { data } = response;

    if (!data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    if (!data.error) return { data };
  } catch (error) {
    if (error.response) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    return { error };
  }
}
export async function addWishlist(formData) {
  try {
    const response = await glowHttpServie.post(
      `${process.env.REACT_APP_APIENDPOINT}/platform/addWishlist`,
      formData
    );

    const { data } = response;

    if (!data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    if (!data.error) return { data };
  } catch (error) {
    if (error.response) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    return { error };
  }
}

export async function getUser() {
  try {
    const { data } = await glowHttpServie.get(
      `${process.env.REACT_APP_APIENDPOINT}/auth/getUser`
    );
    return { data };
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function getCart() {
  try {
    const { data } = await glowHttpServie.get(
      `${process.env.REACT_APP_APIENDPOINT}/cart/getMyCart`
    );
    return { data };
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}

export async function getContent(requestData) {
  try {
    const { data } = await glowHttpServie.patch(
      `${process.env.REACT_APP_APIENDPOINT}/platform/getUserContent`,
      requestData
    );

    return { data };
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function getCategory(requestData) {
  try {
    const { data } = await glowHttpServie.patch(
      `${process.env.REACT_APP_APIENDPOINT}/category/getAllCategories`,
      requestData
    );

    return { data };
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function getSubcategory(requestData) {
  try {
    const { data } = await glowHttpServie.patch(
      `${process.env.REACT_APP_APIENDPOINT}/category/getAllSubCategories`,
      requestData
    );

    return { data };
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function productDetail(id) {
  try {
    const { data } = await glowHttpServie.get(
      `${process.env.REACT_APP_APIENDPOINT}/inventory/viewProduct/${id}`
    );

    return { data };
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function removeCartItem(id) {
  try {
    const { data } = await glowHttpServie.patch(
      `${process.env.REACT_APP_APIENDPOINT}/cart/removeProduct`,
      id
    );
    if (!data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    if (!data.error) return { data };

  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function wishList(id) {
  try {
    const { data } = await glowHttpServie.patch(
      `${process.env.REACT_APP_APIENDPOINT}/platform/getWishList`,
      id
    );
    if (!data.error) {
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    if (!data.error) return { data };

  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function productList({ pageSize , page  }) {
  try {
    const { data } = await glowHttpServie.patch(
      `${process.env.REACT_APP_APIENDPOINT}/inventory/getProducts`,
      {
        pageSize,
        page,     
      }
    );
    if (!data.error) {
      // Swal.fire({
      //   toast: true,
      //   icon: "success",
      //   position: "top-end",
      //   title: data.message,
      //   showConfirmButton: false,
      //   timerProgressBar: true,
      //   timer: 3000,
      // });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    if (!data.error) return { data };

  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function subSubCategories(formData) {
  try {
    const { data } = await glowHttpServie.patch(
      `${process.env.REACT_APP_APIENDPOINT}/category/getAllSubSubCategories`,
      formData
    );
    if (!data.error) {
      // Swal.fire({
      //   toast: true,
      //   icon: "success",
      //   position: "top-end",
      //   title: data.message,
      //   showConfirmButton: false,
      //   timerProgressBar: true,
      //   timer: 3000,
      // });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
    if (!data.error) return { data };

  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
