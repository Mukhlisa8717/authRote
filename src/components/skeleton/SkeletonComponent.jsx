import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const SkeletonComponent = ({ perPageCount }) => {
  return (
    <Grid container spacing={2}>
      {new Array(perPageCount).fill("").map((_, inx) => (
        <Grid key={inx} item lg={4} width={534}>
          <Skeleton variant="rectangular" height={250} />
          <Box sx={{ pt: 0.5, display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <Skeleton width="50%"/>
            <Skeleton width="40%" />
            <Skeleton width="70%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonComponent;
