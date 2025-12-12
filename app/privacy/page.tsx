import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="font-heading text-2xl font-semibold">{title}</h2>
    <div className="space-y-2 text-muted-foreground">{children}</div>
  </section>
);

type Policy = {
  id: string;
  heading: string;
  intro: string;
  sections: { title: string; content: React.ReactNode }[];
};

const policies: Policy[] = [
  {
    id: "en",
    heading: "Privacy Policy (GDPR)",
    intro:
      "This notice explains how Bary (“we”, “us”, “our”) collects and processes personal data in line with the EU General Data Protection Regulation (GDPR).",
    sections: [
      {
        title: "Data Controller",
        content: (
          <p>
            Bary (bary.lt). Contact: {" "}
            <Link href="mailto:bary@gmx.com" className="text-primary underline underline-offset-4">
              bary@gmx.com
            </Link>
            .
          </p>
        ),
      },
      {
        title: "What Data We Collect",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and surname.</li>
            <li>Email address.</li>
            <li>Message details you include when you ask us to contact you.</li>
          </ul>
        ),
      },
      {
        title: "Purpose and Legal Basis",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Contacting you:</strong> to respond to your request and communicate with you when you ask us to do so. The
              legal basis is your consent given through the contact request.
            </li>
            <li>
              <strong>Follow-up and record keeping:</strong> to keep track of our conversations until your inquiry is resolved.
              This is based on our legitimate interest in providing organized customer service.
            </li>
          </ul>
        ),
      },
      {
        title: "How We Use Your Data",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>To contact you and answer your questions.</li>
            <li>To schedule calls or provide information you requested.</li>
            <li>To maintain basic records of conversations until the matter is closed.</li>
          </ul>
        ),
      },
      {
        title: "Data Retention",
        content: (
          <p>
            We keep contact details and related messages only while we are actively communicating with you and for up to 12
            months after the last interaction unless a longer period is required by law. You can ask us to delete the data
            sooner where applicable.
          </p>
        ),
      },
      {
        title: "Data Sharing",
        content: (
          <p>
            We share data only with service providers who support our communications and hosting. They process data under our
            instructions and appropriate safeguards. We do not sell personal data.
          </p>
        ),
      },
      {
        title: "International Transfers",
        content: (
          <p>
            If we transfer data outside the EU/EEA, we use safeguards such as Standard Contractual Clauses or rely on adequacy
            decisions where applicable.
          </p>
        ),
      },
      {
        title: "Your Rights",
        content: (
          <>
            <p>You can request the following at any time:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access to your personal data and a copy of it.</li>
              <li>Correction of inaccurate or incomplete data.</li>
              <li>Deletion of data (where legally possible) or restriction of processing.</li>
              <li>Objection to processing based on legitimate interests.</li>
              <li>Data portability for data processed on the basis of consent.</li>
              <li>Withdrawal of consent for future processing.</li>
            </ul>
            <p>
              You can also lodge a complaint with your local Data Protection Authority.
            </p>
          </>
        ),
      },
      {
        title: "Cookies & Analytics",
        content: (
          <p>
            If we use cookies or analytics, we will request consent for non-essential ones where required. You can manage
            preferences through your browser settings.
          </p>
        ),
      },
      {
        title: "Security",
        content: (
          <p>We apply technical and organizational measures to protect personal data from unauthorized access or misuse.</p>
        ),
      },
      {
        title: "Contact & Requests",
        content: (
          <p>
            To exercise your rights or ask questions about this policy, contact us at {" "}
            <Link href="mailto:bary@gmx.com" className="text-primary underline underline-offset-4">
              bary@gmx.com
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    id: "lt",
    heading: "Privatumo politika (BDAR)",
    intro:
      "Ši politika paaiškina, kaip Bary („mes“) renka ir tvarko asmens duomenis pagal Bendrąjį duomenų apsaugos reglamentą (BDAR).",
    sections: [
      {
        title: "Duomenų valdytojas",
        content: (
          <p>
            Bary (bary.lt). Kontaktai: {" "}
            <Link href="mailto:bary@gmx.com" className="text-primary underline underline-offset-4">
              bary@gmx.com
            </Link>
            .
          </p>
        ),
      },
      {
        title: "Kokius duomenis renkame",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Vardą ir pavardę.</li>
            <li>El. pašto adresą.</li>
            <li>Žinutės informaciją, kurią pateikiate prašydami su jumis susisiekti.</li>
          </ul>
        ),
      },
      {
        title: "Tvarkymo tikslai ir teisiniai pagrindai",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Susisiekimas:</strong> atsakyti į jūsų užklausą ir bendrauti, kai to prašote. Teisinis pagrindas – jūsų
              sutikimas, kurį pateikiate kreipdamiesi.
            </li>
            <li>
              <strong>Užklausos sekimas:</strong> tvarkyti mūsų pokalbių įrašus, kol užklausa išsprendžiama. Tai pagrįsta mūsų
              teisėtu interesu užtikrinti tvarkingą klientų aptarnavimą.
            </li>
          </ul>
        ),
      },
      {
        title: "Kaip naudojame duomenis",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Susisiekiame su jumis ir pateikiame atsakymus į jūsų klausimus.</li>
            <li>Registruojame skambučius ar informaciją, kurią prašote pateikti.</li>
            <li>Tvarkome pagrindinius užklausos įrašus, kol klausimas uždaromas.</li>
          </ul>
        ),
      },
      {
        title: "Saugojimo laikotarpis",
        content: (
          <p>
            Kontaktinius duomenis ir su tuo susijusias žinutes saugome tik aktyvaus bendravimo laikotarpiu ir iki 12 mėnesių po
            paskutinio kontakto, nebent teisė reikalauja ilgesnio termino. Esant galimybei, galite paprašyti juos ištrinti anksčiau.
          </p>
        ),
      },
      {
        title: "Duomenų dalijimasis",
        content: (
          <p>
            Duomenimis dalijamės tik su paslaugų teikėjais, kurie padeda mums užtikrinti komunikaciją ir svetainės veikimą. Jie
            duomenis tvarko pagal mūsų nurodymus ir su atitinkamomis apsaugos priemonėmis. Mes neparduodame asmens duomenų.
          </p>
        ),
      },
      {
        title: "Tarptautinis perdavimas",
        content: (
          <p>
            Jei duomenys perduodami už ES/EEE ribų, taikome apsaugos priemones, tokias kaip Standartinės sutarčių sąlygos, arba
            remiamės Europos Komisijos tinkamumo sprendimais, jei tai taikoma.
          </p>
        ),
      },
      {
        title: "Jūsų teisės",
        content: (
          <>
            <p>Jūs galite prašyti:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Susipažinti su savo duomenimis ir gauti jų kopiją.</li>
              <li>Ištaisyti netikslius ar neišsamius duomenis.</li>
              <li>Ištrinti duomenis (kai tai leidžia teisė) arba apriboti tvarkymą.</li>
              <li>Prieštarauti tvarkymui, grindžiamam teisėtais interesais.</li>
              <li>Gauti duomenis perkeliamame formate, kai tvarkymas grindžiamas sutikimu.</li>
              <li>Atsisakyti sutikimo, kad būtų nutrauktas būsimas tvarkymas.</li>
            </ul>
            <p>
              Taip pat galite pateikti skundą Valstybinei duomenų apsaugos inspekcijai ar kitai kompetentingai priežiūros
              institucijai.
            </p>
          </>
        ),
      },
      {
        title: "Slapukai ir analizė",
        content: (
          <p>
            Jei naudojame slapukus ar analizės priemones, dėl nebūtinų slapukų paprašysime sutikimo, kai to reikalauja teisė.
            Naršyklės nustatymuose galite valdyti savo pasirinkimus.
          </p>
        ),
      },
      {
        title: "Saugumas",
        content: (
          <p>Taikome technines ir organizacines priemones, kad apsaugotume asmens duomenis nuo neteisėtos prieigos ar naudojimo.</p>
        ),
      },
      {
        title: "Kreipiniai ir prašymai",
        content: (
          <p>
            Norėdami įgyvendinti teises ar gauti daugiau informacijos apie šią politiką, rašykite {" "}
            <Link href="mailto:bary@gmx.com" className="text-primary underline underline-offset-4">
              bary@gmx.com
            </Link>
            .
          </p>
        ),
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16">
      <div className="container mx-auto px-6 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary">Privacy Policy</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">Privacy & GDPR Notice</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">Last updated: January 2025</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {policies.map((policy) => (
            <div key={policy.id} className="glass-card p-8 md:p-10 space-y-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wide text-primary">{policy.id.toUpperCase()}</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold">{policy.heading}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{policy.intro}</p>
              </div>

              <div className="space-y-8">
                {policy.sections.map((section) => (
                  <Section key={section.title} title={section.title}>
                    {section.content}
                  </Section>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
