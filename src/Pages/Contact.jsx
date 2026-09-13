import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest text-indigo-500 font-semibold">
          CONTACT
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 max-w-3xl">
          Let's create something{" "}
          <span className="text-indigo-500">valuable.</span>
        </h1>

        <p className="text-slate-500 leading-7 max-w-xl mt-6">
          Have a business opportunity, partnership idea, or project you'd like
          to discuss? Let's talk.
        </p>

        <div className="grid lg:grid-cols-2 gap-14 mt-14">
          {/* CONTACT DETAILS */}

          <div className="space-y-7">
            <div className="flex gap-4">
              <Mail className="text-indigo-500" />

              <div>
                <h3 className="font-bold">Email</h3>

                <p className="text-sm text-slate-500 mt-1">hello@example.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-indigo-500" />

              <div>
                <h3 className="font-bold">Phone</h3>

                <p className="text-sm text-slate-500 mt-1">+234 000 000 0000</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-indigo-500" />

              <div>
                <h3 className="font-bold">Location</h3>

                <p className="text-sm text-slate-500 mt-1">Nigeria</p>
              </div>
            </div>
          </div>

          {/* FORM */}

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-slate-200 rounded-md px-4 py-4 text-sm outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-slate-200 rounded-md px-4 py-4 text-sm outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-slate-200 rounded-md px-4 py-4 text-sm outline-none focus:border-indigo-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-slate-200 rounded-md px-4 py-4 text-sm outline-none focus:border-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md text-sm font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
