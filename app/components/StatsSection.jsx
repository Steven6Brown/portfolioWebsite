'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 3.83, decimals: 2, suffix: '', label: 'Major GPA', sub: 'Penn State' },
  { value: 150, decimals: 0, suffix: '+', label: 'Documents Trained', sub: 'in CloakAI' },
  { value: 9, decimals: 0, suffix: '+', label: 'Projects', sub: 'Completed' },
  { value: 4, decimals: 0, suffix: 'x', label: "Dean's List", sub: 'Honors' },
];

const StatCard = ({ value, decimals, suffix, label, sub, animate }) => {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!animate) return;
    const duration = 2000;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay((value * ease).toFixed(decimals) + suffix);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [animate]);

  return (
    <div className="relative bg-[#0e1525] border border-[#1a2535] rounded-2xl p-7 text-center overflow-hidden group
      hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-p-green to-s-blue" />
      <div className="text-4xl font-bold bg-gradient-to-r from-p-green to-s-blue bg-clip-text text-transparent mb-2">
        {display}
      </div>
      <div className="text-white font-semibold text-sm">{label}</div>
      <div className="text-gray-500 text-xs mt-1">{sub}</div>
    </div>
  );
};

export const StatsSection = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="container mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} animate={animate} />
        ))}
      </div>
    </div>
  );
};