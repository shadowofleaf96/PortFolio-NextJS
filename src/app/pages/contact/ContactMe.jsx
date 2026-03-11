"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactMe = () => {
  const [status, setStatus] = useState(null);
  const [revealedInfo, setRevealedInfo] = useState({
    email: false,
    phone: false,
    location: false,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const resp = await axios.post("/api/send-email", data);
      if (resp.status === 200) {
        setStatus({
          type: "success",
          msg: "Message sent! I'll get back to you soon.",
        });
        reset();
      }
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Failed to send message. Please try again.",
      });
    }
    setTimeout(() => setStatus(null), 5000);
  };

  const handleReveal = (label, originalLink) => {
    if (!revealedInfo[label.toLowerCase()]) {
      setRevealedInfo((prev) => ({ ...prev, [label.toLowerCase()]: true }));
      return; // Prevent default navigation on first click
    }
    // If already revealed, allow normal link behavior
    window.location.href = originalLink;
  };

  const contactInfo = [
    {
      icon: "mdi:email",
      label: "Email",
      value: "simokb46@gmail.com",
      link: "mailto:simokb46@gmail.com",
    },
    {
      icon: "mdi:phone",
      label: "Phone",
      value: "+212642017898",
      link: "tel:+212642017898",
    },
    {
      icon: "mdi:map-marker",
      label: "Location",
      value: "Casablanca, Morocco",
      link: "#",
    },
  ];

  return (
    <section id="contact-me" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
          >
            Let's Build Something
          </motion.h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-8 my-auto">
            <div className="glass p-8 rounded-4xl space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Contact Info
              </h3>
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  onClick={() => handleReveal(info.label, info.link)}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-all shadow-neon">
                    <Icon icon={info.icon} width="24" />
                  </div>
                  <div>
                    <p className="text-foreground/30 text-xs font-bold uppercase tracking-widest">
                      {info.label}
                    </p>
                    <p className="text-foreground/70 group-hover:text-foreground transition-colors text-sm font-medium">
                      {revealedInfo[info.label.toLowerCase()]
                        ? info.value
                        : "Click to reveal"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-foreground/40 text-xs font-bold uppercase tracking-widest ml-2">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      className={`w-full glass bg-foreground/5 rounded-2xl px-6 py-4 outline-hidden focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-foreground/30 ${errors.firstName ? "ring-2 ring-red-500/50" : ""}`}
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-foreground/40 text-xs font-bold uppercase tracking-widest ml-2">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      className={`w-full glass bg-foreground/5 rounded-2xl px-6 py-4 outline-hidden focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-foreground/30 ${errors.lastName ? "ring-2 ring-red-500/50" : ""}`}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-foreground/40 text-xs font-bold uppercase tracking-widest ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full glass bg-foreground/5 rounded-2xl px-6 py-4 outline-hidden focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-foreground/30 ${errors.email ? "ring-2 ring-red-500/50" : ""}`}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground/40 text-xs font-bold uppercase tracking-widest ml-2">
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows="6"
                    className={`w-full glass bg-foreground/5 rounded-2xl px-6 py-4 outline-hidden focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-foreground/30 resize-none ${errors.message ? "ring-2 ring-red-500/50" : ""}`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-primary to-secondary text-white font-bold py-5 rounded-2xl shadow-neon hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    "Dispatching..."
                  ) : (
                    <>
                      Send Message
                      <Icon
                        icon="mdi:send"
                        width="20"
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center text-sm font-medium ${status.type === "success" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}
                  >
                    {status.msg}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default ContactMe;
