import { render, screen, fireEvent } from "@testing-library/react";
import VideoPlayback from "./VideoPlayback";
import selectedVideo from "../../mocks/selectedVideo.json";

test("Check iFrame Title is Visible and has correct data", () => {
  render(<VideoPlayback video={selectedVideo} />);
  const iframe = screen.getByTitle(selectedVideo.snippet.title);
  expect(iframe).toBeInTheDocument();
  expect(iframe.title).toBe(
    "Redux Flow - What is Redux and How it work? | React JS Tutorial #14"
  );
});

