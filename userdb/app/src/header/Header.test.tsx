import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { Header } from "./Header"

describe("Header", () => {
	afterEach(() => cleanup())

	it("should be defined", () => {
		expect(typeof Header).toBe("function")
	})
	it("should render a heading", () => {
		render(<Header>Test1</Header>)
		expect(screen.getByRole("heading")).toBeDefined()
	})
	it("should render my heading text", () => {
		render(<Header>Test2</Header>)
		const element = screen.getByRole("heading")
		expect(element.textContent).toBe("Test2")
	})
})
