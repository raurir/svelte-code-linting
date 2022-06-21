import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/svelte";
import { tick } from "svelte";

import AllCode from "./AllCode.svelte";

describe("AllCode complete", () => {
  test("runs tests with full coverage", async () => {
    const { getByText } = render(AllCode);
    expect(getByText("Hello Developer")).toBeInTheDocument();

    const button = getByText("Call function c");
    fireEvent.click(button);

    await tick();

    expect(getByText("A is 1")).toBeInTheDocument();
    expect(getByText("B is 2")).toBeInTheDocument();
    expect(getByText("C is 3")).toBeInTheDocument();
  });
});
