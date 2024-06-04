import React, { useContext } from 'react';
import './Faq.css';
import { FaqContext } from '../../context/FaqContext';

const Faq = () => {
    const { faqData } = useContext(FaqContext);

    return (
        <div className="faq-container container">
            {faqData.map((item, index) => (
                <div className="faq-item" key={index}>
                    <div className="faq-question">
                        <h3>{item.question}</h3>
                    </div>
                    <div className="faq-answer">
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Faq;
