import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import objList from "../utils/objList";

const Body = () => {
  const [resCardFilter, setResCardFilter] = useState(objList);
  console.log(resCardFilter);
  return (
    <div className="body">
      <div className="RC-Filter">
        <ul>
          <li
            className="RCF-li"
            onClick={() => {
              const objFilter = resCardFilter.filter(
                (res) => res.info.avgRating > 4
              );
              console.log(objFilter);
              setResCardFilter(objFilter);
            }}
          >
            Filter
          </li>
        </ul>
      </div>

      <div className="res-container">
        {resCardFilter.map((mapResArgument) => (
          <RestaurantCard
            key={mapResArgument?.info?.id}
            resData={mapResArgument}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
