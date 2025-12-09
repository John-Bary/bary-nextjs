"use client";

import {
  Megaphone,
  BadgeDollarSign,
  Music4,
  Ghost,
  MessageSquare,
} from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

const platformStyleMap: Record<
  string,
  { gradient: string; initials: string; icon?: never; lucide: React.ReactNode }
> = {
  meta: { gradient: "from-blue-500 to-purple-500", initials: "M", lucide: <Megaphone className="w-6 h-6" /> },
  google: {
    gradient: "from-yellow-400 via-red-500 to-blue-500",
    initials: "G",
    lucide: <BadgeDollarSign className="w-6 h-6" />,
  },
  tiktok: { gradient: "from-emerald-400 via-teal-500 to-cyan-500", initials: "T", lucide: <Music4 className="w-6 h-6" /> },
  snapchat: {
    gradient: "from-yellow-300 via-amber-400 to-orange-400",
    initials: "S",
    lucide: <Ghost className="w-6 h-6" />,
  },
  reddit: { gradient: "from-orange-500 to-red-500", initials: "R", lucide: <MessageSquare className="w-6 h-6" /> },
};

function PlatformIcon({ name, platformKey }: { name: string; platformKey: string }) {
  const style = platformStyleMap[platformKey] ?? { gradient: "from-slate-500 to-slate-700", initials: name[0] ?? "?" };

  return (
    <div
      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${style.gradient} text-white font-semibold flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden`}
      aria-hidden
    >
      {style.lucide ?? <span className="text-lg">{style.initials}</span>}
    </div>
  );
}

function PlatformCard({
  platform,
}: {
  platform: {
    key: string;
    name: string;
    summary: string;
    bestFor: string;
    differentiators: readonly string[];
  };
}) {
  return (
    <div className="glass-card-hover p-6 sm:p-7 flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <PlatformIcon name={platform.name} platformKey={platform.key} />
        <div className="space-y-1">
          <h3 className="font-heading text-xl sm:text-2xl font-semibold">{platform.name}</h3>
          <p className="text-sm text-primary font-medium">{platform.bestFor}</p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">{platform.summary}</p>

      <div className="space-y-2">
        {platform.differentiators.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-foreground/80 leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdPlatforms() {
  const { t } = useI18n();

  return (
    <section id="ad-platforms" className="py-24 md:py-32 relative">
      <div className="section-gradient absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.adPlatforms.badge}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{t.adPlatforms.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.adPlatforms.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {t.adPlatforms.platforms.map((platform, index) => (
            <PlatformCard key={platform.key} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
