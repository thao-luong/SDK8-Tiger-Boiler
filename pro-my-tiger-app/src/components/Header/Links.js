import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to={"/basic"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Basic Component
            </NavLink>
            <NavLink to={"/export"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Export
            </NavLink>
            <NavLink to={"/geo-chart"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Geo Pushpin Chart
            </NavLink>
        </>
    );
};

export default Links;
