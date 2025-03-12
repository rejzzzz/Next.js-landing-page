import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer Component", () => {
  it("renders footer text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 AISaaS. All rights reserved./i)).toBeInTheDocument();
  });
});
