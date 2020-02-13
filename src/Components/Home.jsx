import React from "react";
import styles from './Home.module.css';
import willyLogo from "../img/willy-logo.png";

const Home = () => {

    const siteDescription = <div className={styles["site-description"]}>
        <div className={styles["description-content"]}>
            <div className={styles["single-column"]}>
                <img src={willyLogo} alt="Dr. Willy logo" />
                <h2>Embark in a brand new adventure</h2>

                <p>Fight the classic robot masters in an enjoyable way</p>

                <button>Fight now!</button>
            </div>
        </div>
    </div >;

    const usageExample = <div>Usage example</div>;
    const latestRobotsVisited = <div>Latest robots visited</div>;
    const testimonials = <div>Testimonials</div>;

    return (<div>
        {siteDescription}
        {usageExample}
        {latestRobotsVisited}
        {testimonials}
    </div>);
}

export default Home;