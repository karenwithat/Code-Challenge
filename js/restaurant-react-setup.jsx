/*Axios experimentation*/
var BuildRestaurantList = React.createClass({
	getInitialState: function() {
	    return {
	      restaurants:[];
	    }
	  },

	  componentDidMount: function() {
	    var th = this;
	    this.serverRequest =
	      axios.get(this.props.source)
	        .then(function(result) {
	          th.setState({
	            restaurants: result.data.restaurants
	          });
	        })
	  },

	  componentWillUnmount: function() {
	    this.serverRequest.abort();
	  },

		render: function(){
			return (
				this.state.restaurants.map(
						function(restaurant){
							return(
								<div className="restaurant-panel">
									<h2 className="restaurant-panel_name">Test {restaurant.name}</h2>
									<h3 className="restaurant-panel_category">{restaurant.category}</h3>
								</div>
							)
						}
					)
				)
			}
		}
)


function ApplicationHeader(props){
  return(
    <div className="header">
      <span className="button-direction"></span>
      <h1 className="restaurant-name-header">{this.props.restaurantName}</h1>
      <span className="icon-map"></span>
    </div>
  )
}

function RestaurantList(props) {
	return(
      <div className="restaurant-panel">
        <h2 className="restaurant-panel_name">Test {props.restaurantName}</h2>
        <h3 className="restaurant-panel_category">{props.restaurantCategory}</h3>
      </div>
  );
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

function ApplicationFooter(props){
  return(
    <div className="footer">
      <span className="icon-meal_available"></span>
      <span className="icon-internet"></span>
    </div>
  )
}

ReactDOM.render(
		<BuildRestaurantList
		source="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json"/>,
		document.getElementById('appContainer')
);
