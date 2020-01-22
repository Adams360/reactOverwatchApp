import React from 'react';
import heroesData from './data';
import Hero from './components/Hero.component';
import "./app.scss";

class App extends React.Component {

    state = {
        heroes: heroesData
    }



    render() {
        return (
            <div>
                <button>Rearange</button>
              <div className="heroes">
                {
                heroesData.map((hero) => {
                    return <Hero name={hero.name}
                                img={require(`${hero.imgUrl}`)}
                           />})
                }
              </div>
            </div>
         
        )
    }
  
}

export default App;