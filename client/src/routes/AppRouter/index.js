import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout";
import ProductsContainer from "../../components/ProductsContainer";
import SingleItemContainer from "../../components/SingleItemContainer";
import HomePage from "../../pages/HomePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/items"
          element={
            <Layout>
              <ProductsContainer />
            </Layout>
          }
        />
        <Route
          path="/items/:id"
          element={
            <Layout>
              <SingleItemContainer />
            </Layout>
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
