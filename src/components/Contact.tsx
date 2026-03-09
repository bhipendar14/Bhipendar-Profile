import { useState, useRef } from "react";
import { MdArrowOutward, MdCopyright, MdSend } from "react-icons/md";
import { TbMail, TbPhone, TbMapPin, TbCheck, TbX } from "react-icons/tb";
import "./styles/Contact.css";

type FormStatus = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMsg, setStatusMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setStatusMsg(data.message);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMsg(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Cannot connect to server. Please email directly.");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <h3>Get In Touch</h3>
          <p className="contact-subtitle">
            Have a project in mind or want to discuss potential opportunities?<br />
            Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">

          {/* Left Column — Contact Info */}
          <div className="contact-info-card">
            <h4>Contact Information</h4>
            <p className="contact-info-sub">Feel free to reach out through any of these channels</p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <span className="contact-icon-wrap"><TbMail /></span>
                <div>
                  <div className="contact-info-label">Email</div>
                  <a href="mailto:bhipendarkumar31@gmail.com" data-cursor="disable" className="contact-info-val">
                    bhipendarkumar31@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon-wrap"><TbPhone /></span>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <a href="tel:+918091220433" data-cursor="disable" className="contact-info-val">
                    +91 8091220433
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon-wrap"><TbMapPin /></span>
                <div>
                  <div className="contact-info-label">Location</div>
                  <span className="contact-info-val">Himachal Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Message Form */}
          <div className="contact-form-card">
            <h4>Send a Message</h4>
            <p className="contact-info-sub">Fill out the form below and I'll get back to you as soon as possible</p>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>

              {/* Status message */}
              {status !== "idle" && status !== "sending" && (
                <div className={`form-status ${status}`}>
                  {status === "success" ? <TbCheck /> : <TbX />}
                  <span>{statusMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className={`form-submit ${status === "sending" ? "sending" : ""}`}
                disabled={status === "sending"}
                data-cursor="disable"
              >
                {status === "sending" ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <><MdSend /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <h2>Bhipendar Kumar<br /><span>AI Full Stack Developer</span></h2>
          <div className="contact-footer-links">
            <a href="https://github.com/bhipendar14" target="_blank" data-cursor="disable" className="contact-social">
              Github <MdArrowOutward />
            </a>
            <a href="https://www.linkedin.com/in/bhipendar-kumar/" target="_blank" data-cursor="disable" className="contact-social">
              Linkedin <MdArrowOutward />
            </a>
            <a href="https://x.com/Bhipendar" target="_blank" data-cursor="disable" className="contact-social">
              Twitter <MdArrowOutward />
            </a>
            <a href="https://www.instagram.com/_bhipendar/" target="_blank" data-cursor="disable" className="contact-social">
              Instagram <MdArrowOutward />
            </a>
          </div>
          <h5><MdCopyright /> 2026 Bhipendar Kumar</h5>
        </div>

      </div>
    </div>
  );
};

export default Contact;
