import {
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
  TrendingUp,
  Target,
  Phone,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Experience() {
  const achievements = [
    {
      number: "20%+",
      label: "Reply Rate Improvement",
      detail: "Hinckley Group Africa",
      icon: TrendingUp,
    },
    {
      number: "$200K+",
      label: "Revenue Generated",
      detail: "FieldAssist",
      icon: Target,
    },
    {
      number: "80+",
      label: "Weekly Cold Calls",
      detail: "FieldAssist",
      icon: Phone,
    },
    {
      number: "20–25%",
      label: "Outreach Performance Growth",
      detail: "Hinckley Group Africa",
      icon: TrendingUp,
    },
  ];

  const experiences = [
    {
      period: "AUG 2026 — PRESENT",
      role: "Global Sales Capability & Performance Consultant",
      company: "Hinckley Group Africa",
      employment: "Contract",
      location: "Remote",
      number: "01",
      responsibilities: [
        "Designed and delivered sales training curricula for teams across Nigeria, Morocco and Algeria, increasing reply rates by 20% within two months.",
        "Improved demo handling and sales execution through structured training and performance coaching.",
        "Built outreach templates, sales playbooks and objection-handling frameworks that improved reply and meeting-booked rates by 20–25% across all regions.",
        "Partnered with sales leadership to diagnose performance gaps across four regional sales executives and develop structured enablement programmes.",
        "Supported the development of a sales representative now on track for promotion to Account Executive.",
      ],
    },
    {
      period: "AUG 2026 — PRESENT",
      role: "Business Development Manager",
      company: "CamDesk Business Services",
      employment: "Contract",
      location: "Florida, United States (Remote)",
      number: "02",
      responsibilities: [
        "Drive client acquisition, strategic partnerships and revenue growth across bookkeeping and back-office services.",
        "Build and manage commercial pipelines through targeted prospecting, referral partnerships, market development and full-cycle business development.",
        "Develop repeatable growth systems and partner channels that create predictable opportunities and recurring revenue.",
        "Position CamDesk as a reliable operational partner for small businesses, nonprofits and professional-service firms seeking financial and back-office support.",
      ],
    },
    {
      period: "MAY 2025 — PRESENT",
      role: "Founding Senior Business Development Manager",
      company: "camtalk solutions",
      employment: "",
      location: "Florida, United States (Remote)",
      number: "03",
      responsibilities: [
        "Spearheaded end-to-end business development operations from the ground up, defining the go-to-market strategy, prospecting framework and partnership pipeline.",
        "Secured strategic partnerships that expanded market footprint and built a structured outbound sales pipeline from scratch.",
        "Developed pitch decks and negotiation frameworks that improved deal conversion speed.",
        "Aligned business development activities with product roadmap milestones and investor-facing growth targets through close collaboration with founders and cross-functional teams.",
      ],
    },
    {
      period: "JUL 2025 — JUL 2026",
      role: "Sales Development Representative",
      company: "FieldAssist",
      employment: "",
      location: "India (Remote)",
      number: "04",
      responsibilities: [
        "Generated over $200,000 in revenue through structured outbound prospecting and disciplined pipeline management across FMCG and CPG sectors.",
        "Executed over 50 cold calls and 50 targeted emails weekly, consistently securing over four qualified meetings per month with senior decision-makers.",
        "Used Apollo, LinkedIn Sales Navigator and Lusha for prospecting and lead generation.",
        "Maintained precise HubSpot CRM records and collaborated with Account Executives to ensure seamless handoffs and accelerated deal progression.",
      ],
    },
    {
      period: "MAR 2024 — MAY 2025",
      role: "Sales Executive",
      company: "App Savvy Solutions",
      employment: "",
      location: "Los Angeles, CA (Remote)",
      number: "05",
      responsibilities: [
        "Led high-volume outbound prospecting via cold calling and targeted email campaigns, driving client acquisition and improving long-term account retention.",
        "Delivered tailored product presentations aligned with client needs, contributing to increased conversion rates.",
        "Resolved client issues proactively to boost satisfaction and repeat business.",
      ],
    },
    {
      period: "JAN 2023 — FEB 2024",
      role: "Investment Advisor",
      company: "Ol'Clare Real Estate and Facility Management",
      employment: "",
      location: "Abuja, Nigeria",
      number: "06",
      responsibilities: [
        "Managed a structured client database to drive targeted outreach and uncover cross-sell opportunities that grew overall client portfolio value.",
        "Compiled strategic performance reports that delivered actionable insights.",
        "Informed business development decisions and investment recommendations through performance analysis.",
      ],
    },
    {
      period: "NOV 2022 — JAN 2023",
      role: "Sales Representative",
      company: "Moniepoint MFB",
      employment: "",
      location: "Nigeria",
      number: "07",
      responsibilities: [
        "Acquired and onboarded new business clients onto the Moniepoint platform.",
        "Expanded the merchant base and drove adoption of digital payment solutions among SME owners and retail merchants.",
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030914] text-white">
      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#020d22] px-6 py-20 md:py-28">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
              <BriefcaseBusiness className="h-4 w-4 text-blue-400" />

              <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                PROFESSIONAL EXPERIENCE
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
              Building Growth.
              <br />
              <span className="text-blue-500">Driving Results.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-gray-400 md:text-base">
              A professional journey built around business development,
              strategic partnerships, revenue generation, sales execution and
              meaningful client relationships.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#career-history"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold transition hover:bg-blue-700"
              >
                Explore My Experience
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 px-6 py-3.5 text-sm font-semibold transition hover:border-blue-400 hover:bg-blue-950/40"
              >
                Let's Connect
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-blue-400" />7
                Professional Roles
              </span>

              <span className="flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-400" />
                Business Development & Sales
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE HIGHLIGHTS */}

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-400">
              RESULTS THAT MATTER
            </p>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Performance Highlights
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
              Selected performance metrics and contributions from my
              professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-[#071525] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>

                    <span className="text-xs font-semibold text-gray-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-blue-400 md:text-4xl">
                    {item.number}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-white">
                    {item.label}
                  </p>

                  <p className="mt-2 text-xs text-gray-500">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER HISTORY */}

      <section id="career-history" className="bg-[#020d22] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-blue-400">
                MY PROFESSIONAL JOURNEY
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Where I've Worked
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
                A look at the roles, responsibilities and contributions that
                have shaped my career.
              </p>
            </div>

            <div className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2.5 text-xs font-semibold text-blue-400">
              7 Professional Roles
            </div>
          </div>

          {/* EXPERIENCE TIMELINE */}

          <div className="relative space-y-7">
            <div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-gradient-to-b from-blue-500/70 via-blue-500/20 to-transparent md:block" />

            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="group relative rounded-2xl border border-white/10 bg-[#071525] p-6 transition duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/20 md:p-9"
              >
                <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                  {/* NUMBER */}

                  <div className="flex shrink-0 items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-sm font-bold text-blue-400">
                      {experience.number}
                    </div>
                  </div>

                  {/* JOB DETAILS */}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-blue-400">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {experience.period}
                          </span>

                          {experience.employment && (
                            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold text-blue-300">
                              {experience.employment}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-4 text-xl font-bold leading-snug text-white transition group-hover:text-blue-300 md:text-2xl">
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-sm font-semibold text-blue-300">
                          {experience.company}
                        </p>

                        <p className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="h-3.5 w-3.5 text-blue-400" />
                          {experience.location}
                        </p>
                      </div>

                      <div className="w-fit shrink-0 rounded-full border border-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Professional Experience
                      </div>
                    </div>

                    {/* RESPONSIBILITIES */}

                    <div className="mt-8 border-t border-white/10 pt-7">
                      <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-gray-500">
                        KEY RESPONSIBILITIES & ACHIEVEMENTS
                      </p>

                      <ul className="space-y-4">
                        {experience.responsibilities.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-sm leading-7 text-gray-400"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-400" />

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-500/20 bg-[#071936] px-7 py-14 text-center md:px-16 md:py-16">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
              <BriefcaseBusiness className="h-7 w-7 text-blue-400" />
            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.3em] text-blue-400">
              LET'S WORK TOGETHER
            </p>

            <h2 className="mt-4 text-2xl font-bold md:text-4xl">
              Let's Build Something Valuable.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-gray-400">
              Interested in business growth, strategic partnerships or new
              opportunities? Let's connect and create impact.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Experience;
