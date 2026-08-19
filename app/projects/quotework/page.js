import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/quotework.png';

const QuoteWork = () => {
    const description1 = (
        <>
            <p>
                Quotework is a pricing calculator and invoice generator I built for Aquila Digital, my freelance web design and development business. 
                Instead of guessing at project pricing or rebuilding quotes from scratch for every client, Quotework lets me configure my own base rates 
                once and then build itemized, defensible estimates in seconds - factoring in project type, custom features, add-ons, rush delivery, and 
                whether I or the client will manage hosting after launch.
            </p>

            <br />

            <p>
                Once a price is agreed on, the same tool generates a professional, branded PDF invoice - complete with auto-incrementing invoice numbers, 
                payment terms, and deposit calculations - and can save it directly to a chosen folder using the File System Access API. Every estimate and 
                invoice is tracked in one unified record, so nothing gets lost between quoting and billing. It's a practical tool I use in my own freelance 
                work, not just a portfolio piece: real client estimates, real invoices, real business.
            </p>
        </>
    );

    const description2 = ['Next.js', 'React', 'JavaScript', 'jsPDF', 'File System Access API', 'Client-side State Management', 'PDF Generation'];

    const description3 = (
        <>
            <p>
                Quotework taught me how much thought goes into designing tools around a real, recurring workflow rather than a one-off use case. Since I'm 
                the one using it for actual client work, every decision - from how rates are configured to how line items are added - had to hold up under 
                repeated, practical use rather than just looking good in a demo.
            </p>

            <br />

            <p>
                Working with the File System Access API pushed me into browser capabilities I hadn't touched before, letting the app save generated invoices 
                directly to a folder of my choosing without a backend. Building the PDF generation pipeline with jsPDF also meant learning how to lay out a
                 document programmatically - handling pagination, spacing, and branding consistently across every invoice generated.
            </p>

            <br />

            <p>
                Keeping the entire app client-side, with no backend or database, reinforced how far localStorage and careful state management can go for a tool 
                like this - and gave me a much better sense of when a lightweight, local-first architecture is the right call versus over-engineering a simple business need.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute
                image={ProjectImage}
                title="Quotework"
                planguage="Web Development / Next.js / Business Tool"
                subtitle1="About Quotework"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="What I Learned"
                description3={description3}
                // codebutton='https://github.com/Steven6Brown/QuoteWork'
                // codebuttonlabel='View Code'
            />
        </div>
    );
};

export default QuoteWork;