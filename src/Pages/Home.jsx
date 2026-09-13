import React from "react";
import {
  BriefcaseBusiness,
  Network,
  Users,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";

const Home = () => {
  return (
    <section className="relative overflow-hidden bg-[#030914] px-6 py-16 text-white">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600 opacity-20 blur-[120px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Business Development • Sales • Strategic Growth
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Building Relationships.
              <br />
              Creating Opportunities.
              <br />
              Driving <span className="text-blue-500">Growth.</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
              I help businesses unlock new opportunities, build strategic
              partnerships, and drive revenue through smart execution and
              meaningful relationships.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium shadow-lg shadow-blue-600/30 transition hover:bg-blue-700">
                View My Experience
              </button>

              <button className="rounded-lg border border-blue-500/40 bg-blue-950/30 px-6 py-3 text-sm font-medium transition hover:border-blue-400">
                Let's Connect
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Image Glow */}
            <div className="absolute top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600 opacity-50 blur-3xl sm:h-96 sm:w-96" />

            {/* Profile Image */}
            <img
              src="/workp.jpeg"
              alt="Professional Headshot"
              className="relative z-10 w-full bg-indigo-950 rounded-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* STATISTICS */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-blue-900/40 bg-[#09152e]/80 p-6 backdrop-blur-md md:p-8 lg:grid-cols-4">
          {/* STAT 1 */}
          <div className="space-y-2 p-3">
            <h2 className="text-3xl font-bold text-blue-400 md:text-4xl">
              $20K+
            </h2>

            <p className="font-medium text-white">Revenue Generated</p>

            <p className="text-xs text-gray-400">
              Through inbound & outbound efforts
            </p>
          </div>

          {/* STAT 2 */}
          <div className="space-y-2 border-t border-blue-900/40 p-3 md:border-t-0 lg:border-l lg:pl-8">
            <h2 className="text-3xl font-bold text-blue-400 md:text-4xl">4+</h2>

            <p className="font-medium text-white">Qualified Meetings</p>

            <p className="text-xs text-gray-400">
              With senior decision-makers / Month
            </p>
          </div>

          {/* STAT 3 */}
          <div className="space-y-2 border-t border-blue-900/40 p-3 md:border-t-0 lg:border-l lg:pl-8">
            <h2 className="text-3xl font-bold text-blue-400 md:text-4xl">
              50+
            </h2>

            <p className="font-medium text-white">Cold Calls</p>

            <p className="text-xs text-gray-400">Made Weekly</p>
          </div>

          {/* STAT 4 */}
          <div className="space-y-2 border-t border-blue-900/40 p-3 md:border-t-0 lg:border-l lg:pl-8">
            <h2 className="text-3xl font-bold text-blue-400 md:text-4xl">
              50+
            </h2>

            <p className="font-medium text-white">Targeted Emails</p>

            <p className="text-xs text-gray-400">Sent Weekly</p>
          </div>
        </div>
        <section className="bg-white">
          {/* ================= WHAT I DO ================= */}
          <div className="mx-auto max-w-7xl px-6 py-16">
            {/* Heading */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900">What I Do</h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
                I partner with organizations to accelerate growth and build
                sustainable business value.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <BriefcaseBusiness className="mb-8 h-8 w-8 text-blue-500" />

                <h3 className="mb-3 font-semibold text-gray-900">
                  Business Development
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  Identify opportunities, build pipelines, and drive revenue
                  growth.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Network className="mb-8 h-8 w-8 text-purple-500" />

                <h3 className="mb-3 font-semibold text-gray-900">
                  Strategic Partnerships
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  Build and nurture strategic partnerships that create long-term
                  value.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Users className="mb-8 h-8 w-8 text-blue-500" />

                <h3 className="mb-3 font-semibold text-gray-900">
                  Sales & Client Acquisition
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  Connect with decision-makers and convert relationships into
                  business.
                </p>
              </div>
            </div>
          </div>

          {/* ================= FEATURED IMPACT ================= */}
          <div className="bg-[#020d22] px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-6 text-xl font-semibold">Featured Impact</h2>

              {/* Featured Project */}
              <div className="grid gap-6 rounded-xl md:grid-cols-3">
                {/* Left */}
                <div className="rounded-xl bg-[#071936] p-6 md:col-span-2">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-900">
                      <Building2 className="h-5 w-5 text-blue-400" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Building a Business Development
                        <br />
                        Operation From the Ground Up
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        Designed and executed a comprehensive strategy that
                        positioned the company for sustainable growth.
                      </p>

                      {/* Checklist */}
                      <div className="mt-4 space-y-2 text-sm text-gray-300">
                        <p className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-blue-400" />
                          CRM Development
                        </p>

                        <p className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-blue-400" />
                          Prospecting Framework
                        </p>

                        <p className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-blue-400" />
                          Partnership Pipeline
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="rounded-xl bg-[#071936] p-6">
                  <h3 className="text-4xl font-bold text-blue-400">$20K+</h3>

                  <p className="mt-2 font-semibold">Revenue Generated</p>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Through outbound prospecting and strategic sales efforts.
                  </p>

                  <button className="mt-5 flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700">
                    Explore the Story
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* ================= CAREER SNAPSHOT ================= */}
              <h2 className="mb-5 mt-10 text-xl font-semibold">
                Career Snapshot
              </h2>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Career 1 */}
                <div className="rounded-lg bg-[#071936] p-5">
                  <p className="text-xs text-gray-400">2025 – Present</p>

                  <h3 className="mt-3 font-semibold">
                    Founding Senior Business
                    <br />
                    Development Manager
                  </h3>

                  <p className="mt-2 text-xs text-gray-500">
                    Growth-Edge Technology Company
                  </p>
                </div>

                {/* Career 2 */}
                <div className="rounded-lg bg-[#071936] p-5">
                  <p className="text-xs text-gray-400">Jul 2025 – Jul 2026</p>

                  <h3 className="mt-3 font-semibold">
                    Business Development / Sales
                    <br />
                    Professional
                  </h3>
                </div>

                {/* Career 3 */}
                <div className="rounded-lg bg-[#071936] p-5">
                  <p className="text-xs text-gray-400">Earlier Experience</p>

                  <h3 className="mt-3 font-semibold">
                    Marketing • Investment Advisory
                    <br />
                    App Sales Business
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM CTA ================= */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 px-6 py-7 text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
              <h2 className="text-xl font-semibold">
                Let's turn your next opportunity
                <br />
                into measurable growth.
              </h2>

              <button className="flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-sm font-medium shadow-lg hover:bg-blue-400">
                Let's Connect
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
