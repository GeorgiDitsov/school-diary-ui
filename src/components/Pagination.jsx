import React from "react";
import { Pagination as PaginationRB } from "react-bootstrap";
import "./Pagination.css";

export default function Pagination({ activePage, totalPages, setActivePage }) {
  return (
    <PaginationRB>
      {totalPages > 1 &&
        [...Array(totalPages).keys()].map((page, index) => (
          <PaginationRB.Item
            key={index}
            active={page === activePage}
            onClick={() => setActivePage(page)}
          >
            {page + 1}
          </PaginationRB.Item>
        ))}
    </PaginationRB>
  );
}
