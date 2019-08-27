import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './contact.css'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <p>To contact us, fill in the form below or email <a href="mailto:president@onqba.ca">president@onqba.ca</a> or <a href="secretary@onqba.ca">secretary@onqba.ca</a>. You can also message us on <a href="https://twitter.com/OntarioQuizbowl">Twitter</a> or <a href="https://www.facebook.com/ONQBA/">Facebook</a>.</p>
            <form action="https://formspree.io/meghan.torchia@gmail.com" method="POST" id="contact-form" className="contact-form">
                <input type="email" name="reply-to" placeholder="Your email address"></input>
                <textarea form="contact-form" name="message" rows="15" cols="50" placeholder="Your message"></textarea>
                <input type="submit"></input>
            </form>
        </Layout>
    )
}

export default ContactPage;
