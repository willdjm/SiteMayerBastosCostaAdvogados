import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayer Bastos & Costa Advogados",
  description: "Mayer Bastos & Costa Advogados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
        {/* Google Tag Manager (noscript)  */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8B5NKDC"
            height="0"
            width="0"
            className="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript)  */}
      </body>
    </html>
  );
}
