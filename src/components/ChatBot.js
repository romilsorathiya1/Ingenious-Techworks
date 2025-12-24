'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import styles from '../styles/Chatbot.module.css';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const { messages, sendMessage, status, error } = useChat({
        transport: new DefaultChatTransport({
            api: '/api/chat',
        }),
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const quickQuestions = [
        "What services do you offer?",
        "How can I contact you?",
        "Do you build mobile apps?",
        "What is your pricing?"
    ];

    const handleQuickQuestion = (question) => {
        if (status !== 'ready') return;
        sendMessage({ text: question });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() && status === 'ready') {
            sendMessage({ text: inputValue });
            setInputValue('');
        }
    };

    const isLoading = status === 'streaming' || status === 'submitted';

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                className={`${styles.chatToggle} ${isOpen ? styles.open : ''}`}
                onClick={toggleChat}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                        <circle cx="8" cy="10" r="1.5" />
                        <circle cx="12" cy="10" r="1.5" />
                        <circle cx="16" cy="10" r="1.5" />
                    </svg>
                )}
                <span className={styles.notificationDot}></span>
            </button>

            {/* Chat Window */}
            <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
                {/* Header */}
                <div className={styles.chatHeader}>
                    <div className={styles.headerInfo}>
                        <div className={styles.avatar}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <div className={styles.headerText}>
                            <h3>Ingenious Support</h3>
                            <span className={styles.status}>
                                <span className={styles.statusDot}></span>
                                Online
                            </span>
                        </div>
                    </div>
                    <button className={styles.closeBtn} onClick={toggleChat}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>

                {/* Messages Container */}
                <div className={styles.messagesContainer}>
                    {messages.length === 0 && (
                        <div className={styles.welcomeMessage}>
                            <div className={styles.welcomeIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                                </svg>
                            </div>
                            <h4>Welcome to Ingenious Techworks! 👋</h4>
                            <p>How can we help you today? Ask us anything about our services.</p>

                            <div className={styles.quickQuestions}>
                                <p className={styles.quickLabel}>Quick Questions:</p>
                                {quickQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        className={styles.quickBtn}
                                        onClick={() => handleQuickQuestion(question)}
                                        type="button"
                                        disabled={isLoading}
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.botMessage}`}
                        >
                            {message.role === 'assistant' && (
                                <div className={styles.messageAvatar}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                    </svg>
                                </div>
                            )}
                            <div className={styles.messageContent}>
                                {message.parts?.map((part, index) =>
                                    part.type === 'text' ? <p key={index}>{part.text}</p> : null
                                ) || <p>{message.content}</p>}
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className={`${styles.message} ${styles.botMessage}`}>
                            <div className={styles.messageAvatar}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                </svg>
                            </div>
                            <div className={styles.messageContent}>
                                <div className={styles.typingIndicator}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className={`${styles.message} ${styles.errorMessage}`}>
                            <p>⚠️ Something went wrong. Please try again.</p>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleFormSubmit} className={styles.inputForm}>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            name="input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                            disabled={isLoading}
                            className={styles.input}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !inputValue.trim()}
                            className={styles.sendBtn}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>
                    <p className={styles.poweredBy}>Powered by <span>Ingenious AI</span></p>
                </form>
            </div>
        </>
    );
}
