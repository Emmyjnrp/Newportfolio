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
  Users,
  Mail,
  Phone,
  FileText,
  Download,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#020d22] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
              About Me
            </p>

            <h1 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">
              Connecting Opportunities.
              <br />
              Creating Impact.
            </h1>

            <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-400">
              I'm a results-driven business development professional with a
              passion for building relationships, identifying opportunities, and
              driving sustainable business growth.
            </p>

            {/* Small Features */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              <div>
                <Target className="mb-2 h-5 w-5 text-blue-400" />

                <h3 className="text-xs font-semibold">Strategic Thinker</h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  Turning ideas into practical opportunities.
                </p>
              </div>

              <div>
                <User className="mb-2 h-5 w-5 text-purple-400" />

                <h3 className="text-xs font-semibold">Relationship Builder</h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  Building meaningful business relationships.
                </p>
              </div>

              <div>
                <Zap className="mb-2 h-5 w-5 text-blue-400" />

                <h3 className="text-xs font-semibold">Growth Focused</h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  Focused on measurable business growth.
                </p>
              </div>

              <div>
                <CheckCircle className="mb-2 h-5 w-5 text-purple-400" />

                <h3 className="text-xs font-semibold">Growth Partner</h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  Helping teams achieve their goals.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="flex justify-center">
            <img
              src="/workp.jpeg"
              alt="Profile"
              className="w-full max-w-sm rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= MY APPROACH ================= */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-bold">My Approach</h2>

          <div className="grid gap-5 rounded-xl border border-gray-200 p-5 shadow-sm md:grid-cols-4">
            {/* Card 1 */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <User className="h-5 w-5 text-blue-600" />
              </div>

              <h3 className="mb-2 text-sm font-semibold">Understand</h3>

              <p className="text-xs leading-relaxed text-gray-500">
                Understand the business, market, and challenges.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <Target className="h-5 w-5 text-blue-600" />
              </div>

              <h3 className="mb-2 text-sm font-semibold">Identify</h3>

              <p className="text-xs leading-relaxed text-gray-500">
                Find the right opportunities and target the right audience.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <Zap className="h-5 w-5 text-purple-600" />
              </div>

              <h3 className="mb-2 text-sm font-semibold">Engage</h3>

              <p className="text-xs leading-relaxed text-gray-500">
                Build meaningful relationships and conversations.
              </p>
            </div>

            {/* Card 4 */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>

              <h3 className="mb-2 text-sm font-semibold">Deliver</h3>

              <p className="text-xs leading-relaxed text-gray-500">
                Create value, drive results, and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-xl font-bold">Industries I Work With</h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            <Industry icon={<Monitor />} title="Technology & SaaS" />

            <Industry icon={<ShoppingBag />} title="Fintech / CRM" />

            <Industry icon={<HeartPulse />} title="Fintech" />

            <Industry icon={<Building2 />} title="Professional Services" />

            <Industry icon={<GraduationCap />} title="Education" />

            <Industry icon={<Users />} title="Healthcare" />
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {/* Facts */}
          <div>
            <h2 className="mb-6 text-xl font-bold">Quick Facts</h2>

            <div className="space-y-4 text-sm">
              <div className="flex">
                <span className="w-28 text-gray-500">Location</span>

                <span className="font-medium">Nigeria</span>
              </div>

              <div className="flex">
                <span className="w-28 text-gray-500">Experience</span>

                <span className="font-medium">5+ Years</span>
              </div>

              <div className="flex">
                <span className="w-28 text-gray-500">Focus Areas</span>

                <span className="font-medium">
                  Business Development, Partnerships,
                  <br />
                  Sales, GTM Strategy
                </span>
              </div>

              <div className="flex">
                <span className="w-28 text-gray-500">Clients</span>

                <span className="font-medium">
                  Startups, SMEs & Growth-stage Companies
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex items-center">
            <div className="rounded-xl bg-[#061737] p-7 text-white shadow-lg">
              <p className="mb-3 text-2xl text-blue-400">“</p>

              <p className="text-sm leading-relaxed text-gray-300">
                Opportunities don't happen, you create them. Growing doesn't
                happen by chance, it happens by choice.
              </p>

              <p className="mt-4 text-xs font-semibold text-gray-400">— EB</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ================= RESUME SECTION ================= */}
      {/* ================================================= */}

      <section className="bg-gray-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          {/* Resume Heading */}
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-500">
                My Resume
              </p>

              <h2 className="text-2xl font-bold text-gray-900">
                Experience & Education
              </h2>

              <p className="mt-2 max-w-xl text-sm text-gray-500">
                A quick overview of my professional journey, education, skills,
                and experience.
              </p>
            </div>

            {/* Download Resume Button */}
            <a
              href="/Workresume.pdf"
              download
              className="flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Resume Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* ================= EXPERIENCE ================= */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>

                <h3 className="text-lg font-bold">Experience</h3>
              </div>

              {/* Experience 1 */}
              <div className="border-l-2 border-blue-500 pl-5">
                <p className="text-xs font-medium text-blue-600">
                  2025 – Present
                </p>

                <h4 className="mt-2 font-semibold text-gray-900">
                  Business Development Professional
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Business Development & Sales
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Focused on identifying opportunities, building relationships,
                  developing partnerships, and supporting business growth.
                </p>
              </div>

              {/* Experience 2 */}
              <div className="mt-7 border-l-2 border-gray-200 pl-5">
                <p className="text-xs font-medium text-blue-600">
                  Previous Experience
                </p>

                <h4 className="mt-2 font-semibold text-gray-900">
                  Sales & Client Acquisition
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Sales / Business Development
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Worked on prospecting, client communication, lead generation,
                  and converting opportunities into business relationships.
                </p>
              </div>
            </div>

            {/* ================= EDUCATION ================= */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                </div>

                <h3 className="text-lg font-bold">Education</h3>
              </div>

              {/* Education */}
              <div className="border-l-2 border-purple-500 pl-5">
                <p className="text-xs font-medium text-purple-600">Current</p>

                <h4 className="mt-2 font-semibold text-gray-900">
                  Federal Polytechnic Nekede
                </h4>

                <p className="mt-1 text-sm text-gray-500">HND 1</p>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Currently pursuing higher education while developing
                  professional and technical skills.
                </p>
              </div>

              {/* Core Skills */}
              <div className="mt-8">
                <h4 className="mb-4 font-semibold text-gray-900">
                  Core Skills
                </h4>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                    Business Development
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                    Sales
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                    Client Acquisition
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                    Strategic Partnerships
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                    Communication
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                    Lead Generation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Resume CTA */}
          <div className="mt-8 rounded-xl bg-[#020d22] p-7 text-center text-white">
            <h3 className="text-xl font-bold">
              Want to know more about my experience?
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm text-gray-400">
              Download my complete resume to learn more about my background,
              skills, experience, and qualifications.
            </p>

            <a
              href="/Workresume.pdf"
              download
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium transition hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Download My Resume
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#020d22] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500">EB</h2>

            <p className="mt-1 text-xs text-gray-500">
              Connecting opportunities.
              <br />
              Creating impact.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-xs text-gray-400">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-400" />
              example@email.com
            </p>

            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400" />
              +234 000 000 0000
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-blue-400" />

            <span className="text-xs text-gray-400">LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ================= INDUSTRY COMPONENT ================= */

const Industry = ({ icon, title }) => {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-purple-500">
        {React.cloneElement(icon, {
          className: "h-6 w-6",
        })}
      </div>

      <p className="text-xs font-medium text-gray-600">{title}</p>
    </div>
  );
};

export default About;
