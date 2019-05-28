import welcome from ".";

describe("it should say welcome", () => {
  it("should greet 'Marieth'", () => {
    expect(welcome()).toBe("Welcome, Marieth");
  });

  it("should greet 'Franciss'", () => {
    expect(welcome("Franciss")).toBe("Welcome, Franciss");
  });
});
