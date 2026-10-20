import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone, Send } from 'lucide-react';

const contacts = [
  { label: 'Call us', display: '07082131443', href: 'tel:+2347082131443' },
  { label: 'Call us', display: '07077525210', href: 'tel:+2347077525210' },
];

export default function ContactSection({ variant = '' }) {
  const [sent, setSent] = useState(false);

  function submitRequest(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Service request: ${form.get('service')}`;
    const body = [
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Location: ${form.get('location') || 'Not provided'}`,
      `Service: ${form.get('service')}`,
      '',
      'How can we help?',
      form.get('details'),
    ].join('\n');
    setSent(true);
    window.location.href = `mailto:habeebo740@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <section className={`contact-section ${variant}`} id="contact">
    <div className="contact-wrap">
      <div className="contact-heading">
        <span className="contact-eyebrow">LET’S GET STARTED</span>
        <h2>How can we help you?</h2>
        <p>Tell us what you need and our team will get back to you.</p>
      </div>
      <div className="contact-layout">
        <form className="request-form" id="request" onSubmit={submitRequest}>
          <h3>Request a Service</h3>
          <div className="request-fields">
            <label>Your name<input name="name" autoComplete="name" required placeholder="Full name" /></label>
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="070..." /></label>
            <label>Service needed<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Engineering service</option><option>CCTV installation</option><option>Intercom system</option><option>RFID access control</option><option>Other</option></select></label>
            <label>Location<input name="location" autoComplete="address-level2" placeholder="City or area" /></label>
            <label className="request-details">How can we help?<textarea name="details" required rows="4" placeholder="Briefly describe the work you need" /></label>
          </div>
          <button className="request-submit" type="submit">Send Request <Send size={16}/></button>
          {sent && <p className="request-note" role="status">Your email app should open with the request ready to send. If it doesn’t, contact us directly below.</p>}
        </form>
        <aside className="contact-card">
          <h3>Contact EyeView</h3>
          <p>Prefer to talk to us directly? Call or email and we’ll be glad to help.</p>
          <div className="contact-items">
            {contacts.map(({label,display,href})=><a className="contact-item" key={display} href={href}><span><Phone size={18}/></span><span><small>{label}</small><b>{display}</b></span><ArrowRight size={16}/></a>)}
            <a className="contact-item" href="mailto:habeebo740@gmail.com"><span><Mail size={18}/></span><span><small>Email us</small><b>habeebo740@gmail.com</b></span><ArrowRight size={16}/></a>
          </div>
          <div className="contact-location"><MapPin size={17}/> Serving engineering and ICT service requests.</div>
        </aside>
      </div>
    </div>
  </section>;
}
