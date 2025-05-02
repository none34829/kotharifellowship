import React, { useEffect, useState } from 'react';

interface TypedTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  text,
  typingSpeed = 30,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Handle the typing animation
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current => current + text.charAt(index));
        setIndex(index + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
    // No else condition - we don't hide the cursor anymore
  }, [index, text, typingSpeed]);

  // Blinking cursor effect
  useEffect(() => {
    // Always keep blinking, regardless of typing status
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          backgroundColor: 'currentColor',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          opacity: showCursor ? 1 : 0,
          animation: 'blink 1s step-end infinite'
        }}
      />
    </span>
  );
};

export default TypedText;
