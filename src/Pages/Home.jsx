import React from "react";
import {
  BriefcaseBusiness,
  Network,
  Users,
  Building2,
  ArrowRight,
  Check,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const achievements = [
    {
      number: "$200K+",
      title: "Revenue Generated",
      description: "Through inbound & outbound efforts",
    },
    {
      number: "6+",
      title: "Qualified Meetings",
      description: "With senior decision-makers / Month",
    },
    {
      number: "80+",
      title: "Cold Calls",
      description: "Made Weekly",
    },
    {
      number: "80+",
      title: "Targeted Emails",
      description: "Sent Weekly",
    },
  ];

  const services = [
    {
      icon: BriefcaseBusiness,
      title: "Business Development",
      description:
        "Identifying growth opportunities, building sales pipelines and developing strategies that drive sustainable revenue.",
    },
    {
      icon: Network,
      title: "Strategic Partnerships",
      description:
        "Building valuable business relationships, developing partner channels and creating long-term commercial opportunities.",
    },
    {
      icon: Users,
      title: "Sales & Client Acquisition",
      description:
        "Connecting with decision-makers, generating qualified leads and converting prospects into lasting business relationships.",
    },
    {
      icon: TrendingUp,
      title: "Sales Strategy & Enablement",
      description:
        "Developing sales playbooks, training teams and improving outreach performance through structured sales processes.",
    },
    {
      icon: Target,
      title: "Performance Coaching",
      description:
        "Identifying sales performance gaps and developing practical strategies to improve team productivity and results.",
    },
    {
      icon: BarChart3,
      title: "Pipeline Management",
      description:
        "Managing commercial pipelines, tracking opportunities and building repeatable systems for predictable business growth.",
    },
  ];

  const careers = [
    {
      period: "AUG 2026 — PRESENT",
      role: "Global Sales Capability & Performance Consultant",
      company: "Hinckley Group Africa",
    },
    {
      period: "AUG 2026 — PRESENT",
      role: "Business Development Manager",
      company: "CamDesk Business Services",
    },
    {
      period: "MAY 2025 — PRESENT",
      role: "Founding Senior Business Development Manager",
      company: "Growth-Stage Technology Company",
    },
  ];

  return (
    <main className="bg-[#030914] text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600 opacity-20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                Business Development • Sales • Strategic Growth
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Driving Business Growth.
                <br />
                Building <span className="text-blue-500">Partnerships.</span>
                <br />
                Delivering Results.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
                I help organizations accelerate growth through strategic
                business development, revenue generation, sales enablement and
                meaningful client relationships.
              </p>

              <p className="mt-5 text-sm font-medium text-gray-300">
                Business Development Manager | Sales Strategist | Growth &
                Partnerships Consultant
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/experience"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  View My Experience
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-lg border border-blue-500/40 bg-blue-950/30 px-6 py-3.5 text-sm font-semibold transition hover:border-blue-400 hover:bg-blue-950/60"
                >
                  Let's Connect
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600 opacity-40 blur-3xl sm:h-96 sm:w-96" />

              <div className="relative z-10 rounded-full border border-blue-500/30 bg-[#081321] p-3 shadow-2xl shadow-blue-900/30">
                <img
                  src="/workp.jpeg"
                  alt="Professional Headshot"
                  className="h-[300px] w-[300px] rounded-full object-cover sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]"
                />
              </div>
            </div>
          </div>

          {/* STATISTICS */}
          <div className="mt-20 grid grid-cols-2 gap-4 rounded-2xl border border-blue-900/40 bg-[#09152e]/80 p-5 backdrop-blur-md md:grid-cols-4 md:p-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`space-y-3 p-3 ${
                  index !== 0 ? "border-l border-blue-900/40 pl-5" : ""
                }`}
              >
                <h2 className="text-3xl font-bold text-blue-400 md:text-4xl">
                  {item.number}
                </h2>

                <p className="text-sm font-semibold text-white">{item.title}</p>

                <p className="text-xs leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="bg-white px-6 py-20 text-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
              MY EXPERTISE
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">What I Do</h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
              I work with organizations to accelerate growth, strengthen sales
              performance and build sustainable business value.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold">{service.title}</h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED IMPACT */}
      <section className="bg-[#020d22] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-blue-400">
              RESULTS & ACHIEVEMENTS
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Featured Impact
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* MAIN FEATURE */}
            <div className="rounded-2xl border border-blue-900/30 bg-[#071936] p-7 lg:col-span-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900">
                  <Building2 className="h-6 w-6 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest text-blue-400">
                    BUSINESS DEVELOPMENT
                  </p>

                  <h3 className="mt-3 text-xl font-bold md:text-2xl">
                    Building Business Development Operations From the Ground Up
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    Designed and executed business development strategies,
                    developed prospecting frameworks and established strategic
                    partnership pipelines to support sustainable business
                    growth.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-gray-300">
                <p className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-blue-400" />
                  Go-to-market strategy development
                </p>

                <p className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-blue-400" />
                  Prospecting and sales pipeline development
                </p>

                <p className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-blue-400" />
                  Strategic partnerships and negotiations
                </p>
              </div>
            </div>

            {/* REVENUE HIGHLIGHT */}
            <div className="flex flex-col justify-center rounded-2xl border border-blue-900/30 bg-[#071936] p-7">
              <p className="text-xs font-semibold tracking-widest text-blue-400">
                SALES PERFORMANCE
              </p>

              <h3 className="mt-5 text-5xl font-bold text-blue-400">$200K+</h3>

              <p className="mt-3 text-lg font-semibold">Revenue Generated</p>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Through inbound and outbound sales efforts, strategic
                prospecting and business development activities.
              </p>

              <Link
                to="/experience"
                className="mt-8 flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-700"
              >
                Explore the Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER SNAPSHOT */}
      <section className="bg-[#030914] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-blue-400">
                PROFESSIONAL JOURNEY
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Career Snapshot
              </h2>
            </div>

            <Link
              to="/experience"
              className="flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              View All Experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careers.map((career, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-[#071936] p-6 transition hover:border-blue-500/50"
              >
                <p className="text-xs font-semibold tracking-widest text-blue-400">
                  {career.period}
                </p>

                <h3 className="mt-5 text-lg font-bold leading-7">
                  {career.role}
                </h3>

                <p className="mt-3 text-sm text-gray-400">{career.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Let's Turn Opportunities Into Growth.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
              Have a business opportunity, partnership idea or project in mind?
              Let's connect and create measurable impact.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex shrink-0 items-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
          >
            Let's Connect
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
