import Swal, { type SweetAlertPosition } from "sweetalert2";

const success = (message?: string, title = "Success") => {
    return Swal.fire({
        icon: "success",
        title,
        text: message,
        confirmButtonText: "OK",
        confirmButtonColor: "#AA0C51",
    });
};

const error = (message?: string, title = "Error") => {
    return Swal.fire({
        icon: "error",
        title,
        text: message,
        confirmButtonText: "OK",
        confirmButtonColor: "#dc3545",
    });
};

const warning = (message?: string, title = "Warning") => {
    return Swal.fire({
        icon: "warning",
        title,
        text: message,
        confirmButtonText: "OK",
        confirmButtonColor: "#ffc107",
    });
};

const info = (message?: string, title = "Info") => {
    return Swal.fire({
        icon: "info",
        title,
        text: message,
        confirmButtonText: "OK",
        confirmButtonColor: "#AA0C51",
    });
};

const confirm = (message?: string, title = "Confirm") => {
    return Swal.fire({
        icon: "question",
        title,
        text: message,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        width: "350px",
        padding: "1rem",
        confirmButtonColor: "#AA0C51",
        cancelButtonColor: "#c64d84",
    });
};

const Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
        popup: "custom-toast",
    },
});
const showToast = (message?: string, position: SweetAlertPosition = "bottom", title?: string, icon?: "success" | "error" | "warning" | "info") => {
    const background = {
        success: "#198754",
        error: "#C62828",
        warning: "#E6A700",
        info: "#AA0C51",
    }[icon || "info"];

    return Toast.fire({
        // icon,
        text: message,
        background,
        color: "#ffffff",
        position,
    });
};

const toastSuccess = (message?: string, position: SweetAlertPosition = "bottom", title = "Success") => {
    showToast(message, position, title, "success");
};

const toastError = (message?: string, position: SweetAlertPosition = "bottom", title = "Error") => {
    showToast(message, position, title, "error");
};

const toastWarning = (message?: string, position: SweetAlertPosition = "bottom", title = "Warning") => {
    showToast(message, position, title, "warning");
};

const toastInfo = (message?: string, position: SweetAlertPosition = "bottom", title = "Info") => {
    showToast(message, position, title, "info");
};


export const sweetalert = {
    success,
    error,
    warning,
    confirm,
    info,
    showToast,
    toastSuccess,
    toastError,
    toastWarning,
    toastInfo,

};
