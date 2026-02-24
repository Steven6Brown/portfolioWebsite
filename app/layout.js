import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Steven Brown | Cybersecurity Professional",
  description: "Penn State graduate with a B.S. in Cybersecurity Analytics and Operations. NSA IST Certified. Experienced in AI implementation, security infrastructure, and compliance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm.className}>
        {children}
      </body>
    </html>
  );
}

// import { DM_Sans } from "next/font/google";
// import "./globals.css";
// import { Navbar } from "./components/Navbar";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/next";

// const dm = DM_Sans({ subsets: ["latin"] });

// export const metadata = {
//   title: "Steven Brown | Cybersecurity Professional",
//   description: "Penn State graduate with a B.S. in Cybersecurity Analytics and Operations. NSA IST Certified. Experienced in AI implementation, security infrastructure, and compliance.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={dm.className}>
//         {children}
//         <SpeedInsights />
//         <Analytics />
//       </body>
//     </html>
//   );
// }