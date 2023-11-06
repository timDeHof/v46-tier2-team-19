import { Heading, Button, Icon } from "@/features/ui";
import { Link } from "react-router-dom";
import { YumiReading } from "@/assets";
export const HeroSectionPageNotFound = () => {
  const clearSessision = () => {
    sessionStorage.removeItem("recipes");
  };

  return (
    <div className="bg-gradient-lava-diagonal flex flex-col md:flex-row md:items-center md:justify-center pt-8 px-8  md:pt-14 md:px-14   md:grid md:grid-rows-[132px,132px,132px]  md:grid-cols-[1fr,355px] lg:grid-rows-[192px,220px,220px] lg:grid-cols-[1fr,564px]  2xl:grid-cols-[1fr,795px] ">
      <Heading
        level="h3"
        variant="tangerine"
        className=" text-2xl  mb-4 md:mb-0 col-span-2  md:w-[480px]  lg:self-end  2xl:col-span-1 2xl:w-full   "
      >
        {
          "Oops! It looks like the recipe you're hunting for has slipped out of the pot."
        }
      </Heading>

      <p className="text-white  text-lg     md:col-start-1 md:row-start-2 lg:col-span-1   lg:text-2xl  ">
        It seems our magical ingredients are playing hide and seek. While we
        summon our most skilled chefs to find this lost recipe, why not explore
        other culinary delights in our virtual kitchen?
      </p>

      <Link
        onClick={() => clearSessision()}
        to="/search"
        className="col-start-1 col-end-2 row-star-3 row-end-4 flex justify-center md:justify-start lg:self-start  "
      >
        <Button className=" text-xl w-full min-[375px]:w-64 justify-center my-4 ">
          Back to recipes
          <Icon name="right-arrow" />
        </Button>
      </Link>

      <div className="flex justify-center items-end md:row-start-2  md:col-start-2   md:self-start   lg:row-span-1 ">
        <img
          src={YumiReading}
          alt="Yumi Reading"
          className="w-72 md:w-[355px] lg:w-[558px] xl:w-[795px] "
        />
      </div>
    </div>
  );
};
