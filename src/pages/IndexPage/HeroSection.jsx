import CTAButton from "../../components/CTAButton"
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    const showParkings = () => {
        const data = { search: 'all' };
        navigate(`/CardListMain`, { state: data });
    }

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(/images/parking.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Park Here</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <CTAButton isOutlined={false} onClick={showParkings} >Get Started</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection