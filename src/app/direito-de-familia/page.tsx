'use client'

import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { CardsFamilyLaw } from "../components/cardsFamilyLaw";
import { FamilyLaw } from "../components/familyLaw";
import { BannerPageFamilyLaw } from "../components/bannerPageFamilyLaw";
import { AreasOfExpertisePageFamilyLaw } from "../components/areasOfExpertisePageFamilyLaw";
import Whatsapp from "../components/Whatsapp";

export default function DireitoFamilia() {

return (
  <main>
<BannerPageFamilyLaw />
<FamilyLaw/>
<CardsFamilyLaw/>
<AreasOfExpertisePageFamilyLaw/>
<Contact/>
<Footer/>
<Whatsapp/>
  </main>
);
}
