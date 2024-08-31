import { useState, useRef } from 'react';

const OTPInput = ({ length, onChangeOTP }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputs = useRef([]);

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, '');
        if (value) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            onChangeOTP(newOtp.join(''));

            // Focus on next input
            if (index < length - 1) {
                inputs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace') {
            if (otp[index] === '') {
                if (index > 0) {
                    inputs.current[index - 1].focus();
                }
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
                onChangeOTP(newOtp.join(''));
            }
        } else if (event.key === 'ArrowLeft' && index > 0) {
            inputs.current[index - 1].focus();
        } else if (event.key === 'ArrowRight' && index < length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handlePaste = (event) => {
        const paste = event.clipboardData.getData('text').slice(0, length);
        const newOtp = Array(length).fill('');
        for (let i = 0; i < paste.length; i++) {
            if (i < length) {
                newOtp[i] = paste[i];
            }
        }
        setOtp(newOtp);
        onChangeOTP(newOtp.join(''));
        inputs.current[paste.length - 1].focus();
    };

    return (
        <div onPaste={handlePaste} className="flex space-x-2">
            {otp.map((_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={otp[index]}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(ref) => inputs.current[index] = ref}
                    className="input input-bordered w-12 h-12 text-center text-lg"
                />
            ))}
        </div>
    );
};

export default OTPInput;
