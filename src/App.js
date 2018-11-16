import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        {name: "Eugene", age: 26},
        {name: "Manu", age: 28},
        {name: "Alex", age: 23}
    ],
      otherState: 'some other value',
      showPersons: false
  }

switchNameHandler = (newName) => {
   // console.log('Was clicked!');
    //this.state.persons[0] = 'E.Kruglei';
    this.setState( {
        persons: [
            {name: newName, age: 26},
            {name: "Manu", age: 28},
            {name: "Alex", age: 24}
        ]
    } )
}
nameChangedHandler = (event) => {
        this.setState( {
            persons: [
                { name: 'Eugene', age: 26 },
                { name: event.target.value, age: 28 },
                { name: 'Alex', age: 23 }
            ]
        } )
    }
togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
}

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '3px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

    return (
      <div className="App">
          <h1>React Guide</h1>
          <h1>Hi, it's React App!!!</h1>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Switch Name</button>
        {
            this.state.showPersons === true ?
        <div>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
          <Person
              name={this.state.persons[1].name}
              age ={this.state.persons[1].age}
              go={this.switchNameHandler.bind(this, 'Eugene!')}
              changed={this.nameChangedHandler} >My Hobbies: Diving</Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
        </div> : null;
        }
      </div>
    );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, it\'s React App!!!' ));
  }
}

export default App;

