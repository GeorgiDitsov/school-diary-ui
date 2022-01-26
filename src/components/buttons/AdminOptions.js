import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { ButtonGroup, Button } from "react-bootstrap";

const AdminOptions = ({ item, onEdit, onDelete }) => {
  const translate = useContext(LocalizationContext);

  return (
    <td>
      <ButtonGroup>
        {onEdit && (
          <Button size="sm" variant="primary" onClick={() => onEdit(item)}>
            {translate("edit")}
          </Button>
        )}
        {onDelete && (
          <Button
            size="sm"
            variant="danger"
            onClick={() => onDelete(item.id || item.value)}
          >
            {translate("delete")}
          </Button>
        )}
      </ButtonGroup>
    </td>
  );
};

export default AdminOptions;
