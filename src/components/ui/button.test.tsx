import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { Button, buttonVariants } from "./button"

describe("Button", () => {
  it("renders a native button by default", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: "Click me" })
    expect(button.tagName).toBe("BUTTON")
  })

  it("applies variant and size classes", () => {
    render(
      <Button variant="outline" size="sm">
        Outline
      </Button>
    )
    const button = screen.getByRole("button", { name: "Outline" })
    expect(button).toHaveClass("border", "h-8")
  })

  it("merges a custom className", () => {
    render(<Button className="custom-class">Styled</Button>)
    expect(screen.getByRole("button", { name: "Styled" })).toHaveClass(
      "custom-class"
    )
  })

  it("forwards native button attributes", () => {
    render(
      <Button type="submit" disabled>
        Submit
      </Button>
    )
    const button = screen.getByRole("button", { name: "Submit" })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute("type", "submit")
  })

  it("renders as a different element via the render prop", () => {
    render(
      <Button render={<a href="/home" />}>Home</Button>
    )
    const link = screen.getByRole("link", { name: "Home" })
    expect(link.tagName).toBe("A")
    expect(link).toHaveAttribute("href", "/home")
    // Styling is preserved on the overridden element.
    expect(link).toHaveClass(...buttonVariants().split(" ").slice(0, 1))
  })
})
