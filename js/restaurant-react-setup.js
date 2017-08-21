
axios
  .get("http://codepen.io/jobs.json")
  .then(function(result) {
    // we got it!
  });

function ApplicationHeader(props){
  return(
    <div className="header">
      <span className="button-direction"></span>
      <h1 className="restaurant-name-header">{props.restaurantName}</h1>
      <span className="icon-map"></span>
    </div>
  )
}

function RestaurantList(props){
	return(
      <h2 className="restaurant-panel_name">{props.restaurantName}</h2>
      <h3 className="restaurant-panel_category">{props.restaurantCategory}</h3>

)
}

function RestaurantDetails(props){
  return(
    <div class="restaurant-container">
      <div className="restaurant-info">
        <h2 className="restaurant-name">{props.restaurantName}</h2>
        <h3 className="restaurant-category">{props.restaurantCategory}</h3>
      </div>
      <div class="restaurant-details">
          <span class="restaurant-address-formatted">{props.restaurantAddressFormatted}</span>
          <span class="restaurant-phone_number">{props.phoneNumber}</span>
          <span class="restaurant-social_twitter">{props.twitter}</span>
        </div>
      </div>
  )
}

function ApplicationFooter(){
  return(
    <div className="footer">
      <span className="icon-meal_available"></span>
      <span className="icon-internet"></span>
    </div>
  )
}

function RestaurantMap(){
  return(
    div
  )

}
/* I think the bottom code was from following a tutorial. Will come back to it.*/
React.render(<RestaurantList source="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json"/>, document.getElementByID('appContainer'));
