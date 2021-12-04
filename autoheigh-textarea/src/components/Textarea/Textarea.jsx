import React, { useEffect, useRef, useState } from 'react'
import './Textarea.scss'

const getCurrentHeight = (event, defaultHeight) => {
  event.current.style.height = `${ defaultHeight }px`
  event.current.style.height = `${ event.current.scrollHeight }px`
}

const Textarea = ({textareaId, textareaClassName, textareaName, placeholderText}) => {
  const currentHeightTextareaRef = useRef(null)
  const [currentValue, setCurrentValue] = useState('')

  useEffect(() => {
    getCurrentHeight(currentHeightTextareaRef, '80')
  }, [currentValue])

  return (
    <textarea
      id={ textareaId }
      className={ textareaClassName }
      ref={ currentHeightTextareaRef }
      name={ textareaName }
      value={ currentValue }
      placeholder={ placeholderText }
      onChange={ e => {
        setCurrentValue(e.target.value)
      } }
    />
  );
};

export default Textarea
