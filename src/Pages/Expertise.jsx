import React from "react";

const Expertise = () => {
  const expertise = [
    {
      title: "Business Development",
      description:
        "Identifying opportunities, building relationships, and driving business growth.",
      icon: "↗",
    },
    {
      title: "Strategic Partnerships",
      description:
        "Developing and managing partnerships that create long-term value.",
      icon: "♧",
    },
    {
      title: "Sales Strategy",
      description:
        "Designing and executing sales strategies to achieve business goals.",
      icon: "◉",
    },
    {
      title: "Lead Generation",
      description:
        "Finding and qualifying prospects to support business growth.",
      icon: "▣",
    },
    {
      title: "CRM Strategy",
      description:
        "Optimizing customer relationships and improving sales processes.",
      icon: "∞",
    },
    {
      title: "Client Acquisition",
      description:
        "Attracting new clients and developing effective acquisition strategies.",
      icon: "♡",
    },
    {
      title: "Pipeline Management",
      description:
        "Managing opportunities and ensuring a healthy sales pipeline.",
      icon: "⌁",
    },
    {
      title: "Market Intelligence",
      description: "Monitoring market trends and using insights to stay ahead.",
      icon: "◌",
    },
  ];

  return (
    <section className="min-h-screen bg-[#061329] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Expertise
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">Areas of Expertise</h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            The skills and capabilities I bring to drive business growth and
            create lasting impact.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group rounded-lg border border-slate-800 bg-[#0a1b32] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#0d223d]"
            >
              {/* Icon */}
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-md border border-cyan-500/20 bg-cyan-500/5 text-lg text-cyan-400">
                {item.icon}
              </div>

              {/* Content */}
              <h2 className="mb-2 text-sm font-semibold text-white">
                {item.title}
              </h2>

              <p className="text-xs leading-5 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-black italic text-cyan-400">F3</div>

            <div>
              <p>Business Development</p>
              <p>Strategy & Partnerships</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span>✉ hello@example.com</span>
            <span>☎ +234 000 000 0000</span>
          </div>

          <div>© 2025 All rights reserved.</div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
