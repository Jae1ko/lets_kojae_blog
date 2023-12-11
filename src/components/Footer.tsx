import React from 'react';

import { footerText } from '@/constants';

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer_inner">
                <h2 className="footer_text">
                    <div>lets_gojae</div>
                    <div>@webs</div>
                </h2>
                <div className="footer_info">
                    <div className="info">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
