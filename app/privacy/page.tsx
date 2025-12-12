import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="font-heading text-2xl font-semibold">{title}</h2>
    <div className="space-y-2 text-muted-foreground">{children}</div>
  </section>
);

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 md:p-10 space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-primary">Privacy Policy</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold">Privacy & GDPR Notice</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This Privacy Policy explains how Bary (“we”, “us”, “our”) collects, uses, and protects your
              personal data in line with the EU General Data Protection Regulation (GDPR).
            </p>
          </div>

          <div className="space-y-8">
            <Section title="Data Controller">
              <p>
                Bary (bary.lt). Contact:{" "}
                <Link href="mailto:bary@gmx.com" className="text-primary underline underline-offset-4">
                  bary@gmx.com
                </Link>
              </p>
            </Section>

            <Section title="What Data We Collect">
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact details you provide (name, email) and project details when you submit a form.</li>
                <li>Business information you choose to share about your project or organization.</li>
                <li>Usage data (e.g., pages visited, device/browser metadata) collected via analytics and cookies.</li>
              </ul>
            </Section>

            <Section title="Why We Process Your Data (Legal Bases)">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Contract/Pre-contractual steps:</strong> Responding to inquiries and preparing proposals.</li>
                <li><strong>Legitimate interests:</strong> Improving our site, preventing abuse, and maintaining security.</li>
                <li><strong>Consent:</strong> For optional communications or non-essential cookies/analytics where required.</li>
              </ul>
            </Section>

            <Section title="How We Use Your Data">
              <ul className="list-disc pl-5 space-y-1">
                <li>To contact you about your request and provide services.</li>
                <li>To manage our business operations, security, and service quality.</li>
                <li>To analyze site performance and improve user experience.</li>
              </ul>
            </Section>

            <Section title="Data Sharing">
              <p>
                We only share data with service providers who help us run our site and business (e.g., hosting, email, analytics).
                These providers process data under our instructions and appropriate safeguards. We do not sell your data.
              </p>
            </Section>

            <Section title="International Transfers">
              <p>
                If personal data is transferred outside the EU/EEA, we use appropriate safeguards such as Standard Contractual Clauses
                or ensure the destination country is deemed adequate by the European Commission.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We keep personal data only as long as needed for the purposes described above (e.g., for ongoing client relationships or legal obligations).
                Once no longer needed, data is securely deleted or anonymized.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access your personal data and receive a copy.</li>
                <li>Correct inaccurate data (rectification).</li>
                <li>Request deletion (“right to be forgotten”) where applicable.</li>
                <li>Restrict or object to processing in certain cases.</li>
                <li>Data portability where processing is based on consent or contract.</li>
                <li>Withdraw consent at any time where processing is based on consent.</li>
              </ul>
            </Section>

            <Section title="Cookies & Analytics">
              <p>
                We may use cookies or similar technologies for functionality and analytics. For non-essential cookies, we will ask for your consent where required.
                You can manage cookie preferences in your browser settings.
              </p>
            </Section>

            <Section title="Security">
              <p>
                We implement appropriate technical and organizational measures to protect personal data from unauthorized access, loss, or misuse.
              </p>
            </Section>

            <Section title="Contact & Requests">
              <p>
                To exercise your rights or ask questions about this policy, contact us at{" "}
                <Link href="mailto:bary@gmx.com" className="text-primary underline underline-offset-4">
                  bary@gmx.com
                </Link>. You can also submit complaints to your local Data Protection Authority.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
