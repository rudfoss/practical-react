import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Header } from "./Header"

describe("Header", () => {
	it("should be defined", () => {
		expect(typeof Header).toBe("function")
	})
	it("should render a heading", () => {
		const result = render(<Header>Test</Header>)
		expect(result.getByRole("heading")).toBeDefined()
	})
	it("should render my heading text", () => {
		const result = render(<Header>Test</Header>)
		const element = result.getByRole("heading")
		expect(element.textContent).toBe("Test")
	})
})
