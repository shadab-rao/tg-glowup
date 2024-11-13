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
        localStorage.setItem(
          "glow_user",
          JSON.stringify(data?.results?.phoneNumber)
        );
        await localStorage.removeItem("token-user");
        await localStorage.setItem(
          "token-glow",
          headers["x-auth-token-user"]
        );
        // await localStorage.setItem("glow_id", data?.results?.verify?._id);
  
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: data.message,
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