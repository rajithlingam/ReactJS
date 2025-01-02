import { URL_CDN_LOGO } from "../utils/url";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  // console.log(resData[0]);
  return (
    <div className="res-card">
      <div>
        <img
          className="res-logo"
          src={
            URL_CDN_LOGO +
            cloudinaryImageId
          }
          alt="restaurant-logo"
        />
      </div>

      <h3 className="res-detail">{name}</h3>
      <h4 className="res-detail">{cuisines.join(", ")}</h4>
      <h5 className="res-detail">{"Rating " + avgRating + "✨"}</h5>
    </div>
  );
};


export default RestaurantCard;