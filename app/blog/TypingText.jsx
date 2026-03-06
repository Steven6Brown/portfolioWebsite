'use client';
import { useEffect, useState } from "react";

const words = [
  'Cybersecurity',
  'AI & Machine Learning',
  'Threat Intelligence',
  'Tool Reviews',
  'Incident Response',
  'Privacy & Surveillance',
];

export default function TypingText() {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;

    if (!deleting) {
      if (charIndex < word.length) {
        timeout = setTimeout(() => setCharIndex(i => i + 1), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1400);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(i => i - 1), 50);
      } else {
        setDeleting(false);
        setWordIndex(i => (i + 1) % words.length);
      }
    }

    setDisplay(word.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <div className="flex justify-center items-center gap-2 mt-4 min-h-[28px]">
      <span className="text-bt-grey text-base">Topics include:</span>
      <span className="text-p-green text-base font-semibold border-r-2 border-p-green pr-1">
        {display}
      </span>
    </div>
  );
}