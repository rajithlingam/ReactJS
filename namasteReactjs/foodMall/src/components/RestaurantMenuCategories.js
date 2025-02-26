import MenuItemList from "./MenuItemList";

const RestaurantMenuCategories = ({
  data,
  parentControledAccordion,
  parentControledAccordionUpdate,
}) => {
  const toggleAccordion = () => {
    parentControledAccordionUpdate();
  };

  const itemData =
    data?.itemCards ||
    (data?.categories).flatMap((category) => category?.itemCards);

  return (
    <div className="RestaurantMenu-Categories">
      <div className="RMC-TITLE-CONTAINER" onClick={toggleAccordion}>
        <span className="RMC-title">
          {data.title} ({itemData.length})
        </span>
        <span>{parentControledAccordion ? "▲" : "▼"}</span>
      </div>
      {parentControledAccordion && <MenuItemList items={itemData} />}
    </div>
  ); 
};

export default RestaurantMenuCategories;
