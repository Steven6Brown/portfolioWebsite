import React from 'react';
import ProjectRoute from '@/app/components/ProjectRoute';
import ProjectImage from '@/public/images/projects/finio.png';

const Finio = () => {
    const description1 = (
        <>
            <p>
                Finio is a privacy-first personal finance app that makes budgeting effortless by eliminating manual data entry. Instead of typing in every purchase, 
                Finio reads your bank charge notifications and logs them automatically - no bank login required, no subscriptions, no data ever leaving your device.
            </p>

            <br />

            <p>
                When you receive a charge notification from your bank, you long-press it, copy the text, and open Finio - it detects the notification automatically, 
                parses the merchant name, amount, and category instantly, and has it ready to add to your budget in one tap. You can also say "Hey Siri, add to Finio" 
                and speak your charge completely hands-free.
            </p>

            <br />

            <h4 className="text-lg font-bold mb-3">
                <span className="bg-gradient-to-r from-p-green to-s-blue text-transparent bg-clip-text">
                    Key Features
                </span>
            </h4>

            <ul className="text-[#ADB7BE] space-y-2 leading-relaxed list-disc list-inside">
                <li>Smart notification parsing engine supporting 20+ banks</li>
                <li>Siri integration for hands-free transaction logging</li>
                <li>Automatic merchant categorization across 500+ merchants</li>
                <li>Monthly budget tracking with spending breakdowns by category</li>
                <li>Recurring bills tracker with due date reminders</li>
                <li>Savings goals with progress tracking</li>
                <li>Home screen widget showing real-time budget status</li>
                <li>Face ID authentication</li>
                <li>Dark and light mode support</li>
                <li>100% offline - all data stored locally on device</li>
            </ul>
        </>
    );

    const description2 = ['SwiftUI', 'WidgetKit', 'AppIntents', 'UserNotifications', 'LocalAuthentication', 'Keychain', 'CoreData', 'Siri Shortcuts'];

    const description3 = (
        <>
            <p>
                Building Finio pushed me deeper into the Apple ecosystem than any project before it. Implementing the notification parsing engine required learning how 
                iOS handles UNUserNotificationCenter and clipboard access, then writing a robust regex-based parser that could reliably extract amounts, merchants, and 
                dates from the wildly inconsistent formats that different banks use in their push notifications.
            </p>

            <br />

            <p>
                Integrating Siri via AppIntents taught me how Apple's intent system works at a deeper level - defining parameters, handling donation of shortcuts, and 
                designing voice interactions that feel natural rather than scripted. WidgetKit added another layer of complexity, requiring me to think carefully about 
                timeline providers and keeping widget data fresh without draining battery.
            </p>

            <br />

            <p>
                The biggest design constraint - keeping everything 100% offline and on-device - forced me to make every architecture decision with privacy as the starting 
                point rather than an afterthought. Using Keychain for sensitive data and CoreData for persistence while keeping the app snappy reinforced how much thought 
                goes into building something that feels simple but handles real user data responsibly.
            </p>
        </>
    );

    return (
        <div>
            <ProjectRoute
                image={ProjectImage}
                title="Finio"
                planguage="iOS Development / SwiftUI / Personal Finance"
                subtitle1="About Finio"
                description1={description1}
                subtitle2="Skills Utilized"
                description2={description2}
                subtitle3="What I Learned"
                description3={description3}
                codebutton='https://github.com/Steven6Brown/Finio'
                codebuttonlabel='View Code'
            />
        </div>
    );
};

export default Finio;