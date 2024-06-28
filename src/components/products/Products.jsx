import React from 'react'
import stars from "../../assets/stars.svg";
import './Products.scss'
import { Box, Grid } from '@mui/material';
import defaultImg from "../../assets/defaultImage.jpg";

const Products = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data?.data?.products?.map((product) => (
        <Grid key={product.id} item lg={4} width={534}>
          <Box
            sx={{
              width: "100%",
              height: "70%",
              p: "10px",
              display: "flex",
              background: "#F6F6F6",
            }}
          >
            <img
              src={product.urls[0] ? product.urls[0] : defaultImg}
              width={200}
              alt=""
              className="product__image"
            />
          </Box>
          <Box
            sx={{
              pt: 0.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <h4 className="product__title">{product.title}</h4>
            <img src={stars} alt="stars" />
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <h5 className="product__old-price">{product.oldPrice}</h5>
              <h4 className="product__price">{product.price}</h4>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products
