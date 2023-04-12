import { render, screen, fireEvent } from "@testing-library/react";
import VideoDescription from "./VideoDescription";
import selectedVideo from "../../mocks/selectedVideo.json";

test("Check Title is Visible and has correct data", () => {
  render(<VideoDescription video={selectedVideo} />);
  const title = screen.getByLabelText("Video Title");
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe(
    "Redux Flow - What is Redux and How it work? | React JS Tutorial #14"
  );
});

test("Check Channel title is Visible and has correct data", () => {
  render(<VideoDescription video={selectedVideo} />);
  const channelTitle = screen.getByLabelText("Video Channel Title");
  expect(channelTitle).toBeInTheDocument();
  expect(channelTitle.textContent).toBe("WsCube Tech");
});

test("Check Published is Visible and has correct data", () => {
  render(<VideoDescription video={selectedVideo} />);
  const channelPublished = screen.getByLabelText("Video Published");
  expect(channelPublished).toBeInTheDocument();
  expect(channelPublished.textContent).toBe("Published : 15/04/2021");
});
