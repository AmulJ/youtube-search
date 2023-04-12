import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Check YouTube text is in the document", () => {
  render(<App />);
  const youtubeDivElement = screen.getByText("YouTube");
  expect(youtubeDivElement).toBeInTheDocument();
});

test("Check YouTube text click event", () => {
  render(<App />);
  const youtubeDivElement = screen.getByText("YouTube");
  fireEvent.click(youtubeDivElement);
  const inputField = screen.getByLabelText("youtube-search");
  fireEvent.change(inputField, { target: { value: "react js" } });
  expect(inputField.value).toBe("react js");
  fireEvent.click(youtubeDivElement);
  expect(inputField.value).toBe("");
});
