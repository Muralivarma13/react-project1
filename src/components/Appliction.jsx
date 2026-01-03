import React from "react";
import axios from "axios";
import Customcard from "./customCard";
import CustomCarousel from "./customCoursel";
import Customnavbar from "./customNavbar";
import { CustomSpinner } from "./customSpinner";
import FruitsList from "./Fruits";

class Application extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      count: 0,
      loading: true
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  //  Axios API Call

  
  fetchRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      console.log(response.data.recipes);

      this.setState({
        products: response.data.recipes,
        loading: false
      });
    } catch (error) {
      console.error("API Error:", error);
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.fetchRecipes();
  }

  render() {
    return (
      <div>
        <Customnavbar />
        <CustomCarousel />

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button onClick={this.increment}>Increment</button>
          <p>Count: {this.state.count}</p>
          <button onClick={this.decrement}>Decrement</button>
        </div>

        {this.state.loading ? (
          <CustomSpinner />
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {this.state.products.map(each => (
              <div
                key={each.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px"
                }}
              >
                <img
                  src={each.image}
                  alt={each.name}
                  style={{ width: "200px" }}
                />
                <h6>{each.name}</h6>
              </div>
            ))}
          </div>
        )}

        <Customcard />
        <FruitsList />
      </div>
    );
  }
}

export default Application;
