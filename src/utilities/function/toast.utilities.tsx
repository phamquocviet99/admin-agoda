import { toast } from "react-toastify";

export const toastErrorNetwork = () => {
  return toast.error("Lỗi đường truyền Internet", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
