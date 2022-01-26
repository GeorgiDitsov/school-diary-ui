import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

export default function SubmitButton() {
  const { t } = useTranslation();

  return (
    <Button type="submit" variant="success">
      {t("submit")}
    </Button>
  );
}
