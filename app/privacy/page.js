import React from 'react';
import LegalPage from '@/app/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How stevenrbrown.org handles contact form messages and visitor analytics.',
  alternates: { canonical: 'https://www.stevenrbrown.org/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 6, 2026">
      <p>
        This is the personal portfolio website of Steven Brown. This page explains what information the site collects and how it is used.
      </p>

      <h2 className="text-white text-xl font-bold pt-4">Contact form</h2>
      <p>
        If you use the contact form, the site receives your name, email address, subject and message. This information is emailed to
        Steven Brown so he can reply to you. It is sent through the email service Resend. It is not sold or shared for advertising.
      </p>

      <h2 className="text-white text-xl font-bold pt-4">Analytics and performance</h2>
      <p>
        The site uses Vercel Web Analytics and Vercel Speed Insights to understand how many people visit and how fast pages load. These
        tools record page views and performance data, not your name or email address. The site does not use advertising cookies or
        third-party ad trackers.
      </p>

      <h2 className="text-white text-xl font-bold pt-4">Hosting</h2>
      <p>
        The site is hosted on Vercel. Like most hosts, Vercel may keep standard server logs, such as IP addresses and request times, to
        keep the service secure and running.
      </p>

      <h2 className="text-white text-xl font-bold pt-4">Links to other sites</h2>
      <p>
        Pages on this site link to other websites such as GitHub and LinkedIn. Those sites have their own privacy practices that this
        policy does not cover.
      </p>

      <h2 className="text-white text-xl font-bold pt-4">Your choices</h2>
      <p>
        To ask what information was sent through the contact form, or to ask for it to be deleted, email{' '}
        <a href="mailto:steven.r.brown.tech@gmail.com" className="text-p-green underline underline-offset-4 hover:text-white">
          steven.r.brown.tech@gmail.com
        </a>
        .
      </p>

      <h2 className="text-white text-xl font-bold pt-4">Changes</h2>
      <p>
        This policy may be updated as the site changes. The date at the top shows when it was last revised.
      </p>
    </LegalPage>
  );
}
