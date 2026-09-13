import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Growth Strategy",
      category: "Business Development",
      description:
        "Developed a sales strategy that improved lead generation, customer acquisition, and overall sales performance.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
      tags: ["Sales Strategy", "CRM", "Lead Generation"],
      result: "+35% Sales Growth",
    },

    {
      title: "CRM Optimization",
      category: "CRM Strategy",
      description:
        "Streamlined the customer management process and created a more efficient sales pipeline.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      tags: ["CRM", "Automation", "Pipeline"],
      result: "40% More Efficiency",
    },

    {
      title: "Lead Generation Campaign",
      category: "Lead Generation",
      description:
        "Created and executed a targeted lead generation campaign focused on high-quality prospects.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
      tags: ["Prospecting", "Outreach", "B2B"],
      result: "500+ Qualified Leads",
    },

    {
      title: "Strategic Partnership",
      category: "Partnerships",
      description:
        "Built a strategic partnership that opened new business opportunities and expanded market reach.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
      tags: ["Partnerships", "Strategy", "Growth"],
      result: "3 New Partnerships",
    },

    {
      title: "Market Research",
      category: "Market Intelligence",
      description:
        "Conducted market research to identify customer needs, competitors, and new growth opportunities.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      tags: ["Research", "Analytics", "Strategy"],
      result: "New Market Opportunity",
    },

    {
      title: "Client Acquisition",
      category: "Business Development",
      description:
        "Designed an acquisition process focused on converting prospects into long-term clients.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
      tags: ["Acquisition", "Sales", "Conversion"],
      result: "+28% Conversion",
    },
  ];

  return (
    <section className="min-h-screen bg-[#020d20] px-5 py-8 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="mb-10">
          <p
            className="
              mb-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-400
            "
          >
            Selected Works
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Projects & Case Studies
          </h1>

          <p className="mt-3 max-w-xl text-xs leading-6 text-slate-400">
            A selection of projects, strategies, and solutions created to solve
            business challenges and deliver measurable results.
          </p>
        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="
                group
                overflow-hidden
                rounded-xl
                border
                border-slate-800
                bg-[#07182e]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-500/40
                hover:shadow-xl
                hover:shadow-cyan-950/30
              "
            >
              {/* Project Image */}

              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#07182e]
                    via-transparent
                    to-transparent
                  "
                />

                {/* Category */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-[#020d20]/80
                    px-3
                    py-1
                    text-[9px]
                    text-cyan-400
                    backdrop-blur
                  "
                >
                  {project.category}
                </div>
              </div>

              {/* Project Content */}

              <div className="p-5">
                <h2 className="text-base font-semibold">{project.title}</h2>

                <p className="mt-2 text-[11px] leading-5 text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        rounded-md
                        bg-[#0c223c]
                        px-2
                        py-1
                        text-[8px]
                        text-slate-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-800
                    pt-4
                  "
                >
                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-slate-500">
                      Result
                    </p>

                    <p className="mt-1 text-xs font-semibold text-cyan-400">
                      {project.result}
                    </p>
                  </div>

                  <button
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-700
                      text-slate-300
                      transition
                      hover:border-cyan-400
                      hover:text-cyan-400
                    "
                  >
                    →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <div
          className="
            mt-12
            rounded-xl
            bg-gradient-to-r
            from-blue-700
            to-cyan-500
            p-6
            text-center
          "
        >
          <p className="text-sm font-semibold">Have a project in mind?</p>

          <p className="mt-1 text-[11px] text-blue-100">
            Let's work together to turn your ideas into measurable results.
          </p>

          <button
            className="
              mt-4
              rounded-md
              bg-white
              px-5
              py-2
              text-[10px]
              font-semibold
              text-blue-700
              transition
              hover:bg-slate-100
            "
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
