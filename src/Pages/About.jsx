import React from "react";
import {
  User,
  Target,
  Zap,
  CheckCircle,
  Monitor,
  ShoppingBag,
  HeartPulse,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  FileText,
  Download,
  BriefcaseBusiness,
  TrendingUp,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const qualities = [
    {
      icon: Target,
      title: "Strategic Thinker",
      description: "Turning ideas into practical opportunities.",
      color: "text-blue-400",
    },
    {
      icon: User,
      title: "Relationship Builder",
      description: "Building meaningful business relationships.",
      color: "text-purple-400",
    },
    {
      icon: Zap,
      title: "Growth Focused",
      description: "Focused on measurable business growth.",
      color: "text-blue-400",
    },
    {
      icon: CheckCircle,
      title: "Growth Partner",
      description: "Helping teams achieve their goals.",
      color: "text-purple-400",
    },
  ];

  const approach = [
    {
      icon: User,
      title: "Understand",
      description: "Understand the business, market and challenges.",
    },
    {
      icon: Target,
      title: "Identify",
      description: "Find the right opportunities and target audience.",
    },
    {
      icon: Zap,
      title: "Engage",
      description: "Build meaningful relationships and conversations.",
    },
    {
      icon: CheckCircle,
      title: "Deliver",
      description:
        "Create value, drive results and achieve sustainable growth.",
    },
  ];

  const industries = [
    { icon: Monitor, title: "Technology & SaaS" },
    { icon: ShoppingBag, title: "Fintech & CRM" },
    { icon: Building2, title: "Professional Services" },
    { icon: GraduationCap, title: "Education" },
    { icon: HeartPulse, title: "Healthcare" },
    { icon: BriefcaseBusiness, title: "FMCG & CPG" },
  ];

  const experience = [
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
    {
      period: "JUL 2025 — JUL 2026",
      role: "Sales Development Representative",
      company: "FieldAssist",
    },
    {
      period: "MAR 2024 — MAY 2025",
      role: "Sales Executive",
      company: "App Savvy Solutions",
    },
    {
      period: "JAN 2023 — FEB 2024",
      role: "Investment Advisor",
      company: "Ol'Clare Real Estate and Facility Management",
    },
    {
      period: "NOV 2022 — JAN 2023",
      role: "Sales Representative",
      company: "Moniepoint MFB",
    },
  ];

  const capabilities = [
    "Business Development",
    "Sales Strategy",
    "Client Acquisition",
    "Strategic Partnerships",
    "Lead Generation",
    "Pipeline Management",
    "Go-to-Market Strategy",
    "Sales Enablement",
  ];

  return (
    <main className="bg-[#030914] text-white">
      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#020d22] px-6 py-20 md:py-24">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Connecting Opportunities.
              <br />
              Creating <span className="text-blue-500">Impact.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
              I'm a results-driven business development professional with a
              passion for building relationships, identifying opportunities and
              driving sustainable business growth.
            </p>

            <p className="mt-5 text-sm font-medium text-gray-300">
              Business Development | Sales Strategy | Strategic Partnerships
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/experience"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold transition hover:bg-blue-700"
              >
                My Experience
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-blue-500/40 px-6 py-3.5 text-sm font-semibold transition hover:border-blue-400 hover:bg-blue-950/40"
              >
                Let's Connect
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-7 sm:grid-cols-4">
              {qualities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index}>
                    <Icon className={`mb-3 h-6 w-6 ${item.color}`} />

                    <h3 className="text-xs font-semibold">{item.title}</h3>

                    <p className="mt-2 text-[11px] leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute h-80 w-80 rounded-full bg-blue-600/30 blur-[100px] sm:h-96 sm:w-96" />

            <div className="relative rounded-full border border-blue-500/30 bg-[#071936] p-3 shadow-2xl shadow-blue-900/30">
              <img
                src="/workp.jpeg"
                alt="Professional profile"
                className="h-[300px] w-[300px] rounded-full object-cover sm:h-[380px] sm:w-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MY BACKGROUND */}

      <section className="bg-white px-6 py-20 text-gray-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              My Background
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Building Relationships.
              <br />
              Creating Business Value.
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-gray-600">
              <p>
                I am a business development and sales professional with
                experience across business development, sales operations, client
                acquisition, investment advisory and strategic partnerships.
              </p>

              <p>
                Throughout my professional journey, I have worked on identifying
                new business opportunities, developing prospecting strategies,
                building commercial pipelines and strengthening relationships
                with clients and business partners.
              </p>

              <p>
                My approach combines strategic thinking, effective communication
                and consistent execution. I believe sustainable business growth
                comes from understanding customers, creating value and building
                systems that deliver measurable outcomes.
              </p>

              <p>
                I continue to develop my expertise in sales strategy,
                performance improvement and business growth to help
                organizations achieve their commercial objectives.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#061737] p-8 text-white shadow-xl md:p-10">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900/60">
              <TrendingUp className="h-7 w-7 text-blue-400" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              My Philosophy
            </p>

            <h3 className="mt-5 text-2xl font-bold leading-relaxed md:text-3xl">
              "Opportunities don't happen, you create them. Growing doesn't
              happen by chance, it happens by choice."
            </h3>

            <div className="mt-7 h-1 w-16 rounded-full bg-blue-500" />

            <p className="mt-4 text-sm font-semibold text-gray-400">— EB</p>
          </div>
        </div>
      </section>

      {/* MY APPROACH */}

      <section className="bg-[#020d22] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              How I Work
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">My Approach</h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
              A structured approach to understanding business needs, identifying
              opportunities and delivering meaningful results.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-xl border border-blue-900/40 bg-[#071936] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900/50">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>

                  <p className="mb-3 text-xs font-semibold text-blue-400">
                    STEP 0{index + 1}
                  </p>

                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="bg-white px-6 py-20 text-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Industry Exposure
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Industries I Work With
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
              Bringing business development and sales experience across
              different sectors and commercial environments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 p-6 text-center transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <Icon className="mx-auto mb-4 h-7 w-7 text-blue-600" />

                  <p className="text-xs font-semibold text-gray-700">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="bg-[#030914] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Personal Profile
            </p>

            <h2 className="mt-4 text-3xl font-bold">Quick Facts</h2>

            <div className="mt-8 space-y-6">
              <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row">
                <span className="w-32 text-sm text-gray-500">Location</span>

                <span className="text-sm font-medium text-white">Nigeria</span>
              </div>

              <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row">
                <span className="w-32 text-sm text-gray-500">Experience</span>

                <span className="text-sm font-medium text-white">
                  Business Development & Sales
                </span>
              </div>

              <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row">
                <span className="w-32 text-sm text-gray-500">Focus Areas</span>

                <span className="text-sm font-medium leading-7 text-white">
                  Business Development, Partnerships, Sales and GTM Strategy
                </span>
              </div>

              <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row">
                <span className="w-32 text-sm text-gray-500">Clients</span>

                <span className="text-sm font-medium text-white">
                  Startups, SMEs & Growth-Stage Companies
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-900/40 bg-[#071936] p-8">
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900/50">
              <Handshake className="h-6 w-6 text-blue-400" />
            </div>

            <h3 className="text-2xl font-bold">What Drives Me</h3>

            <p className="mt-4 text-sm leading-8 text-gray-400">
              I am motivated by opportunities to solve business challenges,
              build strong professional relationships and contribute to
              organizations that are focused on sustainable growth.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Creating measurable business value",
                "Building lasting professional relationships",
                "Improving sales processes and performance",
                "Learning and adapting to new opportunities",
              ].map((item, index) => (
                <p
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-blue-400" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESUME, EXPERIENCE AND EDUCATION */}

      <section className="bg-gray-50 px-6 py-20 text-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                My Resume
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Experience & Education
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                An overview of my professional journey, educational background
                and core capabilities.
              </p>
            </div>

            <a
              href="/Workresume.pdf"
              download
              className="flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {/* PROFESSIONAL EXPERIENCE */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Professional Experience</h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Career history and positions
                  </p>
                </div>
              </div>

              <div className="space-y-7">
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="relative border-l-2 border-blue-200 pl-5"
                  >
                    <div className="absolute -left-[6px] top-1 h-2.5 w-2.5 rounded-full bg-blue-600" />

                    <p className="text-[10px] font-bold tracking-wider text-blue-600">
                      {item.period}
                    </p>

                    <h4 className="mt-2 text-sm font-bold text-gray-900">
                      {item.role}
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">{item.company}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/experience"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                View Full Experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* EDUCATION AND SKILLS */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Education & Training</h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Academic and professional qualifications
                  </p>
                </div>
              </div>
              <div className="border-l-2 border-purple-500 pl-5">
                <p className="text-xs font-semibold text-purple-600">
                  SEPTEMBER 2026
                </p>

                <h4 className="mt-3 font-bold text-gray-900">
                  Bachelor in Business Administration (BBA)
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  University of the people, California, United States
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-5">
                <p className="text-xs font-semibold text-purple-600">
                  JANUARY 2020
                </p>

                <h4 className="mt-3 font-bold text-gray-900">
                  Diploma in Computer Applications
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  HD Global Computers, Enugu State
                </p>
              </div>

              {/* CORE SKILLS */}

              <div className="mt-10">
                <h4 className="mb-5 font-bold">Core Skills</h4>

                <div className="flex flex-wrap gap-2">
                  {capabilities.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RESUME CTA */}

          <div className="mt-10 rounded-2xl bg-[#020d22] px-7 py-10 text-center text-white">
            <h3 className="text-2xl font-bold">
              Want to Know More About My Experience?
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
              Download my complete resume to learn more about my professional
              background, skills and qualifications.
            </p>

            <a
              href="/Workresume.pdf"
              download
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold transition hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Download My Resume
            </a>
          </div>
        </div>
      </section>

      {/* CLEAN FOOTER — NO BOTTOM NAVIGATION */}

      <footer className="border-t border-blue-900/40 bg-[#020d22] px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            {/* BRAND */}

            <div>
              <h2 className="text-3xl font-extrabold tracking-wider text-blue-500">
                EB<span className="text-white">.</span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Connecting opportunities.
                <br />
                Creating impact.
              </p>
            </div>

            {/* CONTACT DETAILS */}

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Get in Touch
              </p>

              <a
                href="mailto:example@email.com"
                className="flex items-center justify-center gap-3 text-sm text-gray-300 transition hover:text-blue-400 md:justify-start"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span>emmanuel.eze@ebbusinesspartners.com</span>
              </a>

              <a
                href="tel:+2340000000000"
                className="flex items-center justify-center gap-3 text-sm text-gray-300 transition hover:text-blue-400 md:justify-start"
              >
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+234 707 140 3333</span>
              </a>
            </div>

            {/* CONTACT CTA */}

            <div>
              <p className="text-sm font-semibold text-white">
                Have a business opportunity?
              </p>

              <p className="mt-2 text-xs text-gray-400">
                Let's connect and create value.
              </p>

              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* COPYRIGHT */}

          <div className="mt-10 border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} EB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default About;
