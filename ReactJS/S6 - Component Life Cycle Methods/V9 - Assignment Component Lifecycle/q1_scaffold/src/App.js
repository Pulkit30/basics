import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],   // State to store fetched photos
      loading: true   // State to manage loading status
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((res)=>{
      return res.json()
    }).then((res)=>{
      this.setState({
        photos:res,
        loading:false
      })
    })
  }
  // Use the required lifecycle methods here
  // Make an API call to fetch images and update state accordingly
  // Ensure that loading is set to true before the API request and false after data is fetched

  render() {
    // Display loading status here
    // If loading is true, display the message "Loading..."
    if(this.state.loading){
      return (
      <p>Loading...</p>
      )
    }
    else{
    return (
      <div className="App">
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
  }
}
