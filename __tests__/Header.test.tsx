import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header Component", () => {
  it("renders the navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
  });

  it("renders the 'Get Started' button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /get started/i })).toBeInTheDocument();
  });
});
