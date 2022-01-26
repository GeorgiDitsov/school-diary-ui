import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

export default function DeleteButton({ ...rest }) {
  const { t } = useTranslation();

  return (
    <Button type="button" variant="danger" {...rest}>
      {t("delete")}
    </Button>
  );
}
