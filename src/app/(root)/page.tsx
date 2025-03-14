import FoodSearch from "../components/foodSearch";

export default function Root() {
    return (
        <div className="flex flex-col bg-black text-white w-full">
            <div>
                Coming Soon! Generate your own Recipes using whatever ingredients you have! Perfect for clearing out your fridge or getting a quick recipe after a long day of work!
            </div>
            <div>
                Made by <a className="font-bold underline" href="https://www.linkedin.com/in/aaron-lee-5758b2229/">Aaron</a>!
            </div>
            <FoodSearch />
        </div>
    );
}