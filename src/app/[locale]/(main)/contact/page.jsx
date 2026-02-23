"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import HeaderPages from "@/components/ui/headerPages/HeaderPages";
import { useGetContactSectionsQuery, useSubmitContactFormMutation, useGetPageHeadersSectionsQuery } from "@/hooks/useApi";
import SocialIcons from "@/components/ui/social-icons/SocialIcons";
import PageLoader from "@/components/ui/loading/PageLoader";
import { useTranslations } from "next-intl";

function ContactPage() {
  const params = useParams();
  const locale = (params?.locale) || "az";
  const t = useTranslations("Common");
  const tPages = useTranslations("Pages.contact");
  const { data: contactData, isLoading: contactLoading } = useGetContactSectionsQuery();
  const { data: page, isLoading: pageLoading } = useGetPageHeadersSectionsQuery();
  const [submitContactForm, { isLoading: isSubmitting }] = useSubmitContactFormMutation();

  const contactHeader = page?.data?.find((item) => item.page === "contact") || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError(t("fillRequiredFields", { defaultValue: "Please fill in all required fields" }));
      return;
    }

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch {
      setError(t("submitError", { defaultValue: "Failed to send message. Please try again." }));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: tPages("email"),
      value: contactData?.email || "info@caucasync.com",
      href: contactData?.email ? `mailto:${contactData.email}` : "mailto:info@caucasync.com",
    },
    {
      icon: Phone,
      title: tPages("phone"),
      value: contactData?.phone || "+994 55 510 37 36",
      href: contactData?.phone ? `tel:${contactData.phone}` : "tel:+994555103736",
    },
    {
      icon: MapPin,
      title: tPages("address"),
      value: contactData?.address || "Baku, Azerbaijan",
      href: "#",
    },
  ];

  if (contactLoading || pageLoading) {
    return <PageLoader />;
  }


  return (
    <div className="min-h-screen bg-main py-10">
      <HeaderPages
        image="bg-image-contact"
        title={contactHeader.title?.[locale] || tPages("title")}
        text={contactHeader.description?.[locale] || tPages("description")}
      />

      {/* Main Content */}
      <section className="py-16 px-4 md:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="p-6 bg-white rounded-sm shadow hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-600">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{info.value}</p>
                      {info.href !== "#" && (
                        <a href={info.href} className="text-green-600 hover:text-green-700 font-medium text-sm">
                          Contact →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="relative py-10 lg:py-0 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-main rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 ">
          {/* Main Content - Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-sm shadow-xl p-8 lg:p-10 border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="+994 XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-sm text-red-700">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-3 rounded-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t("sending", { defaultValue: "Sending..." })}</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-sm shadow-xl overflow-hidden border border-gray-100 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.4371248755!2d49.70852464999999!3d40.394606099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media & FAQ */}
              <div className="bg-white rounded-sm shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{tPages("followUs")}</h3>
                <div className="mb-8">
                  <SocialIcons />
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">{tPages("quickResponse")}</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {tPages("quickResponseDesc")}
                  </p>
                  {/* <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-emerald-800 text-sm font-medium">
                      💡 Pro Tip: Include as much detail as possible in your message to help us assist you better!
                    </p>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default ContactPage;
