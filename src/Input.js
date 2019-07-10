import React from 'react';

class Input extends React.Component {
  inputRef;
  focus() {
    this.inputRef.focus();
  }

  componentDidUpdate = this.focus;
  componentDidMount = this.focus;

  render() {
    return (
      <div className='Input'>
        <input
          type='text'
          className='Input-element'
          aria-label='Text to be spelled out'
          placeholder='Start typing here.'
          ref={element => (this.inputRef = element)}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <button
          title='Clear entry'
          onClick={this.props.onReset}
          className='Input-clear'
        >
          <svg className="Input-clearIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="100%" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </button>
      </div>
    );
  }
}

export { Input };
