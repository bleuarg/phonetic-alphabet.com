import React from 'react';
import { remove as removeDiacritics } from 'diacritics';
import { ResultDisplay } from './ResultDisplay';
import './App.css';

const ALPHABET = [
  'Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot',
  'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima',
  'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo',
  'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray',
  'Yankee', 'Zulu ', 'Zero', 'One', 'Two', 'Three',
  'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
];

const REFERENCE = 'abcdefghijklmnopqrstuvwxyz0123456789';

class App extends React.Component {
  state = {
    input: '',
    phoneticStrings: []
  };
  inputRef;

  getPhoneticWord(char) {
    let index = REFERENCE.indexOf(removeDiacritics(char));
    let value = char;
    if (index > -1) {
      value = ALPHABET[index];
    }
    if (char === ' ') {
      value = '(space)'
    }
    return value;
  }
  
  getNatoArrayFromString(str) {
    return str
      .toLowerCase()
      .split('')
      .map(char => {
        return this.getPhoneticWord(char)
      });
  }

  handleChange = event => {
    const phoneticStrings = this.getNatoArrayFromString(event.target.value);

    this.setState({
      input: event.target.value,
      phoneticStrings
    });
  };

  reset = () => this.setState({input: [], phoneticStrings: []})

  focus() {
    this.inputRef.focus();
  }

  componentDidUpdate = this.focus;
  componentDidMount = this.focus;

  render() {
    return (
      <div className='App'>
        <main className="Main">
          <div className="Input">
            <input
              type='text'
              className='Input-element'
              aria-label='Text to be spelled out'
              placeholder='Start typing here.'
              ref={element => (this.inputRef = element)}
              value={this.state.input}
              onChange={this.handleChange}
            />
            <button title="Clear entry" onClick={this.reset} className="Input-clear">×</button>
          </div>
          
          <div className='Result'>
            <ResultDisplay phoneticStrings={this.state.phoneticStrings} />
          </div>
        </main>
        <footer className="Footer">
          This is a tool I built to have a visual reference that would <strong>work offline</strong> and would be faster than using a cheat sheet.<br/>
          It works 100% offline. Just bookmark the page or add it to your phone's home screen.<br/>
          Built by Patrick Davies, <a href="https://github.com/bleuarg/phonetic-alphabet.com">code and bugs on Github.</a>
        </footer>
      </div>
    );
  }
}

export default App;
