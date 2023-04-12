import { render, screen } from "@testing-library/react";
import VideoList from "./VideoList";
import youtubeList from "../../mocks/youtubeList.json";

describe("My Test", () => {
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetHeight"
  );
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetWidth"
  );

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      configurable: true,
      value: 50,
    });
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 50,
    });
  });

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetHeight",
      originalOffsetHeight
    );
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetWidth",
      originalOffsetWidth
    );
  });

  test("Check initial Video list", async () => {
    render(
      <VideoList
        totalResults={youtubeList.pageInfo.totalResults}
        isNextPageLoading={false}
        videos={youtubeList.items}
        searchHandler={() => {}}
      />
    );
    const items = screen.getAllByLabelText("video-thumbnail");
    expect(items).toHaveLength(18); // this number might vary based on screen. Need to check this
  });

  test("Check first item in the list", async () => {
    render(
      <VideoList
        totalResults={youtubeList.pageInfo.totalResults}
        isNextPageLoading={false}
        videos={youtubeList.items}
        searchHandler={() => {}}
      />
    );
    const items = screen.getAllByLabelText("Video Title");
    const firstItem = items[0];
    expect(firstItem).toHaveTextContent("Redux Flow - What is Redux and How it work? | React JS Tutorial #14")
  });

  test("Check nth item in the list", async () => {
    render(
      <VideoList
        totalResults={youtubeList.pageInfo.totalResults}
        isNextPageLoading={false}
        videos={youtubeList.items}
        searchHandler={() => {}}
      />
    );
    const items = screen.getAllByLabelText("Video Title");
    const firstItem = items[17];
    expect(firstItem).toHaveTextContent("React Testing Tutorial (Jest + React Testing Library)")
  });
});
