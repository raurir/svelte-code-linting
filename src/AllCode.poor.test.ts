import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";

import AllCode from "./AllCode.svelte";

describe("AllCode poor", () => {
  test("runs tests with poor coverage", () => {
    const { getByText } = render(AllCode);
    expect(getByText("Hello Developer")).toBeInTheDocument();
  });
});
