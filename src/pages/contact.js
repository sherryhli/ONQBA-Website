import React from 'react';
import ReactContactForm from 'react-mail-form';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './contact.css'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <ReactContactForm
                to="sherryhli@hotmail.com"
                titlePlaceholder="Subject (Max 100 characters)"
                titleMaxLength="100"
                contentsPlaceholder="Message (Max 2500 characters)"
                contentsMaxLength="2500"
                buttonText="Submit"
                className="contact-form"
            />
        </Layout>
    )
}

export default ContactPage;
