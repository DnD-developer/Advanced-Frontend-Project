import "@testing-library/jest-dom"
import "whatwg-fetch"
import ResizeObserver from "resize-observer-polyfill"
import { intersectionObserverMock } from "@mocks/intersectionObserver.mock"

global.ResizeObserver = ResizeObserver

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock)
