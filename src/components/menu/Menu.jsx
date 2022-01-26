import React from "react";
import { Link } from "react-router-dom";
import { HOME_PATH } from "../../utils/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

export default function Menu({ show, options }) {
  return (
    <div className={`menu menu-${show ? "show" : "hide"}`}>
      {options?.length > 0 && (
        <ul className="options">
          <li>
            <Link to={HOME_PATH}>
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          {options.map((option, index) => (
            <li key={index}>
              <Link to={option.link}>{option.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
