import { useState, useEffect } from "react";
import {API_URL_RESCARD}from "../utils/url"
import RestaurantCard, { withPromotedResCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router"

const Body = () => {
  const [resCardFilter, setResCardFilter] = useState([]);
  const [Search, setSearch] = useState("");
  const [FilteredSearch, setFilteredSearch] = useState([]);

  const PromotedResCard = withPromotedResCard(RestaurantCard);

  console.log(resCardFilter);
  console.log("resCardFilter");

  const fetchObjList = async () => {
    const API_objLink = await fetch(API_URL_RESCARD); 

    const jsonCardData = await API_objLink.json();
    console.log("jsonCardData");
    console.log(jsonCardData);
    setResCardFilter(
      jsonCardData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredSearch(
      jsonCardData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
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
          <Link className="Rescard-Link"
            key={mapResArgument?.info?.id}
            to={"/RestaurantMenu/" + mapResArgument?.info?.id}
          >
            {mapResArgument?.info.aggregatedDiscountInfoV3 ? (
              <PromotedResCard resData={mapResArgument} />
            ) : (
              <RestaurantCard resData={mapResArgument} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
