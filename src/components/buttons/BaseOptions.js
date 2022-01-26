import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Button } from "react-bootstrap";

const BaseOptions = ({ onClick }) => {
  const translate = useContext(LocalizationContext);

  return (
    <td>
      <Button size="sm" variant="info" onClick={onClick}>
        {translate("info")}
      </Button>
    </td>
  );
};

export default BaseOptions;
