"use client";

import React from "react";

export type Language = "en" | "lt";

const translations = {
    en: {
        navigation: {
            links: {
                home: "Home",
                services: "Services",
                portfolio: "Portfolio",
                about: "About",
                process: "Process",
                pricing: "Pricing",
                contact: "Contact",
            },
            contactCta: "Contact",
            languageAria: "Switch language",
            menuToggle: "Toggle navigation menu",
        },
        hero: {
            title: "We Turn Strategy Into Results",
            subtitle: "Business consulting and creative services that drive measurable growth. We help companies scale through strategic planning, brand development, and digital innovation.",
            primaryCta: "Start Your Project",
            secondaryCta: "Our Services",
            stats: {
                projects: "Projects",
                satisfaction: "Satisfaction",
                years: "Years",
            },
        },
        services: {
            heading: "What We Do",
            description: "We combine strategic thinking with creative execution to solve complex business challenges.",
            learnMore: "Learn more →",
            items: {
                consulting: {
                    title: "Business Consulting",
                    description: "Strategic planning and market analysis that identifies opportunities and eliminates inefficiencies. We help you make data-driven decisions, optimize operations, and build sustainable competitive advantages.",
                },
                creative: {
                    title: "Creative Services",
                    description: "Brand identity and visual design that captures attention and builds recognition. From logo design to complete brand systems, we create cohesive visual languages that resonate with your target audience.",
                },
                digital: {
                    title: "Digital Solutions",
                    description: "Custom web applications and digital products built with modern technologies. We develop scalable platforms that enhance user experience, streamline operations, and drive business growth.",
                },
            },
        },
        about: {
            heading: "About BARY",
            paragraphs: [
                "We're a strategic consulting and creative agency based in Vilnius, Lithuania. Since 2019, we've helped businesses across Europe transform their operations, strengthen their brands, and build digital products that scale.",
                "Our approach is straightforward: understand the problem, develop a clear strategy, and execute with precision. We don't believe in unnecessary complexity or drawn-out timelines. We believe in delivering measurable results.",
                "Our team brings together expertise in business strategy, design, and technology. This combination allows us to tackle challenges holistically—from initial concept through final implementation.",
            ],
            cta: "Work With Us",
            stats: {
                projects: {
                    label: "Projects Completed",
                    description: "Across multiple industries",
                },
                satisfaction: {
                    label: "Client Satisfaction",
                    description: "Based on post-project surveys",
                },
                years: {
                    label: "Years of Excellence",
                    description: "Consistent quality delivery",
                },
                team: {
                    label: "Expert Team",
                    description: "Specialists in their fields",
                },
            },
        },
        process: {
            heading: "Our Process",
            description: "A proven methodology that ensures successful project delivery from discovery to launch.",
            steps: [
                {
                    title: "Discovery",
                    description: "We start by understanding your business, market position, and objectives. Through workshops and research, we identify challenges and opportunities.",
                },
                {
                    title: "Strategy",
                    description: "We develop a comprehensive plan aligned with your goals. This includes roadmaps, timelines, resource allocation, and success metrics.",
                },
                {
                    title: "Design",
                    description: "We create solutions that balance aesthetics with functionality. Every design decision is backed by user research and business objectives.",
                },
                {
                    title: "Development",
                    description: "We build using modern technologies and best practices. Our development process emphasizes quality, scalability, and maintainability.",
                },
                {
                    title: "Launch & Support",
                    description: "We manage deployment and provide ongoing support. Post-launch, we monitor performance and make data-driven optimizations.",
                },
            ],
            cta: "Ready to Start?",
        },
        pricing: {
            heading: "What's Included",
            description: "Every project is tailored to your specific needs. Here's what you can expect when working with us.",
            sections: {
                left: [
                    {
                        title: "Strategy & Planning",
                        items: [
                            "Initial consultation and discovery",
                            "Comprehensive strategy development",
                            "Market analysis and research",
                            "Roadmap and timeline planning",
                        ],
                    },
                    {
                        title: "Design & Creative",
                        items: [
                            "Brand identity system",
                            "Visual design and UI/UX",
                            "Marketing collateral",
                            "Design system documentation",
                        ],
                    },
                ],
                right: [
                    {
                        title: "Development & Implementation",
                        items: [
                            "Custom web applications",
                            "Responsive development",
                            "Quality assurance testing",
                            "Performance optimization",
                        ],
                    },
                    {
                        title: "Support & Growth",
                        items: [
                            "Project management",
                            "Post-launch support",
                            "Performance monitoring",
                            "Ongoing optimization",
                        ],
                    },
                ],
            },
            ctaHeading: "Ready to Get Started?",
            ctaDescription: "Projects typically range from €500 to €10,000+ depending on scope and complexity.",
            ctaButton: "Request a Quote",
        },
        portfolio: {
            heading: "Recent Work",
            description: "Case studies from our recent projects across consulting, creative, and digital services.",
            viewCaseStudy: "View case study →",
            projects: [
                {
                    title: "Tech Startup Growth",
                    category: "Consulting",
                    description: "Developed go-to-market strategy and operational framework for a B2B SaaS startup. Implemented customer acquisition systems and optimized pricing model.",
                    result: "📈 500% revenue growth in 12 months",
                    gradient: "from-cerulean to-emerald",
                    badgeVariant: "cerulean" as const,
                },
                {
                    title: "Brand Transformation",
                    category: "Creative",
                    description: "Complete brand redesign for an established retail company entering digital markets. Created new visual identity, brand guidelines, and marketing collateral.",
                    result: "📊 40% increase in brand recognition",
                    gradient: "from-orange to-amber",
                    badgeVariant: "orange" as const,
                },
                {
                    title: "E-commerce Platform",
                    category: "Digital",
                    description: "Built custom e-commerce solution with inventory management, payment processing, and analytics dashboard. Optimized for conversion and mobile experience.",
                    result: "🚀 10,000+ active users",
                    gradient: "from-emerald to-cerulean",
                    badgeVariant: "emerald" as const,
                },
                {
                    title: "Digital Marketing Campaign",
                    category: "Marketing",
                    description: "Designed and executed multi-channel campaign including content strategy, paid advertising, and conversion optimization. Focused on qualified lead generation.",
                    result: "💰 300% ROI in 6 months",
                    gradient: "from-berry to-orange",
                    badgeVariant: "berry" as const,
                },
            ],
        },
        contact: {
            heading: "Let's Talk",
            description: "Tell us about your project. Most of our engagements range from €500 - €5,000+.",
            form: {
                labels: {
                    name: "Name *",
                    email: "Email *",
                    phone: "Phone",
                    service: "Service Interest *",
                    budget: "Budget Range",
                    message: "Message *",
                },
                placeholders: {
                    name: "Your full name",
                    email: "your@company.com",
                    phone: "+370 XXX XXXXX",
                    message: "Tell us about your project, timeline, and objectives...",
                },
                serviceOptions: [
                    { value: "", label: "Select a service" },
                    { value: "consulting", label: "Business Consulting" },
                    { value: "creative", label: "Creative Services" },
                    { value: "digital", label: "Digital Solutions" },
                    { value: "marketing", label: "Marketing Strategy" },
                    { value: "other", label: "Other" },
                ],
                budgetOptions: [
                    { value: "", label: "Select budget range" },
                    { value: "<1000", label: "Less than €1,000" },
                    { value: "1000-2500", label: "€1,000 - €2,500" },
                    { value: "2500-5000", label: "€2,500 - €5,000" },
                    { value: "5000+", label: "€5,000+" },
                    { value: "not-sure", label: "Not sure yet" },
                ],
                submit: "Send Message",
                submitting: "Sending...",
                errors: {
                    nameMin: "Name must be at least 2 characters",
                    nameMax: "Name is too long",
                    email: "Please enter a valid email address",
                    service: "Please select a service",
                    messageMin: "Message must be at least 10 characters",
                    messageMax: "Message is too long",
                },
            },
            toasts: {
                success: "Thank you! We'll be in touch soon.",
                error: "Something went wrong. Please try again.",
                invalid: "Please fix the errors in the form.",
                server: "Failed to send message. Please try again later.",
            },
            direct: {
                intro: "Or reach us directly:",
                emailLabel: "Email",
                phoneLabel: "Phone",
            },
        },
        footer: {
            privacy: "Privacy Policy",
            tagline: "Business Consulting & Creative Services",
        },
    },
    lt: {
        navigation: {
            links: {
                home: "Pradžia",
                services: "Paslaugos",
                portfolio: "Atlikti darbai",
                about: "Apie mus",
                process: "Procesas",
                pricing: "Kainodara",
                contact: "Kontaktai",
            },
            contactCta: "Susisiekti",
            languageAria: "Keisti kalbą",
            menuToggle: "Perjungti meniu",
        },
        hero: {
            title: "Strategiją paverčiame rezultatais",
            subtitle: "Verslo konsultacijos ir kūrybinės paslaugos, kurios užtikrina apčiuopiamą augimą. Padedame įmonėms augti per strateginį planavimą, prekės ženklo kūrimą ir skaitmeninę inovaciją.",
            primaryCta: "Pradėkime projektą",
            secondaryCta: "Mūsų paslaugos",
            stats: {
                projects: "Projektai",
                satisfaction: "Pasitenkinimas",
                years: "Metai",
            },
        },
        services: {
            heading: "Ką darome",
            description: "Strateginį mąstymą deriname su kūrybiniu įgyvendinimu, kad išspręstume sudėtingus verslo iššūkius.",
            learnMore: "Sužinokite daugiau →",
            items: {
                consulting: {
                    title: "Verslo konsultacijos",
                    description: "Strateginis planavimas ir rinkos analizė, padedanti atrasti galimybes ir šalinti neefektyvumą. Padedame priimti duomenimis grįstus sprendimus, optimizuoti veiklą ir kurti ilgalaikį pranašumą.",
                },
                creative: {
                    title: "Kūrybinės paslaugos",
                    description: "Vizualinis identitetas ir dizainas, kuris patraukia dėmesį ir kuria atpažįstamumą. Nuo logotipo iki pilnų prekės ženklo sistemų kuriame vientisą vizualinę kalbą, atliepiančią jūsų auditoriją.",
                },
                digital: {
                    title: "Skaitmeniniai sprendimai",
                    description: "Individualūs interneto sprendimai, kuriuos kuriame su moderniomis technologijomis. Diegiame mastelius atlaikančias platformas, gerinančias patirtį, automatizuojančias procesus ir skatinančias augimą.",
                },
            },
        },
        about: {
            heading: "Apie BARY",
            paragraphs: [
                "Esame strateginių konsultacijų ir kūrybinė agentūra iš Vilniaus. Nuo 2019 m. padedame Europos įmonėms transformuoti veiklą, stiprinti prekės ženklus ir kurti skaitmeninius produktus, kurie plečiasi kartu su verslu.",
                "Mūsų požiūris paprastas: suprasti problemą, sukurti aiškią strategiją ir tiksliai ją įgyvendinti. Netikime pertekliniu sudėtingumu ar ištemptais terminais — tikime išmatuojamais rezultatais.",
                "Komandą sudaro strategijos, dizaino ir technologijų ekspertai. Toks derinys leidžia spręsti iššūkius visapusiškai — nuo idėjos iki įgyvendinimo.",
            ],
            cta: "Dirbkime kartu",
            stats: {
                projects: {
                    label: "Įgyvendinti projektai",
                    description: "Įvairiose industrijose",
                },
                satisfaction: {
                    label: "Klientų pasitenkinimas",
                    description: "Pagal klientų apklausas",
                },
                years: {
                    label: "Metai rinkoje",
                    description: "Nuoseklus kokybės užtikrinimas",
                },
                team: {
                    label: "Specialistų komanda",
                    description: "Savo sričių profesionalai",
                },
            },
        },
        process: {
            heading: "Mūsų procesas",
            description: "Išbandyta metodika, užtikrinanti sėkmingą projekto įgyvendinimą nuo įsigilinimo iki paleidimo.",
            steps: [
                {
                    title: "Įsigilinimas",
                    description: "Pradedame nuo jūsų verslo, rinkos pozicijos ir tikslų supratimo. Per dirbtuves ir tyrimus identifikuojame iššūkius ir galimybes.",
                },
                {
                    title: "Strategija",
                    description: "Parengiame planą, suderintą su tikslais: kelrodžius, terminus, resursų paskirstymą ir sėkmės rodiklius.",
                },
                {
                    title: "Dizainas",
                    description: "Kuriame sprendimus, derinančius estetiką ir funkcionalumą. Kiekvienas dizaino sprendimas remiasi vartotojų įžvalgomis ir verslo tikslais.",
                },
                {
                    title: "Kūrimas",
                    description: "Naudojame modernias technologijas ir gerąsias praktikas. Didžiausią dėmesį skiriame kokybei, masteliui ir palaikymui.",
                },
                {
                    title: "Paleidimas ir palaikymas",
                    description: "Valdome paleidimą ir teikiame palaikymą. Po starto stebime rezultatus ir atliekame duomenimis pagrįstus patobulinimus.",
                },
            ],
            cta: "Pasiruošę pradėti?",
        },
        pricing: {
            heading: "Kas įeina į paslaugas",
            description: "Kiekvieną projektą pritaikome konkretiems poreikiams. Štai ko galite tikėtis dirbdami su mumis.",
            sections: {
                left: [
                    {
                        title: "Strategija ir planavimas",
                        items: [
                            "Pirminė konsultacija ir poreikių analizė",
                            "Išsami strategijos rengimas",
                            "Rinkos analizė ir tyrimai",
                            "Kelrodžiai ir terminų planavimas",
                        ],
                    },
                    {
                        title: "Dizainas ir kūryba",
                        items: [
                            "Prekės ženklo identitetas",
                            "Vizualinis dizainas ir UI/UX",
                            "Marketingo priemonės",
                            "Dizaino sistemos dokumentacija",
                        ],
                    },
                ],
                right: [
                    {
                        title: "Vystymas ir įgyvendinimas",
                        items: [
                            "Individualios žiniatinklio aplikacijos",
                            "Prisitaikantis (responsive) kūrimas",
                            "Kokybės užtikrinimo testavimas",
                            "Našumo optimizavimas",
                        ],
                    },
                    {
                        title: "Palaikymas ir augimas",
                        items: [
                            "Projektų valdymas",
                            "Palaikymas po paleidimo",
                            "Rezultatų stebėsena",
                            "Nuolatinis optimizavimas",
                        ],
                    },
                ],
            },
            ctaHeading: "Norite pradėti?",
            ctaDescription: "Projektų biudžetai dažniausiai svyruoja nuo €500 iki €10,000+ priklausomai nuo apimties ir sudėtingumo.",
            ctaButton: "Gauti pasiūlymą",
        },
        portfolio: {
            heading: "Naujausi darbai",
            description: "Naujausių projektų pavyzdžiai konsultacijų, kūrybos ir skaitmeninių paslaugų srityse.",
            viewCaseStudy: "Peržiūrėti studiją →",
            projects: [
                {
                    title: "Technologijų startuolio augimas",
                    category: "Konsultacijos",
                    description: "Parengėme go-to-market strategiją ir operacinį modelį B2B SaaS startuoliui. Įdiegėme klientų pritraukimo sistemą ir optimizavome kainodarą.",
                    result: "📈 500% pajamų augimas per 12 mėn.",
                    gradient: "from-cerulean to-emerald",
                    badgeVariant: "cerulean" as const,
                },
                {
                    title: "Prekės ženklo transformacija",
                    category: "Kūryba",
                    description: "Visas prekės ženklo atnaujinimas mažmeninės prekybos įmonei, žengiančiai į skaitmeninę rinką. Sukūrėme vizualinį identitetą, gaires ir marketingo priemones.",
                    result: "📊 40% didesnis prekės ženklo atpažinimas",
                    gradient: "from-orange to-amber",
                    badgeVariant: "orange" as const,
                },
                {
                    title: "El. komercijos platforma",
                    category: "Skaitmena",
                    description: "Sukūrėme individualų el. prekybos sprendimą su atsargų valdymu, mokėjimais ir analitika. Optimizavome konversiją ir mobilų patyrimą.",
                    result: "🚀 10 000+ aktyvių naudotojų",
                    gradient: "from-emerald to-cerulean",
                    badgeVariant: "emerald" as const,
                },
                {
                    title: "Skaitmeninė marketingo kampanija",
                    category: "Marketingas",
                    description: "Sukūrėme ir įgyvendinome daugiakanalę kampaniją: turinio strategiją, mokamą reklamą ir konversijos optimizavimą. Dėmesys kokybiškų užklausų generavimui.",
                    result: "💰 300% investicijų grąža per 6 mėn.",
                    gradient: "from-berry to-orange",
                    badgeVariant: "berry" as const,
                },
            ],
        },
        contact: {
            heading: "Pasikalbėkime",
            description: "Papasakokite apie projektą. Dauguma mūsų projektų kainuoja nuo €500 iki €5,000+.",
            form: {
                labels: {
                    name: "Vardas, pavardė *",
                    email: "El. paštas *",
                    phone: "Telefonas",
                    service: "Dominanti paslauga *",
                    budget: "Biudžeto rėžis",
                    message: "Žinutė *",
                },
                placeholders: {
                    name: "Jūsų vardas ir pavardė",
                    email: "jusu@imone.lt",
                    phone: "+370 XXX XXXXX",
                    message: "Papasakokite apie projektą, terminus ir tikslus...",
                },
                serviceOptions: [
                    { value: "", label: "Pasirinkite paslaugą" },
                    { value: "consulting", label: "Verslo konsultacijos" },
                    { value: "creative", label: "Kūrybinės paslaugos" },
                    { value: "digital", label: "Skaitmeniniai sprendimai" },
                    { value: "marketing", label: "Marketingo strategija" },
                    { value: "other", label: "Kita" },
                ],
                budgetOptions: [
                    { value: "", label: "Pasirinkite biudžetą" },
                    { value: "<1000", label: "Mažiau nei €1,000" },
                    { value: "1000-2500", label: "€1,000 - €2,500" },
                    { value: "2500-5000", label: "€2,500 - €5,000" },
                    { value: "5000+", label: "€5,000+" },
                    { value: "not-sure", label: "Dar neaišku" },
                ],
                submit: "Siųsti žinutę",
                submitting: "Siunčiama...",
                errors: {
                    nameMin: "Vardas turi būti bent 2 simbolių",
                    nameMax: "Vardas per ilgas",
                    email: "Įveskite tinkamą el. paštą",
                    service: "Pasirinkite paslaugą",
                    messageMin: "Žinutė turi būti bent 10 simbolių",
                    messageMax: "Žinutė per ilga",
                },
            },
            toasts: {
                success: "Ačiū! Netrukus susisieksime.",
                error: "Įvyko klaida. Pabandykite dar kartą.",
                invalid: "Patikslinkite laukelius formoje.",
                server: "Nepavyko išsiųsti žinutės. Pabandykite vėliau.",
            },
            direct: {
                intro: "Susisiekite tiesiogiai:",
                emailLabel: "El. paštas",
                phoneLabel: "Telefonas",
            },
        },
        footer: {
            privacy: "Privatumo politika",
            tagline: "Verslo konsultacijos ir kūrybinės paslaugos",
        },
    },
} as const;

export type Translations = typeof translations.en;

type LanguageContextValue = {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: Translations;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = React.useState<Language>("en");

    React.useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value = React.useMemo(
        () => ({
            language,
            setLanguage,
            toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "lt" : "en")),
            t: translations[language],
        }),
        [language],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = React.useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}
