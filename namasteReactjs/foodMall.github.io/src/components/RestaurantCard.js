import { URL_CDN_LOGO } from "../utils/url";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

  // console.log(resData[0]);
  //console.log(aggregatedDiscountInfoV3);
  return (
    <div className="res-card">
      <div>
        <img
          className="res-logo"
          src={URL_CDN_LOGO + cloudinaryImageId}
          alt="restaurant-logo"
        />
      </div>

      <h3 className="res-detail">{name}</h3>
      <h4 className="res-detail">{cuisines.join(", ")}</h4>
      <h5 className="res-detail">{"Rating " + avgRating + " ✨"}</h5>
    </div>
  );
};

export const withPromotedResCard = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;

    return (
      <div className="Promoted-Res-Card">
        <label className="Promoted-Res-Label">
          {aggregatedDiscountInfoV3?.header +
            " " +
            aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
