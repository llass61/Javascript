
let year1 = '2019';
describe("Get year dates", () => {

    it ("should be a number", () => {
        year = parseInt(year1);
        expect(year).toBe(2019);
    });
});

let year2 = 2019;
describe("Get year dates", () => {

    beforeEach(() => {
        year2 += 1;
    });

    it("should be next year", () => {
        expect(year2).toBe(2020);
    });
});

let year3 = 2019;
describe("Get year dates", () => {

    beforeEach(() => {
        year3 += 2;
    });

    it("should be next year", () => {
        expect(year3).toBe(2020);
    });

    it("should be next year", () => {
        expect(year3).toBe(2021);
    });
});