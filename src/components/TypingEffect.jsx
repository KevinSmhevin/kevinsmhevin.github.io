import { useState, useEffect } from 'react'
import './TypingEffect.css'

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className="typing-text">
      {displayedText}
      <span className="typing-cursor">|</span>
    </span>
  )
}

export default TypingEffect
