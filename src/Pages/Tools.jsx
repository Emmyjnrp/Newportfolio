import React from "react";

const Tools = () => {
  const certifications = [
    "SalesEdge - Sales Training & Certification",
    "HubSpot - Marketing with Analytics",
    "Salesforce - Sales Cloud Certification",
    "Great Learning - AI for Content Creation",
    "Great Learning - Introduction to IT",
  ];

  const tools = [
    {
      name: "HubSpot",
      logo: "https://cdn.simpleicons.org/hubspot",
    },
    {
      name: "Salesforce",
      //   logo: "https://cdn.simpleicons.org/salesforce",
    },
    {
      name: "Apollo.io",
      //   logo: "https://cdn.simpleicons.org/apollo",
    },
    {
      name: "Sales Navigator",
      //   logo: "https://cdn.simpleicons.org/linkedin",
    },
    {
      name: "Lusha",
      logo: "https://cdn.simpleicons.org/lusha",
    },
    {
      name: "Zendesk",
      logo: "zendesk",
    },
    {
      name: "Google Workspace",
      logo: "https://cdn.simpleicons.org/google",
    },
    {
      name: "Microsoft 365",
      logo: "https://cdn.simpleicons.org/microsoft",
    },
    {
      name: "Airtable",
      logo: "https://cdn.simpleicons.org/airtable",
    },
    {
      name: "Trello",
      logo: "https://cdn.simpleicons.org/trello",
    },
    {
      name: "monday.com",
      logo: "https://cdn.simpleicons.org/monday",
    },
    {
      name: "WhatsApp Business",
      logo: "https://cdn.simpleicons.org/whatsapp",
    },
  ];

  return (
    <section className="min-h-screen bg-[#020d20] px-5 py-6 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Navbar */}

        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Certifications & Tools
          </p>

          <h1 className="text-2xl font-bold md:text-3xl">
            Qualifications & Tools
          </h1>

          <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
            Continuous learning and the right tools
            <br />
            to deliver exceptional results.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* =========================
              CERTIFICATIONS
          ========================== */}
          <div className="relative min-h-[330px] rounded-lg border border-slate-800 bg-[#07182e] p-6">
            <h2 className="mb-6 text-xs font-semibold">Certifications</h2>

            <div className="space-y-5">
              {certifications.map((certificate, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-[10px] text-slate-300"
                >
                  <span className="mt-0.5 text-cyan-400">✦</span>

                  <span>{certificate}</span>
                </div>
              ))}
            </div>

            {/* Certificate Badge */}
            <div className="absolute bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-purple-500/50 bg-purple-500/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400 text-xl text-purple-400">
                ★
              </div>
            </div>
          </div>

          {/* =========================
              TOOLS
          ========================== */}
          <div>
            <h2 className="mb-4 text-xs font-semibold">
              Tools & Platforms I Use
            </h2>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="
                    flex h-12 items-center gap-3
                    rounded-md
                    border border-slate-700
                    bg-[#0b1c34]
                    px-3
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-cyan-500/50
                    hover:bg-[#102743]
                  "
                >
                  {/* Tool Logo */}
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="h-5 w-5 object-contain"
                    />
                  </div>

                  {/* Tool Name */}
                  <span className="text-[10px] font-medium text-slate-200">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-4 rounded-md bg-gradient-to-r from-blue-700 to-cyan-500 p-4 shadow-lg">
              <p className="text-xs font-semibold leading-5">
                Always learning. Always growing.
                <br />
                Always ready to create impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
