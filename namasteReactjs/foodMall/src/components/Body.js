import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resCardFilter, setResCardFilter] = useState([]);
  console.log(resCardFilter);

  const fetchObjList = async ()=> {
    const API_objLink = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await API_objLink.json();
    setResCardFilter(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect( ()=> {fetchObjList();}, [] );

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
