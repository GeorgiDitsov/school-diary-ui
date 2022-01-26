import React from "react";
import { UserRow, UserColumns } from "./items/User";
import List from "../List";

export default function Users({ users, onEdit }) {
  const rows = users.map((user, index) => (
    <UserRow key={index} user={user} onEdit={onEdit} />
  ));

  return <List columns={<UserColumns />} rows={rows} />;
}
