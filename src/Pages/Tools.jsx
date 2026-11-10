import React from "react";
import {
  Award,
  CheckCircle2,
  BriefcaseBusiness,
  Database,
  Mail,
  Users,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

const Tools = () => {
  const certifications = [
    {
      name: "Sales Training & Certification",
      provider: "SalesEdge",
    },
    {
      name: "Marketing with Analytics",
      provider: "HubSpot",
    },
    {
      name: "Sales Cloud Certification",
      provider: "Salesforce",
    },
    {
      name: "AI for Content Creation",
      provider: "Great Learning",
    },
    {
      name: "Introduction to IT",
      provider: "Great Learning",
    },
  ];

  const toolCategories = [
    {
      title: "Sales & CRM",
      icon: BriefcaseBusiness,
      tools: [
        { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot" },
        { name: "Salesforce", initials: "SF" },
        { name: "Apollo.io", initials: "A" },
        { name: "Sales Navigator", initials: "in" },
        { name: "Lusha", logo: "https://cdn.simpleicons.org/lusha" },
        { name: "Zendesk", initials: "Z" },
      ],
    },
    {
      title: "Productivity & Collaboration",
      icon: Users,
      tools: [
        {
          name: "Google Workspace",
          logo: "https://cdn.simpleicons.org/google",
        },
        {
          name: "Microsoft 365",
          logo: "https://cdn.simpleicons.org/microsoft",
        },
        { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable" },
        { name: "Trello", logo: "https://cdn.simpleicons.org/trello" },
        { name: "monday.com", logo: "https://cdn.simpleicons.org/monday" },
        {
          name: "WhatsApp Business",
          logo: "https://cdn.simpleicons.org/whatsapp",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#030914] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            My Professional Toolkit
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Qualifications & <span className="text-cyan-400">Tools</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            The certifications, platforms, and technologies I use to strengthen
            business development, improve sales performance, manage customer
            relationships, and deliver measurable results.
          </p>
        </div>

        {/* Certifications */}
        <section className="mb-16">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <GraduationCap size={23} />
            </div>

            <div>
              <h2 className="text-xl font-bold">Certifications & Training</h2>
              <p className="mt-1 text-xs text-slate-500">
                Continuous learning and professional development
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate, index) => (
              <div
                key={certificate.name}
                className="group rounded-xl border border-slate-800 bg-[#071936] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Award size={22} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-2 text-sm font-semibold text-white">
                  {certificate.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 size={14} className="text-cyan-400" />
                  {certificate.provider}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools and Platforms */}
        <section>
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Database size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold">Tools & Platforms</h2>
              <p className="mt-1 text-xs text-slate-500">
                Platforms that support my daily workflow
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {toolCategories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <div
                  key={category.title}
                  className="rounded-xl border border-slate-800 bg-[#071936] p-5 sm:p-7"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <CategoryIcon size={19} className="text-cyan-400" />

                    <h3 className="text-sm font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="group flex min-h-[90px] flex-col items-center justify-center gap-3 rounded-lg border border-slate-800 bg-[#0a1b32] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#0d223d]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center">
                          {tool.logo ? (
                            <img
                              src={tool.logo}
                              alt={`${tool.name} logo`}
                              loading="lazy"
                              className="h-7 w-7 object-contain"
                            />
                          ) : (
                            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500/10 text-xs font-bold text-cyan-400">
                              {tool.initials}
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-medium text-slate-300">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Message */}
        <section className="mt-16 rounded-xl border border-slate-800 bg-gradient-to-r from-[#071936] to-[#0a2745] px-6 py-10 text-center sm:px-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
            <Mail size={23} />
          </div>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Always Learning. Always Growing.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            I continuously develop my skills, explore new platforms, and embrace
            better ways to create value and drive business growth.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#030914] transition hover:bg-cyan-400"
          >
            Get in Touch
            <ArrowUpRight size={17} />
          </a>
        </section>

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

export default Tools;
