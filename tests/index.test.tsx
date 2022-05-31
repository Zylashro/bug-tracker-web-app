import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "../pages/index";

test('should render text', () => { 
    render(<Home />);
    const linkElement = screen.getByText(/welcome to/i);
    expect(linkElement).toBeInTheDocument();
});
