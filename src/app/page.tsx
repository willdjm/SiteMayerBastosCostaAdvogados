/* eslint-disable @next/next/inline-script-id */
"use client";

import Script from "next/script";

import { About } from "./components/about";
import { CorporateMarket } from "./components/corporateMarket";
import { DevelopmentProfessional } from "./components/developmentProfessional";
import { Footer } from "./components/footer";
import { MayerBastosCostaAdvogados } from "./components/mayerBCA";
import { RegulatoryAreas } from "./components/regulatoryAreas";
import { SomeClients } from "./components/someClients";
import { VideoBanner } from "./components/videoBanner";
import { CommercialPromotion } from "./components/commercialPromotion";
import { AreasOfExpertise } from "./components/areasOfExpertise";
import Whatsapp from "./components/Whatsapp";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <main>
      <div>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BZ022C16XJ"
        />

        {/* Google Tag Manager */}
        <Script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T8B5NKDC')
          `}
        </Script>
        {/* End Google Tag Manager  */}

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BZ022C16XJ');
          `}
        </Script>
      </div>

      {/* Componetns of site */}
      <VideoBanner />
      <About />
      <AreasOfExpertise />
      <CommercialPromotion />
      <CorporateMarket />
      <RegulatoryAreas />
      <DevelopmentProfessional />
      <SomeClients />
      <MayerBastosCostaAdvogados />
      <Contact />
      <Footer />
      <Whatsapp />
    </main>
  );
}
