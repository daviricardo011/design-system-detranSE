import Swal from 'sweetalert2'

export default function AlertNotify({ title, text, buttonText, cancelButtonText = null, icon }) {
    return (
        Swal.fire({
            title: title,
            icon: icon,
            text: text,
            customClass: {
                confirmButton: 'mx-3 btn btn-primary',
                cancelButton: 'mx-3 btn btn-danger'
            },
            buttonsStyling: false,
            confirmButtonText: buttonText,
            showCancelButton: !!cancelButtonText,
            cancelButtonText: cancelButtonText,
        })
    )
}
