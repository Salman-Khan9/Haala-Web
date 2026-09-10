import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-0"
    >
      <div className="container mx-auto bg-gradient-to-br from-[#0A1F1E] via-[#123A37] to-[#0A1F1E] p-6 sm:p-6 lg:p-14 rounded-3xl shadow-[0_20px_60px_rgba(24,179,164,0.25)]">
        {/* Heading */}
        <div className="flex justify-center py-10 sm:py-14 lg:py-20">
          <p className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white">
            Contact Us
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {/* Left Section */}
            <div className="space-y-6 sm:space-y-8  md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                Ready to Turn Vision into Reality?
              </h1>

              <div className="space-y-6 flex flex-col justify-start  space-x-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    Email Us
                  </h2>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-[#18B3A4] break-all">
                      hello@haala.com
                    </p>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText("hello@haala.com")
                      }
                      className="text-white transition-colors"
                      aria-label="Copy email"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    Call Us
                  </h2>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-[#18B3A4] break-all">+971505962543</p>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText("+971505962543")
                      }
                      className="text-white transition-colors"
                      aria-label="Copy number"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:border-[#18B3A4]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:border-[#18B3A4]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#18B3A4]"
                    required
                  >
                    <option value="" disabled className="bg-white text-black">
                      Services
                    </option>
                    <option
                      value="Full Stack Development"
                      className="bg-white text-black"
                    >
                      Full Stack Development
                    </option>
                    <option
                      value="Frontend Development"
                      className="bg-white text-black"
                    >
                      Frontend Development
                    </option>
                    <option
                      value="Backend Development"
                      className="bg-white text-black"
                    >
                      Backend Development
                    </option>
                    <option
                      value="Mobile App Development"
                      className="bg-white text-black"
                    >
                      Mobile App Development
                    </option>

                    <option
                      value="QA & Testing"
                      className="bg-white text-black"
                    >
                      QA & Testing
                    </option>
                    <option value="Idea to MVP" className="bg-white text-black">
                      Idea to MVP
                    </option>
                    <option value="Consulting" className="bg-white text-black">
                      Consulting
                    </option>
                  </select>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#18B3A4]"
                    required
                  >
                    <option value="" disabled className="bg-white text-black">
                      Budget (USD)
                    </option>
                    <option value="5k-10k" className="bg-white text-black">
                      $5,000 - $10,000
                    </option>
                    <option value="10k-25k" className="bg-white text-black">
                      $10,000 - $25,000
                    </option>
                    <option value="25k-50k" className="bg-white text-black">
                      $25,000 - $50,000
                    </option>
                    <option value="50k+" className="bg-white text-black">
                      $50,000+
                    </option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Write any message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:border-[#18B3A4] resize-none"
                  required
                ></textarea>

                {submitStatus === "success" && (
                  <div className="bg-[#18B3A4] text-white px-4 py-3 rounded-lg">
                    Message sent successfully! We{"'"}ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-600 text-white px-4 py-3 rounded-lg">
                    Please complete all required fields and try again.
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-[#18B3A4] hover:text-white transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? "Sending..." : "Send Us A Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
