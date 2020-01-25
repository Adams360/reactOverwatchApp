import React from 'react';
import heroesData from './data';
import Hero from './components/Hero.component';
import "./app.scss";

class App extends React.Component {

    state = {
        heroRole: ""
    }   

    buttonPressHandler = (role) => {
           console.log(role);
           this.setState({heroRole: role})
     };

    
    render() {
        return (
            <div>
                <button onClick={() => {this.buttonPressHandler('')}}>All Heroes</button>
                <button onClick={() => {this.buttonPressHandler('tank')}}>Tank Heroes</button>
                <button onClick={() => {this.buttonPressHandler('support')}}>Support Heroes</button>

            <div className="heroes">
                { 
               heroesData.filter(hero => hero.role.includes(this.state.heroRole))
               .map((hero) => {
                return (
                    <Hero
                     key={hero.id}
                     role={hero.role}
                     name={hero.name} 
                     img={require(`${hero.imgUrl}`)} 
                    />
                );
        })
                }
            </div>
        </div>
  
        )
    }
}

export default App;