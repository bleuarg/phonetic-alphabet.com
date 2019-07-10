import React, { Fragment } from 'react';
import { remove as removeDiacritics } from 'diacritics';
import './App.css';

const ALPHABET = [
  'Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot',
  'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima',
  'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo',
  'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray',
  'Yankee', 'Zulu ', 'Zero', 'One', 'Two', 'Three',
  'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
];
const REFERENCE = 'abcdefghijklmnopqrstuvwxyz0123456789'

class App extends React.Component {
  state = {
    input: '',
    natoStrings: []
  };
  inputRef;

  getNatoWord(char) {
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
        return this.getNatoWord(char)
      });
  }

  handleChange = event => {
    const natoStrings = this.getNatoArrayFromString(event.target.value);

    this.setState({
      input: event.target.value,
      natoStrings
    });
  };

  componentDidUpdate(prevProps, prevState) {
    this.inputRef.focus();
  }

  componentDidMount(prevProps, prevState) {
    this.inputRef.focus();
  }

  renderContent() {
    if (this.state.natoStrings.length > 0) {
      return this.state.natoStrings.map((str, index) => <span key={str + index} className='Word'> {str}</span>)
    } else {
      return <div>Start typing to see the letters spelled out using the <a href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">NATO phonetic alphabet</a>.</div>
    }
  }

  render() {
    return (
      <div className='App'>
        <main class="Main">
          <input
            className='Input'
            placeholder='Start typing...'
            type='text'
            ref={component => (this.inputRef = component)}
            value={this.state.input}
            onChange={this.handleChange}
          />
          <div className='NatoStrings'>
            {this.renderContent()}
          </div>
        </main>
        <footer className="Footer">
          This is a tool I built to have a visual reference that would <strong>work offline</strong> and would be faster than using a cheat sheet.<br/>
          It works 100% offline. Just bookmark the page or add it to your homepage.<br/>
          Built by Patrick Davies, <a href="">code and bugs on Github.</a>
        </footer>
      </div>
    );
  }
}

export default App;
