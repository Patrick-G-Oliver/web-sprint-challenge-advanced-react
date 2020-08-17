import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<App />);
    const header = getByText(/react plants/i);
    expect(header).toBeInTheDocument;
});

test("form shows success message on submit with form details", () => {

});
