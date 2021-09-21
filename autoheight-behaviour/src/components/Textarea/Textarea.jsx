import React, { useEffect, useRef } from 'react'
import './Textarea.scss'

const getCurrentHeight = (event, defaultHeight) => {
  event.current.style.height = `${ defaultHeight }px`
  event.current.style.height = `${ event.current.scrollHeight }px`
}

const Textarea = ({textareaId, textareaClassName, textareaName, placeholderText, currentValue, setCurrentValue}) => {
  const currentHeightTextareaRef = useRef(null)

  useEffect(() => {
    getCurrentHeight(currentHeightTextareaRef, '80')
  }, [currentValue])

  const handleSetValue = (e) => {
    setCurrentValue(e.target.value);
  }

  return (
    <textarea
      id={ textareaId }
      className={ textareaClassName }
      ref={ currentHeightTextareaRef }
      name={ textareaName }
      value={ currentValue }
      placeholder={ placeholderText }
      onChange={ e => handleSetValue(e) }
    />
  );
};

export default Textarea
