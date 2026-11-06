import React from 'react';
import LegalPage from '@/app/components/LegalPage';

export const metadata = {
  title: 'Accessibility Statement',
  description: 'The accessibility goals, known limitations and feedback options for stevenrbrown.org.',
  alternates: { canonical: 'https://www.stevenrbrown.org/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement" updated="November 6, 2026">
      <p>
        I want this site to be usable by everyone, including people who use screen readers, keyboards, voice control or magnification.
        The goal is to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.
      </p>

      <h2 className="text-white text-xl font-bold pt-4">What is in place</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Text and interface colors chosen for readable contrast.</li>
        <li>Form fields with visible labels and clear error messages.</li>
        <li>Navigation and buttons that work with a keyboard.</li>
        <li>Descriptive text for meaningful images.</li>
      </ul>

      <h2 className="text-white text-xl font-bold pt-4">Known limitations</h2>
      <p>
        This site is still being reviewed against the full guidelines, and I have not completed testing with every screen reader and
        device. Some project pages currently show placeholder images until real screenshots are added. Some motion effects may still
        need to be reduced for visitors who prefer less animation.
      </p>

      <h2 className="text-white text-xl font-bold pt-4">Feedback</h2>
      <p>
        If you run into a barrier on this site, please email{' '}
        <a href="mailto:steven.r.brown.tech@gmail.com" className="text-p-green underline underline-offset-4 hover:text-white">
          steven.r.brown.tech@gmail.com
        </a>
        . Include the page address and what you were trying to do, and I will work to fix it.
      </p>
    </LegalPage>
  );
}
