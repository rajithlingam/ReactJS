import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resCardFilter, setResCardFilter] = useState([]);
  const [Search, setSearch] = useState("");
  const [FilteredSearch, setFilteredSearch] = useState([]);
  console.log(resCardFilter);
  console.log("resCardFilter");

  const fetchObjList = async () => {
    const API_objLink = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonCardData = await API_objLink.json();
    setResCardFilter(
      jsonCardData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredSearch(
      jsonCardData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchObjList();
  }, []);

  return resCardFilter == 0 ? (
    <div className="res-container">
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="RC-Filter">
        <ul>
          <li className="RCF-li">
            <input
              className="Search"
              type="search"
              name="search"
              placeholder="Search Here..."
              value={Search}
              onChange={
                (onkeyup = (e) => {
                  setSearch(e.target.value);
                  const searchCard = resCardFilter.filter((searchFilter) =>
                    searchFilter.info.name
                      .toUpperCase()
                      .includes(Search.toUpperCase())
                  );
                  console.log("searchcard");
                  console.log(searchCard);

                  setFilteredSearch(searchCard);
                })
              }
            />
          </li>
          <li
            className="RCF-li"
            onClick={() => {
              const objFilter = FilteredSearch.filter(
                (res) => res.info.avgRating > 4
              );
              console.log(objFilter);
              setFilteredSearch(objFilter);
            }}
          >
            Filter
          </li>
        </ul>
      </div>

      <div className="res-container">
        {FilteredSearch.map((mapResArgument) => (
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
