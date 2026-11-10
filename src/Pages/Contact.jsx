import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm("service_jybp89s", "template_7udocgf", formRef.current, {
        publicKey: "Tl8Pa-jdEX3xxNSzb",
      })
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

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
                <p className="text-sm text-slate-500 mt-1">
                  emmanuel.eze@ebbusinesspartners.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-indigo-500" />

              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-sm text-slate-500 mt-1">+2349039555488</p>
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

          {/* CONTACT FORM */}

          <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
              className="w-full border border-slate-200 rounded-md px-4 py-4 text-sm outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              name="reply_to"
              required
              className="w-full border border-slate-200 rounded-md px-4 py-4 text-sm outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="w-full border border-slate-200 rounded-md px-4 py-4 text-sm outline-none focus:border-indigo-500"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-slate-200 rounded-md px-4 py-4 text-sm outline-none focus:border-indigo-500"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-4 rounded-md text-sm font-semibold transition"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm font-medium" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
