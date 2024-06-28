import React from "react";
import "./PageControl.scss";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";

const PageControl = ({ data, setPerPageCount, perPageCount, page, setPage }) => {
  let totalPagination = Math.ceil(data?.data?.count / perPageCount);

  const handleChangePagination = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };

  const handleChangePage = (e) => {
    let value = e.target.value;
    setPerPageCount(value);
    localStorage.setItem("page", value);

    let result = Math.ceil((page * perPageCount) / value);

    setPage(result);
    sessionStorage.setItem("page-count", result);
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '20px'}}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPagination}
          page={page}
          onChange={handleChangePagination}
          color="primary"
        />
      </Box>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Pages</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={perPageCount}
          onChange={handleChangePage}
          autoWidth
          label="Pages"
        >
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PageControl;
