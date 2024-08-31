import { useEffect } from 'react';
import { createPortal } from 'react-dom'

const Toast = ({ severity, duration, onClose, children }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, [duration, onClose]);

    return createPortal(
        <div className="toast z-50">
            <div className={`alert alert-${severity}`}>
                <span>{children}</span>
            </div>
        </div>,
        document.getElementById('toast-root')
    )
}

export default Toast