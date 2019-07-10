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
          ×
        </button>
      </div>
    );
  }
}

export {Input};