function RestaurantList(props) {
	return(
      <div className="restaurant-panel">
        <h2 className="restaurant-panel_name">Test {props.restaurantName}</h2>
        <h3 className="restaurant-panel_category">{props.restaurantCategory}</h3>
      </div>
  );
}
ReactDOM.render(<RestaurantList />, document.getElementByID('appContainer');
  );
