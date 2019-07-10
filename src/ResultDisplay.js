import React, {Fragment} from 'react';

export function ResultDisplay(props) {
    if (props.phoneticStrings.length > 0) {
      return props.phoneticStrings.map((str, index) => <span key={str + index} className='Word'>{' '}{str}</span>)
    } else {
      return <Fragment>Start typing to see the letters spelled out using the <a href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">NATO phonetic alphabet</a>.</Fragment>
    }
}