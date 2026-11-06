import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
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
              <Link
                to={`/projects/${project.id}`}
                className="relative block h-44 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07182e] via-transparent to-transparent" />

                <span className="absolute bottom-3 right-3 rounded-md bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                  View Proof →
                </span>
              </Link>

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
