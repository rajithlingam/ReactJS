import RestaurantCard from "./RestaurantCard";
import objList from "../utils/objList";


const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {objList.map((resArgument) => (
          <RestaurantCard key={resArgument?.info?.id} resData={resArgument} />
        ))}
      </div>
    </div>
  );
};

export default Body;