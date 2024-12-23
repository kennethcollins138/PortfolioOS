import { useTheme } from '@/contexts/theme-context';
import React, { useEffect, useState } from 'react';

interface TextLoadingProps {
  className?: string;
  delay?: number;
  messages: string[];
  onComplete?: () => void;
  style?: React.CSSProperties;
}

const TextLoading: React.FC<TextLoadingProps> = ({
                                                   className,
                                                   delay = 1000,
                                                   messages,
                                                   onComplete,
                                                   style,
                                                 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const theme = useTheme();

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length) {
        setDisplayedText((prev) => `${prev + messages[currentIndex]  }\n`);
        currentIndex++;
      } else {
        clearInterval(interval);
        if (onComplete) {onComplete();}
      }
    }, delay);

    return () => { clearInterval(interval); };
  }, [messages, delay, onComplete]);

  const combinedStyle: React.CSSProperties = {
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    ...style,
  };

  return (
    <div className={className} style={combinedStyle}>
      <pre>{displayedText}</pre>
    </div>
  );
};

export default TextLoading;
