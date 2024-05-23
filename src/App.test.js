import { render, screen } from "@testing-library/react";

test("Numbers and strings arithmetics test", () => {
  const br1 = 10;
  const br2 = 20;
  const br3 = "10";
  const br4 = "20";

  const zbir1 = br1 + br2;
  const zbir2 = br3 + br4;
  const zbir3 = br1 + br3;
  const zbir4 = br4 + br2;

  console.log("Zbir 1 = ", zbir1);
  console.log("Zbir 2 = ", zbir2);
  console.log("Zbir 3 = ", zbir3);
  console.log("Zbir 4 = ", zbir4);

  expect(zbir4).toBe(2020);
});
