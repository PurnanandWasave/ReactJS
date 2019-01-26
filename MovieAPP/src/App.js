import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log("This is my initializer!")
    const movies =[
      {id:0,poster_src:"https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",title:"Infinity: infinity War",overview:"ron Man, Thor, the Hulk -- the evil Thanos. On a mission  all six Infinity Stones"},
      {id:1,poster_src:"https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",title:"Avengers",overview:"This is my second overview"},
    ]
    
        var movieRows = []
        movies.forEach((movie) => {
          console.log(movie.title)
          const movieRow = <table key={movie.id}>
            <tbody>
              <tr>
                <td>
                  <img alt="poster" src={movie.poster_src}/>

                </td>
                <td>
                  {movie.title}
                </td>
              </tr>
            </tbody>
            </table>
          movieRows.push(movieRow)
        })
      this.state = {rows: movieRows}
    }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                 pw
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search </h1>
              </td>

              
            </tr>


          </tbody>
        </table>
        <input style={{
          fontSize:24,
          display:'block',
          width:"99%",
          paddingTop:8,
          paddingBottom:8,
          paddingLeft:16
        }} placeholder="Enter Search Term"/>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
