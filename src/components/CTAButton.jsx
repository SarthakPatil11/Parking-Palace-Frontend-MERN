import { Link } from 'react-router-dom';

const CTAButton = ({ isOutlined, className, to, onClick, children, isDisabled }) => {
    const defaultClasses = "btn bg-warning text-black hover:bg-yellow-600 hover:text-white";
    const defaultClassesOutlined = "btn bg-transparent border-warning text-warning hover:bg-yellow-600 hover:text-white";

    if (to) {
        return (
            <>
                {/* {isOutlined ? (
                    <input type="submit" className={`${defaultClassesOutlined} ${className}`} value={Icon ? <Icon/> : children} onClick={onClick} />
                ) : (
                        <input type="submit" className={`${defaultClasses} ${className}`} value={`${<Icon />} ${children}`} onClick={onClick} />
                )} */}
                {isOutlined ? (
                    <Link className={`${defaultClassesOutlined} ${className}`} to={to} onClick={onClick}>{children}</Link>
                ) : (
                    <Link className={`${defaultClasses} ${className}`} to={to} onClick={onClick}>{children}</Link>
                )}
            </>
        )
    }

    return (
        <>
            {isOutlined ? (
                <button type="submit" className={`${defaultClassesOutlined} ${className}`} onClick={onClick} disabled={isDisabled} >{children}</button>
            ) : (
                    <button type="submit" className={`${defaultClasses} ${className}`} onClick={onClick} disabled={isDisabled}>{children}</button>
            )}
        </>
    )
}

export default CTAButton