import { describe, expect, it, vi } from "vitest";

describe("mock", () => {
  function sayHello(name: string, callback: (message: string) => void) {
    callback(`Hello, ${name}`);
  }

  it('should mock func pass', () => {
    const callback = vi.fn()
    sayHello("Nuridin", callback)
    expect(callback).toHaveBeenCalledWith("Hello, Nuridin")
  });
});
