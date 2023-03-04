const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "SNHU";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole()  should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "SNHU");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getgitHub()", () => {
    const testValue = "SNHU";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});