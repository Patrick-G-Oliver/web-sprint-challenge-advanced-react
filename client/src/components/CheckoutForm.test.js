import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const header = getByText(/checkout form/i);
    expect(header).toBeInTheDocument;
});

test("form shows success message on submit with form details", async () => {
    const { getByText, getByTestId } = render(<CheckoutForm />);

    const firstName = getByTestId("fName");
    fireEvent.change(firstName, { target: {value: "Happy"} });

    const lastName = getByTestId("lName");
    fireEvent.change(lastName, { target: {value: "Customer"} });

    const address = getByTestId("address");
    fireEvent.change(address, { target: {value: "333 Pine Rd."} });

    const city = getByTestId("city");
    fireEvent.change(city, { target: {value: "Sometown"} });

    const state = getByTestId("state");
    fireEvent.change(state, { target: {value: "NE"} });

    const zip = getByTestId("zip");
    fireEvent.change(zip, { target: {value: "54321"} });

    const button = getByText("Checkout");
    fireEvent.click(button);

    await waitFor( () => {
        expect(getByTestId("successMessage")).toBeInTheDocument();
    })
});
