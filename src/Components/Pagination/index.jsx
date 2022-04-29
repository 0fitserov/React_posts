import React from "react";
import PaginationBtn from "../PaginationBtn";

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const previousPage = () => {
    setPage((pageNmbr) => {
      if (pageNmbr > 1) return pageNmbr - 1;
    });
  };

  const nextPage = () => {
    setPage((pageNmbr) => {
      if (pageNmbr < totalPages - 1) return pageNmbr + 1;
    });
  };

  const goToPage = (pageNmbr) => {
    setPage(pageNmbr);
  };

  let centrBlock;

  if (currentPage < 4) {
    centrBlock = new Array(4).fill(1).map((val, index) => {
      return (
        <PaginationBtn
          onClick={() => {
            goToPage(index + 2);
          }}
          key={index + 2}
        >
          {index + 2}
        </PaginationBtn>
      );
    });
  } else if (currentPage < totalPages - 3) {
    centrBlock = new Array(5).fill(1).map((val, index) => {
      const displayedPage = currentPage - 2 + index;
      return (
        <PaginationBtn
          onClick={() => {
            goToPage(displayedPage);
          }}
          key={displayedPage}
        >
          {displayedPage}
        </PaginationBtn>
      );
    });
  } else {
    centrBlock = new Array(4).fill(1).map((val, index) => {
      const displayedPage = totalPages - 4 + index;
      return (
        <PaginationBtn
          onClick={() => {
            goToPage(displayedPage);
          }}
          key={displayedPage}
        >
          {displayedPage}
        </PaginationBtn>
      );
    });
  }

  return (
    <>
      <PaginationBtn onClick={previousPage}>{`<`}</PaginationBtn>
      <PaginationBtn
        onClick={() => {
          goToPage(1);
        }}
      >
        1
      </PaginationBtn>
      {centrBlock}
      <PaginationBtn
        onClick={() => {
          goToPage(totalPages);
        }}
      >
        {totalPages}
      </PaginationBtn>
      <PaginationBtn onClick={nextPage}>{`>`}</PaginationBtn>
    </>
  );
};

export default Pagination;
