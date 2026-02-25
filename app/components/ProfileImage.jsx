'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export const ProfileImage = () => {
    const blobRef = useRef(null);
    const ringRef = useRef(null);
    const ring2Ref = useRef(null);

    useEffect(() => {
        const blobShapes = [
            '60% 40% 70% 30% / 50% 60% 40% 55%',
            '40% 60% 50% 50% / 60% 40% 60% 40%',
            '30% 70% 40% 60% / 60% 40% 70% 30%',
            '50% 50% 30% 70% / 40% 70% 50% 60%',
            '60% 40% 70% 30% / 50% 60% 40% 55%',
        ];

        let step = 0;
        const morphBlob = () => {
            if (blobRef.current) {
                blobRef.current.style.borderRadius = blobShapes[step % blobShapes.length];
                step++;
            }
        };
        const blobInterval = setInterval(morphBlob, 1800);

        let angle1 = 0;
        let angle2 = 0;
        const rotateRings = () => {
            angle1 += 0.3;
            angle2 -= 0.18;
            if (ringRef.current)  ringRef.current.style.transform = `rotate(${angle1}deg)`;
            if (ring2Ref.current) ring2Ref.current.style.transform = `rotate(${angle2}deg)`;
        };
        const ringInterval = setInterval(rotateRings, 16);

        return () => {
            clearInterval(blobInterval);
            clearInterval(ringInterval);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center" style={{ width: 520, height: 520 }}>

            {/* Outer glow pulse */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)',
                    animation: 'glowPulse 3s ease-in-out infinite',
                }}
            />

            {/* Rotating ring 1 */}
            <svg
                ref={ringRef}
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 520 520"
                style={{ transformOrigin: 'center' }}
            >
                <defs>
                    <linearGradient id="ring-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"   stopColor="#00ff88" stopOpacity="1" />
                        <stop offset="50%"  stopColor="#00d4ff" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d="M260 22 C325 12 420 68 456 142 C492 216 484 316 440 382 C396 448 320 490 242 486 C164 482 90 436 52 366 C14 296 18 198 60 130 C102 62 195 32 260 22 Z"
                    fill="none"
                    stroke="url(#ring-grad-1)"
                    strokeWidth="3"
                    strokeDasharray="12 6"
                    strokeLinecap="round"
                />
            </svg>

            {/* Rotating ring 2 */}
            <svg
                ref={ring2Ref}
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 520 520"
                style={{ transformOrigin: 'center', opacity: 0.45 }}
            >
                <defs>
                    <linearGradient id="ring-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%"   stopColor="#00d4ff" stopOpacity="1" />
                        <stop offset="100%" stopColor="#0055ff" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d="M260 35 C322 27 406 77 436 146 C466 216 460 308 420 370 C380 432 312 468 242 465 C172 462 104 422 70 356 C36 290 38 204 76 140 C114 76 198 43 260 35 Z"
                    fill="none"
                    stroke="url(#ring-grad-2)"
                    strokeWidth="2"
                    strokeDasharray="6 10"
                    strokeLinecap="round"
                />
            </svg>

            {/* Blob image */}
            <div
                ref={blobRef}
                className="relative overflow-hidden shadow-2xl"
                style={{
                    width: 440,
                    height: 440,
                    borderRadius: '60% 40% 70% 30% / 50% 60% 40% 55%',
                    transition: 'border-radius 1.8s ease-in-out',
                    boxShadow: '0 0 40px rgba(0, 255, 136, 0.15), 0 0 80px rgba(0, 212, 255, 0.08)',
                }}
            >
                <Image
                    src="/images/about/about-image6.png"
                    fill
                    style={{ objectFit: 'cover', objectPosition: '60% 15%' }}
                    alt="Steven Brown"
                    priority
                />
            </div>

            <style>{`
                @keyframes glowPulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50%       { opacity: 1;   transform: scale(1.06); }
                }
            `}</style>
        </div>
    );
};