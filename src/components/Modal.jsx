import { createPortal } from 'react-dom'

const Modal = ({ id, children }) => {
    return createPortal(
        <dialog id={id} className="modal">
            {children}
        </dialog>,
        document.getElementById('modal-root')
    )
}

export default Modal