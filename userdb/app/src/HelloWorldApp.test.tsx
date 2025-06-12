import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { App } from "./HelloWorldApp"

describe("App", () => {
	afterEach(() => cleanup())

	it("is defined", () => {
		expect(typeof App).toEqual("function")
	})
	it("renders expected heading", () => {
		render(<App />)
		expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
	})
})
