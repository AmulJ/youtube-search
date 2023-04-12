import { useState } from "react";
import "./Searchbar.css";

const Searchbar = (props) => {
  const [searchText, setSearchtext] = useState("");

  const onChangeHandler = (text) => {
    setSearchtext((_prevText) => text);
  };

  // Handle enter key to set state and loose focus from input field
  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      search(event?.target?.value,event?.target)
    }
  };

  const handleSearchClick = () => {
    search(searchText);
  };

  // When we search, call searchChangeHandler and loose focus from input field
  // Check if this is function is called from input field or click of search button
  const search = (text, element) => {
    if(!element) {
        const input = document.querySelector("#search-input");
        input?.blur();
    }
    else {
        element?.blur()
    }
    props.searchChangeHandler(text);
  };

  const homeClicked = () => {
    setSearchtext("");
    search("");
  };

  return (
    <div className="search-bar">
      <span className="search-bar-home" onClick={homeClicked}>
        YouTube
      </span>
      <input
        data-testid="search-input"
        onKeyDown={(event) => handleSubmit(event)}
        aria-label="youtube-search"
        type="text"
        value={searchText}
        onChange={(e) => onChangeHandler(e.currentTarget.value)}
        placeholder="Search"
      />
      <button aria-label="youtube-search-button" onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;
