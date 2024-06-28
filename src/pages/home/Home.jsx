import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Brand from "../../components/brand/Brand";
import "./Home.scss";
import Products from "../../components/products/Products";
import Reviews from "../../components/reviews/Reviews";
import Newsletter from "../../components/newsletter/Newsletter";
import { useGetProductsQuery } from "../../context/api/productApi";
import SkeletonComponent from "../../components/skeleton/SkeletonComponent";
import PageControl from "../../components/pageControl/PageControl";

const Home = () => {
  const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1);
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("page") || 6,
  );
  const { data, isFetching } = useGetProductsQuery({
    limit: perPageCount,
    page,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Brand />
      <section className="products">
        <div className="container products__cont">
          <div>
            <p className="subtitle">Find your favourite smart watch.</p>
            <h2 className="title">Our Latest Products</h2>
          </div>
          {isFetching ? (
            <SkeletonComponent perPageCount={perPageCount} />
          ) : (
            <Products data={data} />
          )}

          <PageControl
            data={data}
            setPerPageCount={setPerPageCount}
            perPageCount={perPageCount}
            page={page}
            setPage={setPage}
          />
        </div>
      </section>
      <Reviews />
      <Newsletter />
    </main>
  );
};

export default Home;
