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
      localStorage.setItem("glow-user", JSON.stringify(data?.results));
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
          'x-auth-language': 'English',
        }
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
      formData,
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
