import React from "react";
import {
  TrendingUp,
  Handshake,
  Target,
  Users,
  Database,
  UserPlus,
  ChartNoAxesCombined,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Expertise = () => {
  const expertise = [
    {
      title: "Business Development",
      description:
        "Identifying growth opportunities, building valuable relationships, and creating strategies that drive sustainable business growth.",
      icon: TrendingUp,
    },
    {
      title: "Strategic Partnerships",
      description:
        "Building and managing strategic partnerships that expand market reach and create long-term business value.",
      icon: Handshake,
    },
    {
      title: "Sales Strategy",
      description:
        "Developing practical sales strategies that improve performance, increase conversions, and achieve revenue targets.",
      icon: Target,
    },
    {
      title: "Lead Generation",
      description:
        "Identifying, researching, and qualifying potential customers through targeted prospecting and outreach.",
      icon: Users,
    },
    {
      title: "CRM Strategy",
      description:
        "Using CRM systems to organize customer information, strengthen relationships, and improve sales processes.",
      icon: Database,
    },
    {
      title: "Client Acquisition",
      description:
        "Attracting and converting potential customers through effective engagement and customer acquisition strategies.",
      icon: UserPlus,
    },
    {
      title: "Pipeline Management",
      description:
        "Managing sales opportunities, tracking prospects, and maintaining a healthy pipeline from initial contact to conversion.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Market Intelligence",
      description:
        "Researching market trends, understanding customer needs, and using insights to identify competitive opportunities.",
      icon: Search,
    },
  ];

  return (
    <main className="min-h-screen bg-[#030914] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            What I Do
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Areas of <span className="text-cyan-400">Expertise</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I combine business development, sales strategy, and relationship
            management to help organizations identify opportunities, acquire
            customers, build partnerships, and achieve sustainable growth.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#071936] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-[#0a203e]"
              >
                {/* Number */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-[#030914]">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h2 className="mb-3 text-base font-semibold text-white">
                  {item.title}
                </h2>

                <p className="text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-10 bg-cyan-500/50 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl border border-slate-800 bg-[#071936] px-6 py-10 text-center sm:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Let's Work Together
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a Business Growth Goal?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Let's explore how strategic business development, sales execution,
            and meaningful execution can help move your business forward.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#030914] transition-all duration-300 hover:bg-cyan-400"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-7 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-black italic text-cyan-400">EB</div>

            <div>
              <p className="font-semibold text-slate-300">
                Business Development
              </p>
              <p>Strategy & Partners</p>
            </div>
          </div>

          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
};

export default Expertise;
