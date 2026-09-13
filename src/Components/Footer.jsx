import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#040d21] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <NavLink to="/" className="text-2xl font-black italic">
              <img src="/lgooweb.jpeg" alt="" className="h-15 w-auto" />
            </NavLink>

            <p className="text-slate-400 text-xs leading-6 mt-4 max-w-xs">
              Building relationships, creating opportunities and driving
              sustainable business growth.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-5">Quick Links</h3>

            <div className="space-y-3">
              <NavLink
                to="/about"
                className="block text-xs text-slate-400 hover:text-white"
              >
                About
              </NavLink>

              <NavLink
                to="/experience"
                className="block text-xs text-slate-400 hover:text-white"
              >
                Experience
              </NavLink>

              <NavLink
                to="/case-studies"
                className="block text-xs text-slate-400 hover:text-white"
              >
                Case Studies
              </NavLink>

              <NavLink
                to="/contact"
                className="block text-xs text-slate-400 hover:text-white"
              >
                Contact
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-5">Let's Connect</h3>

            <p className="text-xs text-slate-400 leading-6">
              Interested in working together? Let's discuss your next
              opportunity.
            </p>

            <NavLink
              to="/contact"
              className="inline-block mt-5 bg-blue-600 px-5 py-3 rounded-md text-xs"
            >
              Contact Me
            </NavLink>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6">
          <p className="text-[10px] text-slate-500">
            © 2026 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
