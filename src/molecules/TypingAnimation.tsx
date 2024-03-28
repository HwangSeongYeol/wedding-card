import { useState, useEffect } from 'react';

const TypingAnimation = ({ text, onComplete }: { text: string, onComplete: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeedMs = 150; // 한 글자가 타이핑되는 속도 (밀리초)

  useEffect(() => {
    if (displayedText.length < text.length) {
      setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, typingSpeedMs);
    } else {
      setTimeout(onComplete, 1000); // 타이핑이 끝난 후 1초 후에 onComplete 콜백 실행
    }
  }, [displayedText, text, onComplete]);

  return <div>{displayedText}</div>;
}

export default TypingAnimation