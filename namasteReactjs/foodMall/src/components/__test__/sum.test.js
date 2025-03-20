import { sum } from "../sum";

test("SUM testcase", () => {
  const result = sum(1001, 1001);
  expect(result).toBe(2002);
});
