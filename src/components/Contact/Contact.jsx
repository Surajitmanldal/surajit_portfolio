import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [isSent, setIsSent] = useState(false);
    const form = useRef();
    const service_key = import.meta.env.VITE_Service_KEY;
    const template_key = import.meta.env.VITE_Template_KEY;
    const public_key = import.meta.env.VITE_Public_KEY;
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                service_key,
                template_key,
                form.current, {
                publicKey: public_key,
            }
            )
            .then(() => {
                setIsSent(true);
                form.current.reset();
                toast.success("Message sent successfully! ✅", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Failed to send message. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                }
            );
    };
    return (
        <section id='contact' className='relative flex flex-col items-center justify-center py-16 md:py-20 px-[4vw] md:px-[7vw] lg:px-[20vw] bg-gradient-to-b from-[#0a0a0a] via-[#1a1238] to-[#0a0a0a] overflow-hidden'>
            <ToastContainer />
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Section Title */}
            <div className="relative z-10 text-center mb-12">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300">
                    CONTACT
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-4"></div>
                <p className="text-gray-300 mt-4 text-lg font-medium">
                    I'd love to hear from you—reach out for any opportunities or questions!
                </p>
            </div>

            {/* Contact form */}
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_50px_rgba(130,69,236,0.15)] border border-purple-500/10
                    transform transition-all duration-500 hover:shadow-[0_0_50px_rgba(130,69,236,0.25)] hover:border-purple-500/20">

                    {/* Form header */}
                    <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Connect With Me <span className="ml-1">🚀</span>
                    </h3>

                    <form className="mt-8 space-y-6" onSubmit={sendEmail} ref={form}>
                        {/* Input group - Email */}
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 text-gray-100 border border-gray-700/50 
                                    focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                                    transition-all duration-300 placeholder:text-gray-500"
                            />
                            <div className="absolute inset-0 rounded-xl transition-all duration-300 
                                group-hover:bg-purple-500/5 group-focus-within:bg-purple-500/5 -z-10"></div>
                        </div>

                        {/* Input group - Name */}
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 text-gray-100 border border-gray-700/50 
                                    focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                                    transition-all duration-300 placeholder:text-gray-500"
                            />
                            <div className="absolute inset-0 rounded-xl transition-all duration-300 
                                group-hover:bg-purple-500/5 group-focus-within:bg-purple-500/5 -z-10"></div>
                        </div>

                        {/* Input group - Message */}
                        <div className="relative group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 text-gray-100 border border-gray-700/50 
                                    focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                                    transition-all duration-300 placeholder:text-gray-500 resize-none"
                            />
                            <div className="absolute inset-0 rounded-xl transition-all duration-300 
                                group-hover:bg-purple-500/5 group-focus-within:bg-purple-500/5 -z-10"></div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full relative group overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r 
                                from-purple-600 to-purple-500 text-white font-semibold text-lg
                                transition-all duration-300 transform hover:shadow-[0_0_20px_rgba(130,69,236,0.3)]
                                border border-purple-500/30 hover:border-purple-400/50 cursor-pointer"
                        >
                            <span className="relative z-10 ">Send Message</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 
                                translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
