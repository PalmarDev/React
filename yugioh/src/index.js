import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Carts from "./pages/Carts";
import Torneos from "./pages/Torneos";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/juego"
          element={
            <Layout>
              <Game />
            </Layout>
          }
        />
        <Route
          path="/torneos"
          element={
            <Layout>
              <Torneos />
            </Layout>
          }
        />
        <Route
          path="/cartas"
          element={
            <Layout>
              <Carts />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
