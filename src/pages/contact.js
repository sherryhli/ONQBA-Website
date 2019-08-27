import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './contact.css'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <form action="https://formspree.io/sherryhli@hotmail.com" method="POST" id="contact-form">
                <input type="email" name="reply-to"></input>
                <textarea form="contact-form" name="message"></textarea>
                <input type="submit" name="submit"></input>
            </form>
        </Layout>
    )
}

export default ContactPage;
