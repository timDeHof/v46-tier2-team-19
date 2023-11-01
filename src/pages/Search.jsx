import YumiWithSpoon from "@/assets/brand/yumi-with-spoon/YumiWithSpoon.jsx";
import BellPeppers from "@/assets/brand/bell-peppers/BellPeppers";
import SvgComponent from "@/assets/HomePage/svgWave";
import { RecipeList, FeatureOfTheDay } from "@/features/recipes";
import { Heading, SearchBox } from "@/features/ui";
import debounce from "lodash/debounce";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useSearchParams();
  const searchTerm = search.get("q") || "";
  const debouncedSetSearchParams = debounce(setSearch, 300);
  const handleSearch = (newSearchTerm) => {
    debouncedSetSearchParams({ q: newSearchTerm });
  };

  const handleDragStart = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    <div className="flex flex-col items-center flex-shrink-0 w-full">
      <FeatureOfTheDay />
      <SvgComponent className="fill-sky-300" />
      <div className="flex flex-col flex-shrink-0 w-full px-10 pt-10 lg:relative bg-gradient-Search">
        <Heading
          level="h2"
          variant="watermelon"
          className="font-bold text-center lg:absolute lg:inset-x-5"
        >
          YumYum Time!!
        </Heading>
        <div className="flex flex-wrap items-center justify-center mx-auto my-10 gap-x-2 lg:justify-between">
          <div className="flex items-center justify-center w-1/3 lg:w-1/4 lg:justify-start">
            <BellPeppers resolution="360" alt="bell-peppers" />
          </div>
          <div className="flex flex-col items-center justify-center order-last lg:order-1 lg:justify-between">
            <p className="max-w-xs text-2xl font-bold tracking-tight text-center break-words font-kalam lava-text-gradient">
              Add Ingredients Here and We Will Do Our Magic!
            </p>
            <div className="w-full max-w-xs mx-auto my-4">
              <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
            </div>
          </div>
          <div className="flex items-center justify-center w-1/3 lg:w-1/4 hero-yumi lg:order-last lg:justify-start">
            <YumiWithSpoon
              resolution="480"
              alt="Yumi Character"
              onDragStart={handleDragStart}
            />
          </div>
        </div>

        <div className="">
          <RecipeList searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default Search;
