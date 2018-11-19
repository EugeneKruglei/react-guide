import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        {id: 'asfa1', name: "Eugene", age: 26},
        {id: 'vasdf1', name: "Manu", age: 28},
        {id: 'asdf11', name: "Alex", age: 23}
    ],
      otherState: 'some other value',
      showPersons: false
  }
  nameChangedHandler = ( event, id ) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });
      const person = {
          ...this.state.persons[personIndex]
  };
      // const person = Object.assign({}, this.state.persons[personIndex]);
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons: persons} );
  }

deletePersonHandler = (personIndex) => {
   // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
}


togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
}

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '3px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.nameChangedHandler(event, person.id)}
                      />
                  })}
              </div>
               /*   <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age} />
                  <Person
                      name={this.state.persons[1].name}
                      age ={this.state.persons[1].age}
                      go={this.switchNameHandler.bind(this, 'E.Kruglei!')}
                      changed={this.nameChangedHandler} >My Hobbies: Diving</Person>
                  <Person
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age} />
                      */
          );
      }

    return (
      <div className="App">
          <h1>React Guide</h1>
          <h1>Hi, it's React App!!!</h1>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, it\'s React App!!!' ));
  }
}

export default App;

