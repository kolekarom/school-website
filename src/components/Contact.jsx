import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from 'react-router-dom';
import { AccessTime, LocationOn } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
    const form = useRef();
    const navigate = useNavigate();
    const { translate } = useLanguage();

    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to send email
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_uq2db4s",  // Replace with EmailJS Service ID
            "template_ipzmcil",  // Replace with EmailJS Template ID
            form.current,
            "WupfNmzY_S41Alir1"  // Replace with EmailJS Public Key
        )
        .then(
            () => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset form
            },
            () => {
                alert("Failed to send message. Please try again.");
            }
        );
    };

    return (
        <div  className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <div 
                className='relative h-[90vh] bg-cover bg-center' style={{ backgroundImage: "url('https://springdale.peelschools.org/images/b82d5de2-8621-4a01-9259-2a45f8789911')" }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                           <div className="container mx-auto px-6 mt-5 lg:mt-0 lg:mb-0 mb-5">
                           <form 
    ref={form} 
    onSubmit={sendEmail} 
    className='bg-white bg-opacity-95 max-w-xs sm:max-w-md mx-auto p-4 sm:p-6 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300'
>
    <h2 className='text-3xl sm:text-5xl font-extrabold mb-6 sm:mb-8 text-center text-blue-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
        {translate('contact.title')}
    </h2>
    
    <input 
        type="text" 
        name="name" 
        placeholder={translate('contact.form.name')}
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 sm:p-4 mb-4 sm:mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
        required 
    />
    
    <input 
        type="email" 
        name="email" 
        placeholder={translate('contact.form.email')}
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 sm:p-4 mb-4 sm:mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" 
        required 
    />
    
    <textarea 
        name="message" 
        placeholder={translate('contact.form.message')}
        value={formData.message}
        onChange={handleChange}
        className='w-full p-3 sm:p-4 mb-4 sm:mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300' 
        rows="4" 
        required
    />
    
    <button 
        type='submit' 
        className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition duration-300 text-base sm:text-lg font-semibold transform hover:scale-105"
    >
        {translate('contact.form.submit')}
    </button>
</form>

                    </div>
                </div>
            </div>

            {/* Office Hours and Location Section */}
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold mb-16 text-center text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <AccessTime className="text-5xl text-blue-500 mb-6 mx-auto" style={{ fontSize: "3rem" }} />
                        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">{translate('contact.info.hours')}</h3>
                        <p className="text-gray-600 text-center">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-center">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-600 text-center">Sunday: Closed</p>
                    </div>
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <LocationOn className="text-5xl text-blue-500 mb-6 mx-auto" style={{ fontSize: "3rem" }} />
                        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">{translate('contact.info.address')}</h3>
                        <p className="text-gray-600 text-center">1234 School Street, Education City, EC 12345</p>
                    </div>
                </div>
            </div>

            {/* Google Maps Section */}
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Find Us On The Map</h2>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.6941574053094!2d75.47840537465896!3d18.812632460188887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4cf787e9a43bd%3A0x55e81e73378bcf98!2sApex%20English%20School%20Patoda!5e1!3m2!1sen!2sin!4v1740471598023!5m2!1sen!2sin"
                        frameBorder="0"
                        className="w-full h-[500px] border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>

 );
}

export default Contact;
