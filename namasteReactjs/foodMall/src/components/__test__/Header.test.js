import "@testing-library/jest-dom";
// import "react-router";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import Header from "../Header";
import appStore from "../../utils/appStore";

describe("Testing Header", () => {
  test("testing Header was rendered", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const button = screen.getByText("Home");
    expect(button).toBeInTheDocument();

    const Cart = screen.getByText(/Cart/);
    expect(Cart).toBeInTheDocument();
  });
});