import { useState, useEffect } from "react";
import { search } from "@/assets";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";
export const SearchBox = ({ onSearch }) => {
  const [localTerm, setLocalTerm] = useState("");
  const debouncedSearch = debounce(onSearch, 1500);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearch = () => {
    onSearch(localTerm);
    setLocalTerm("");
  };
  const handleInputChange = (e) => {
    setLocalTerm(e.target.value);
    debouncedSearch(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gradient-tangerine-diagonal p-[1px] rounded-full flex items-center max-w-xl">
      <form className="flex w-full" onSubmit={handleFormSubmit}>
        <input
          type="search"
          value={localTerm}
          onChange={handleInputChange}
          placeholder="Enter an Ingredient..."
          className="w-full p-2 pl-6 text-sm rounded-l-full lg:text-base bg-earlyDawn-100 focus:outline-none placeholder:text-lava-300 text-lava-950 focus:ring-none"
        />
        <button
          className="px-4 rounded-r-full bg-gradient-tangerine-diagonal hover:bg-tangerine-600"
          onClick={() => handleSearch()}
        >
          <img src={search} alt="search icon" />
        </button>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
