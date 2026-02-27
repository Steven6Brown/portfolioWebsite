"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 1 + 0.5,
      color: Math.random() > 0.5 ? '#00ff88' : '#00d4ff',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className='relative w-full overflow-hidden'>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0, width: '100vw', height: '100vh' }}
      />

      <div className='min-h-screen grid place-content-center relative' style={{ zIndex: 1 }}>
        <div className='flex flex-col justify-center items-center'>

          {/* MAIN TITLE */}
          <div className='flex flex-col justify-center items-center'>
            <p className='text-bt-grey text-base sm:text-lg mb-6 lg:text-xl'>Thanks for stopping by!</p>
            <h1>I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-p-green to-s-blue'>Steven Brown</span></h1>
            <h2>
              <TypeAnimation
                sequence={[
                  'A Cybersecurity Professional', 1500,
                  'A Penn State Graduate', 1500,
                  'An AI & Automation Enthusiast', 1500,
                  'An NSA Certified Professional', 1500,
                  'A Leader', 1500,
                ]}
                wrapper='span'
                speed={1}
                repeat={Infinity}
              />
            </h2>
            <p className='mt-8 text-bt-grey text-center w-[75%]'>
              Penn State graduate with a B.S. in Cybersecurity Analytics and Operations, NSA IST Certification, and hands-on experience in AI implementation,
              security infrastructure, and compliance. Passionate about leveraging AI and automation to solve real-world security challenges.
            </p>
            <p className="text-sm sm:text-base text-white mt-6 italic">
              <strong>MY APPROACH: "FIGURE IT OUT" - "ADAPT AND OVERCOME"</strong>
            </p>
          </div>

          {/* ICON BUTTONS */}
          <div className='flex justify-center mt-6'>
            <div id="smallButton">
              <Link href={'https://www.linkedin.com/in/steven-b-4a699b218/'}>
                <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black lg:mr-10 shadow-black shadow-lg'>
                  <FaLinkedinIn className="h-6 w-6" />
                </button>
              </Link>
            </div>
            <div id="smallButton">
              <Link href={'https://github.com/Steven6Brown'}>
                <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black lg:mr-10 shadow-black shadow-lg'>
                  <FaGithub className="h-6 w-6" />
                </button>
              </Link>
            </div>
            <div>
              <Link href={'/files/sb-resume.pdf'}>
                <button className='p-4 w-full rounded-full sm:w-fit bg-transparent bg-gradient-to-br from-p-green to-s-blue hover:bg-slate-800 text-black shadow-black shadow-lg'>
                  <FaRegFileAlt className="h-6 w-6" />
                </button>
              </Link>
            </div>
          </div>

          {/* OPEN TO WORK BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-medium mt-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Open to Work — Cybersecurity &amp; AI Roles
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;