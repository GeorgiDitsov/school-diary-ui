import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";
import { useHistory } from "react-router-dom";
import BaseOptions from "../../buttons/BaseOptions";
import { CHILDREN_PATH } from "../../../utils/url";

export const ChildColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("name")}</th>
      <th>{translate("pin")}</th>
      <th>{translate("class")}</th>
      <th>{translate("Average")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const ChildRow = ({ child }) => {
  const history = useHistory();

  return (
    <tr>
      <td>{child.fullName}</td>
      <td>{child.pin}</td>
      <td>{child.group || "-"}</td>
      <td>{child.success || "-"}</td>
      <BaseOptions
        onClick={() =>
          history.push({
            pathname: `${CHILDREN_PATH}/${child.id}/grades`,
            state: child,
          })
        }
      />
    </tr>
  );
};
