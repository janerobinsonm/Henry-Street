import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

export default ({ location }) => (
  <div className="locationes">
    <div className="location__item">
      <div>
        <h1 className="location__link">
          <Link className="location__link" to={`/locations/${location.id}`}>
            {location.name}
          </Link>
        </h1>
      </div>
      <div>
        <h2 className="location__link">{location}</h2>
      </div>
    </div>
  </div>
);
