import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaBolt, FaCommentDots, FaRobot, FaTimes } from "react-icons/fa";
import "./Chatbot.css";
import axios from "axios";

const suggestedQuestions = ["What is NexGuard?", "Tell me about Foodio", "What are Surajit's skills?"];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([{ role: "assistant", content: "Hi there! I'm Surajit's AI portfolio assistant. Ask me about his work, skills, or experience." }]);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [messages, isTyping]);

    useEffect(() => {
        if (!isOpen) return;

        const timeout = setTimeout(() => {
            inputRef.current?.focus();
        }, 280);

        return () => {
            clearTimeout(timeout);
        };
    }, [isOpen]);

    const handleSend = async (question) => {

        const userMessage = question?.trim() || message.trim();

        if (!userMessage || isTyping) return;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ]);

        setMessage("");
        setIsTyping(true);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/chat",
                {
                    message: userMessage,
                }
            );

            const reply = response.data.reply;

            let currentText = "";

            // Create empty assistant message
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "",
                },
            ]);

            // Typing effect
            for (const char of reply) {
                currentText += char;

                setMessages((prev) => {
                    const updated = [...prev];

                    updated[updated.length - 1] = {
                        role: "assistant",
                        content: currentText,
                    };

                    return updated;
                });

                await new Promise((resolve) =>
                    setTimeout(resolve, 15)
                );
            }

        } catch (error) {
            console.error("Chatbot error:", error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "Sorry, I couldn't connect to the server. Please try again.",
                },
            ]);

        } finally {
            setIsTyping(false);
        }
    };
    return (
        <div className="portfolio-chatbot">

            {/* Chatbot Panel */}
            <div
                className={`chatbot-panel-wrap ${isOpen ? "is-open" : ""}`}
                aria-hidden={!isOpen}
            >
                <section
                    className="chatbot-panel"
                    aria-label="Surajit's portfolio assistant"
                >

                    {/* Background Orbs */}
                    <div className="chatbot-orb chatbot-orb-one" />
                    <div className="chatbot-orb chatbot-orb-two" />


                    {/* Header */}
                    <header className="chatbot-header">

                        <div
                            className="assistant-avatar"
                            aria-hidden="true"
                        >
                            <FaRobot />

                            <span className="avatar-spark">
                                <FaBolt />
                            </span>
                        </div>


                        <div className="assistant-title">
                            <h2>Portfolio Assistant</h2>

                            <p>
                                <span className="online-dot" />
                                Online · typically replies instantly
                            </p>
                        </div>


                        <button
                            className="chatbot-icon-button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chatbot"
                        >
                            <FaTimes />
                        </button>

                    </header>


                    {/* Messages */}
                    <div
                        className="chatbot-messages"
                        aria-live="polite"
                    >

                        {/* Intro Label */}
                        <div className="chatbot-intro">
                            ASK ME ANYTHING
                        </div>


                        {/* Conversation Messages */}
                        {messages.map((item, index) => (
                            <div
                                className={`chatbot-message ${item.role}`}
                                key={`${item.role}-${index}`}
                            >

                                {/* Assistant Avatar */}
                                {item.role === "assistant" && (
                                    <div className="message-avatar">
                                        <FaRobot />
                                    </div>
                                )}


                                {/* Message */}
                                <div className="message-bubble">
                                    {item.content}
                                </div>

                            </div>
                        ))}


                        {/* Typing Indicator */}
                        {isTyping &&
                            messages[messages.length - 1]?.role !== "assistant" && (
                                <div className="chatbot-message assistant typing-message">

                                    <div className="message-avatar">
                                        <FaRobot />
                                    </div>

                                    <div
                                        className="message-bubble typing-bubble"
                                        aria-label="Assistant is typing"
                                    >
                                        <i />
                                        <i />
                                        <i />
                                    </div>

                                </div>
                            )}


                        {/* Suggested Questions */}
                        {messages.length === 1 && !isTyping && (
                            <div className="chatbot-suggestions">

                                <p>
                                    Explore the portfolio
                                </p>


                                {suggestedQuestions.map((question) => (
                                    <button
                                        key={question}
                                        onClick={() => handleSend(question)}
                                    >
                                        <span>
                                            {question}
                                        </span>

                                        <FaArrowUp />
                                    </button>
                                ))}

                            </div>
                        )}


                        {/* Scroll Anchor */}
                        <div ref={messagesEndRef} />

                    </div>


                    {/* Message Composer */}
                    <form
                        className="chatbot-composer"
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleSend();
                        }}
                    >

                        <input
                            ref={inputRef}
                            value={message}
                            onChange={(event) =>
                                setMessage(event.target.value)
                            }
                            placeholder="Ask about my work..."
                            aria-label="Your message"
                        />


                        <button
                            type="submit"
                            disabled={!message.trim() || isTyping}
                            aria-label="Send message"
                        >
                            <FaArrowUp />
                        </button>

                    </form>


                    {/* Disclaimer */}
                    <p className="chatbot-disclaimer">
                        Powered by Surajit's portfolio · AI responses may vary
                    </p>

                </section>
            </div>


            {/* Chatbot Launcher */}
            <button
                onClick={() => setIsOpen((open) => !open)}
                className={`chatbot-launcher ${isOpen ? "is-open" : ""}`}
                aria-label={
                    isOpen
                        ? "Close portfolio assistant"
                        : "Open portfolio assistant"
                }
                aria-expanded={isOpen}
            >

                <span className="launcher-ripple" />

                <span className="launcher-icon">
                    {isOpen ? (
                        <FaTimes />
                    ) : (
                        <FaCommentDots />
                    )}
                </span>

                <span className="launcher-label">
                    {isOpen ? "Close chat" : "Ask about me"}
                </span>


                {!isOpen && (
                    <span className="launcher-notification" />
                )}

            </button>

        </div>
    );
};

export default Chatbot;
