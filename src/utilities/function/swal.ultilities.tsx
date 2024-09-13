import Swal from "sweetalert2";

export const ConfirmPopup = (
  title: string,
  text?: string,
  confirmText?: string,
  cancelText?: string,
  onConfirm?: () => void
) => {
  return Swal.fire({
    title: title,
    text: text ? text : "Mọi thay đổi sẽ không thể khôi phục",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#68858B",
    cancelButtonColor: "#AC1818",
    confirmButtonText: confirmText ? confirmText : "Xác nhận",
    cancelButtonText: cancelText ? cancelText : "Hủy bỏ",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm && onConfirm();
    }
  });
};

export const SuccessPopup = (
  title: string,
  text?: string,
  confirmText?: string
) => {
  return Swal.fire({
    title: title,
    text: text || "",
    icon: "success",
    confirmButtonText: confirmText ? confirmText : "Xác nhận",
  });
};

export const ErrorPopup = (
  title?: string,
  text?: string,
  confirmText?: string
) => {
  return Swal.fire({
    title: title || "Đã xảy ra lỗi",
    text: text || "",
    icon: "error",
    confirmButtonText: confirmText ? confirmText : "Xác nhận",
  });
};
