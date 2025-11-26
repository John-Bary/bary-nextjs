"use client";

import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-2">
    <h2 className="text-h4 text-dark-gray">{title}</h2>
    <div className="space-y-2 text-text-gray">{children}</div>
  </section>
);

export default function PrivacyPolicy() {
  return (
    <main className="section bg-light-gray min-h-screen">
      <div className="container max-w-4xl space-y-8">
        <div className="space-y-3">
          <p className="caption">Privacy Policy</p>
          <h1 className="text-h2 text-dark-gray">Privacy & GDPR Notice</h1>
          <p className="text-large text-text-gray">
            This Privacy Policy explains how Bary (“we”, “us”, “our”) collects, uses, and protects your
            personal data in line with the EU General Data Protection Regulation (GDPR).
          </p>
        </div>

        <Section title="Data Controller">
          <p>Bary (bary.lt). Contact: <Link href="mailto:hello@bary.lt" className="text-cerulean no-underline">hello@bary.lt</Link></p>
        </Section>

        <Section title="What Data We Collect">
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details you provide (name, email, phone) and project details when you submit a form.</li>
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
            If data is transferred outside the EEA/UK, we rely on lawful safeguards such as Standard Contractual Clauses
            or equivalent protections.
          </p>
        </Section>

        <Section title="Retention">
          <p>
            We keep contact and project inquiry data as long as needed to handle your request and for reasonable business/legal
            purposes. Analytics and cookie data are retained per provider defaults unless you clear or opt out.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>
            You have the right to access, correct, delete, or restrict your personal data; to object to certain processing;
            and to data portability where applicable. You may withdraw consent at any time. To exercise rights, contact
            <Link href="mailto:hello@bary.lt" className="text-cerulean no-underline"> hello@bary.lt</Link>. You can also
            lodge a complaint with your local data protection authority.
          </p>
        </Section>

        <Section title="Cookies & Analytics">
          <p>
            Our site may use cookies or similar technologies for essential functionality and analytics. Where required, we
            will request your consent for non-essential cookies. You can manage cookies via your browser settings.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We use appropriate technical and organizational measures to protect your data. No system is completely secure,
            but we work to prevent unauthorized access, disclosure, or loss.
          </p>
        </Section>

        <Section title="Updates">
          <p>
            We may update this notice. Changes take effect when posted on this page. We encourage you to review it periodically.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            For any privacy questions or requests, email <Link href="mailto:hello@bary.lt" className="text-cerulean no-underline">hello@bary.lt</Link>.
          </p>
        </Section>
      </div>
    </main>
  );
}
