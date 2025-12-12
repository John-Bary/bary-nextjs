import Link from "next/link";
import type { ReactNode } from "react";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-3">
    <h2 className="font-heading text-2xl font-semibold">{title}</h2>
    <div className="space-y-2 text-muted-foreground">{children}</div>
  </section>
);

const policies = [
  {
    id: "en",
    label: "English",
    heading: "Privacy & GDPR Notice",
    intro:
      "This Privacy Policy explains how Bary (\"we\", \"us\", \"our\") processes personal data in line with the EU General Data Protection Regulation (GDPR).",
    sections: [
      {
        title: "Data Controller",
        content: (
          <p>
            Bary (bary.lt). Contact:{" "}
            <Link href="mailto:hello@bary.lt" className="text-primary underline underline-offset-4">
              hello@bary.lt
            </Link>
            .
          </p>
        ),
      },
      {
        title: "What Data We Collect",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and surname you provide when requesting contact.</li>
            <li>Email address you provide so we can reply.</li>
            <li>Any optional information you include in your message about your request.</li>
          </ul>
        ),
      },
      {
        title: "Purpose and Legal Basis",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              To contact you when you ask us to do so (replying to inquiries, scheduling a call, or similar pre-contract
              steps). Legal basis: your consent and our legitimate interest in responding to your request.
            </li>
          </ul>
        ),
      },
      {
        title: "How We Use Your Data",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>To answer your inquiry and follow up as requested.</li>
            <li>To maintain records of communications related to your request.</li>
            <li>To improve our processes (aggregated or anonymized insights only).</li>
          </ul>
        ),
      },
      {
        title: "Data Sharing",
        content: (
          <p>
            We share data only with service providers who support our communications and hosting (e.g., email and cloud
            services). They process data under our instructions and appropriate safeguards. We do not sell personal data.
          </p>
        ),
      },
      {
        title: "Data Retention",
        content: (
          <p>
            We keep your contact details for as long as needed to handle your request and any follow-up. If no further action is
            required, we delete or anonymize your data within 12 months unless legal obligations require longer retention.
          </p>
        ),
      },
      {
        title: "International Transfers",
        content: (
          <p>
            If personal data is transferred outside the EU/EEA, we use safeguards such as Standard Contractual Clauses or ensure
            the destination is deemed adequate by the European Commission.
          </p>
        ),
      },
      {
        title: "Your Rights",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your data and receive a copy.</li>
            <li>Correct inaccurate data.</li>
            <li>Request deletion where applicable.</li>
            <li>Restrict or object to processing in certain cases.</li>
            <li>Data portability where processing is based on consent or contract.</li>
            <li>Withdraw consent at any time without affecting prior processing.</li>
            <li>Lodge a complaint with your local Data Protection Authority.</li>
          </ul>
        ),
      },
      {
        title: "Security",
        content: (
          <p>
            We implement appropriate technical and organizational measures to protect personal data from unauthorized access,
            loss, or misuse.
          </p>
        ),
      },
      {
        title: "Contact & Requests",
        content: (
          <p>
            To exercise your rights or ask questions about this policy, contact us at{" "}
            <Link href="mailto:hello@bary.lt" className="text-primary underline underline-offset-4">
              hello@bary.lt
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    id: "lt",
    label: "Lietuvių",
    heading: "Privatumo ir BDAR pranešimas",
    intro:
      "Šiame privatumo pranešime paaiškinama, kaip Bary (\"mes\", \"mums\", \"mūsų\") tvarko asmens duomenis pagal ES Bendrąjį duomenų apsaugos reglamentą (BDAR).",
    sections: [
      {
        title: "Duomenų valdytojas",
        content: (
          <p>
            Bary (bary.lt). Kontaktai:{" "}
            <Link href="mailto:hello@bary.lt" className="text-primary underline underline-offset-4">
              hello@bary.lt
            </Link>
            .
          </p>
        ),
      },
      {
        title: "Kokius duomenis renkame",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Vardą ir pavardę, kuriuos pateikiate prašydami susisiekti.</li>
            <li>El. pašto adresą, kad galėtume atsakyti.</li>
            <li>Bet kokią papildomą informaciją, kurią savo žinutėje pateikiate savo noru.</li>
          </ul>
        ),
      },
      {
        title: "Tvarkymo tikslas ir teisinis pagrindas",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Susisiekti su jumis, kai to prašote (atsakyti į užklausas, suplanuoti skambutį ar atlikti panašius
              ikisutartinius veiksmus). Teisinis pagrindas: jūsų sutikimas ir mūsų teisėtas interesas atsakyti į prašymą.
            </li>
          </ul>
        ),
      },
      {
        title: "Kaip naudojame duomenis",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Atsakyti į jūsų užklausą ir vykdyti prašomą tolesnį bendravimą.</li>
            <li>Užtikrinti užklausų ir komunikacijos apskaitą.</li>
            <li>Tobulinti procesus (naudojant tik apibendrintą arba anonimizuotą informaciją).</li>
          </ul>
        ),
      },
      {
        title: "Duomenų dalijimasis",
        content: (
          <p>
            Duomenis teikiame tik paslaugų teikėjams, kurie padeda mums užtikrinti komunikaciją ir talpinimą (pvz., el. pašto ir
            debesijos paslaugos). Jie duomenis tvarko pagal mūsų nurodymus ir taiko tinkamas apsaugos priemones. Mes neparduodame
            asmens duomenų.
          </p>
        ),
      },
      {
        title: "Saugojimo laikotarpis",
        content: (
          <p>
            Jūsų kontaktinius duomenis saugome tiek, kiek reikia jūsų prašymui ir tolesniam bendravimui vykdyti. Jei papildomų
            veiksmų nereikia, duomenis ištrinami arba anonimizuojami per 12 mėnesių, nebent ilgesnį saugojimą nustato teisės
            aktai.
          </p>
        ),
      },
      {
        title: "Tarptautinis perdavimas",
        content: (
          <p>
            Jei asmens duomenys perduodami už ES/EEE ribų, taikome apsaugos priemones, tokias kaip Standartinės sutarčių
            sąlygos, arba užtikriname, kad šalis būtų pripažinta tinkama Europos Komisijos.
          </p>
        ),
      },
      {
        title: "Jūsų teisės",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Gauti informaciją apie tvarkomus duomenis ir jų kopiją.</li>
            <li>Ištaisyti netikslius duomenis.</li>
            <li>Prašyti ištrinti duomenis, kai tai taikoma.</li>
            <li>Tam tikrais atvejais apriboti ar nesutikti su tvarkymu.</li>
            <li>Gauti duomenis perkeliamame formate, kai tvarkoma sutikimo ar sutarties pagrindu.</li>
            <li>Bet kada atšaukti sutikimą, nedarant įtakos ankstesniam tvarkymui.</li>
            <li>Pateikti skundą Valstybinei duomenų apsaugos inspekcijai ar kitai priežiūros institucijai.</li>
          </ul>
        ),
      },
      {
        title: "Saugumas",
        content: (
          <p>
            Taikome tinkamas technines ir organizacines priemones asmens duomenims apsaugoti nuo neteisėtos prieigos, praradimo
            ar netinkamo naudojimo.
          </p>
        ),
      },
      {
        title: "Kontaktai ir užklausos",
        content: (
          <p>
            Norėdami pasinaudoti savo teisėmis ar gauti daugiau informacijos apie šį pranešimą, kreipkitės el. paštu{" "}
            <Link href="mailto:hello@bary.lt" className="text-primary underline underline-offset-4">
              hello@bary.lt
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
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">Privacy Policy</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">Privacy & GDPR Notice</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Below you can find our privacy policy in English and Lithuanian. It focuses on the personal data we collect to
            respond when you ask us to contact you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {policies.map((policy) => (
            <div key={policy.id} className="glass-card p-8 md:p-10 space-y-8">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-primary">{policy.label}</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold">{policy.heading}</h2>
                <p className="text-muted-foreground text-base leading-relaxed">{policy.intro}</p>
              </div>

              <div className="space-y-6">
                {policy.sections.map((section) => (
                  <Section key={`${policy.id}-${section.title}`} title={section.title}>
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
