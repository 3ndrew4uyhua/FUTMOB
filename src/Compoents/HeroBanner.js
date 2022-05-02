import './HeroBanner.css'

function HeroBanner (props) {
    return(
        <div className="Hero-image">
            <div className="hero-context">
                <input/>
                <h1>{props.title}</h1>
                <h2>{props.location}</h2>
            </div>
        </div>
    )
}
export default HeroBanner;