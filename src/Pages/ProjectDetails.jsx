import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <h1 className="p-10 text-white">Project not found</h1>;
  }

  return (
    <section className="min-h-screen bg-[#020d20] px-5 py-10 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/projects"
          className="text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-widest text-cyan-400">
            {project.category}
          </p>

          <h1 className="mt-2 text-3xl font-bold">{project.title}</h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            {project.description}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Project Evidence & Results</h2>

          <p className="mt-2 text-sm text-slate-400">
            Photos and documents showing the work completed for this project.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.proofImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-slate-800 bg-[#07182e]"
            >
              <img
                src={image}
                alt={`${project.title} proof ${index + 1}`}
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-cyan-500/20 bg-[#07182e] p-6">
          <p className="text-xs text-slate-400">Project Result</p>

          <h2 className="mt-2 text-2xl font-bold text-cyan-400">
            {project.result}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
