import React from 'react';
import { remove as removeDiacritics } from 'diacritics';
import { ResultDisplay } from './ResultDisplay';
import { Input } from './Input';

const ALPHABET = [
  'Alfa',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliett',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'X-ray',
  'Yankee',
  'Zulu ',
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];

const REFERENCE = 'abcdefghijklmnopqrstuvwxyz0123456789';

class App extends React.Component {
  state = {
    input: '',
    phoneticStrings: [],
  };

  getPhoneticWord(char) {
    let index = REFERENCE.indexOf(removeDiacritics(char));
    let value = char;
    if (index > -1) {
      value = ALPHABET[index];
    }
    if (char === ' ') {
      value = '(space)';
    }
    return value;
  }

  getPhoneticArrayFromString(str) {
    return str
      .toLowerCase()
      .split('')
      .map((char) => {
        return this.getPhoneticWord(char);
      });
  }

  // https://gist.github.com/nmsdvid/8807205#gistcomment-2595895
  debounce =
    (callback, time = 250, interval) =>
    (...args) =>
      clearTimeout(interval, (interval = setTimeout(callback, time, ...args)));

  pushGaEvent = this.debounce(() => {
    window.gtag && window.gtag('event', 'type');
  }, 500);

  handleChange = (event) => {
    const phoneticStrings = this.getPhoneticArrayFromString(event.target.value);

    this.pushGaEvent();

    this.setState({
      input: event.target.value,
      phoneticStrings,
    });
  };

  reset = () => this.setState({ input: [], phoneticStrings: [] });

  render() {
    return (
      <div className='App'>
        <main className='Main'>
          <Input
            onReset={this.reset}
            onChange={this.handleChange}
            value={this.state.input}
          />
          <div className='Result'>
            <ResultDisplay phoneticStrings={this.state.phoneticStrings} />
          </div>
        </main>
        <footer className='Footer'>
          This is a tool I built to have a visual reference that would{' '}
          <strong>work offline</strong> and would be faster than using a cheat
          sheet.
          <br />
          <a href='https://github.com/bleuarg/phonetic-alphabet.com'>
            Code and bugs on Github.
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
