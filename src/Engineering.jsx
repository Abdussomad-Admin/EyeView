import React, { useEffect, useRef } from 'react';
import { ArrowRight, Eye, Settings, ShieldCheck, Clock3, Handshake, Wrench, Truck, ClipboardList, Search, CircleCheck, Users, Gauge, Play, Cog, HardHat, Hammer } from 'lucide-react';
import ContactSection from './ContactSection.jsx';

const img='/Images/';
const benefits=[
  {icon:Settings,title:'Experienced Technicians',text:'Skilled and certified engineering team.'},
  {icon:ShieldCheck,title:'Quality & Safety',text:'We follow strict safety and quality standards.'},
  {icon:Clock3,title:'Minimal Downtime',text:'Fast and efficient service delivery.'},
  {icon:Handshake,title:'Long-Term Support',text:'We’re with you beyond the repair.'},
];
const services=[
  {icon:Wrench,title:'Preventive Maintenance',text:'Keep your equipment in top condition and avoid costly breakdowns.',list:['Routine inspections','Fluid & filter changes','Performance checks','Full system diagnostics']},
  {icon:Hammer,title:'Repair & Overhaul',text:'Expert repair services for all major components and systems.',list:['Engine repair','Transmission repair','Hydraulic system repair','Component replacement']},
  {icon:Settings,title:'Hydraulic System Services',text:'Specialized hydraulic solutions for maximum performance.',list:['Pump & motor repair','Valve servicing','Hose & fitting replacement','System pressure testing']},
  {icon:Truck,title:'Heavy Equipment Service',text:'Expert care for all types of heavy equipment and industrial machines.',list:['Excavators','Wheel loaders','Dozers & graders','Telehandlers & more']},
];
const process=[
  {icon:ClipboardList,title:'Request Service',text:'Tell us what you need (online or by phone).'},
  {icon:Search,title:'Assessment',text:'We inspect and diagnose the issue.'},
  {icon:Wrench,title:'Service & Repair',text:'Our team gets to work with the right tools.'},
  {icon:CircleCheck,title:'Testing',text:'We run full checks to ensure quality.'},
  {icon:Truck,title:'Handover',text:'Your equipment is back and ready to work.'},
];
function EngineeringHeader(){return <header className="eng-header"><div className="eng-wrap eng-nav"><a className="eng-brand" href="/#home"><span><Eye/></span><b>EyeView<small>Engineering With ICT Solution</small></b></a><nav><a href="/#home">Home</a><a href="/#about">About Us</a><a className="selected" href="/engineering">Engineering</a><a href="/ict-solutions">ICT Solutions</a><a href="/#projects">Projects</a><a href="#contact">Contact</a></nav><a className="eng-start" href="#request">Get Started <ArrowRight size={14}/></a></div></header>}
function EngButton({children,secondary=false,href='#request'}){return <a className={`eng-button ${secondary?'secondary':''}`} href={href}>{children}<ArrowRight size={14}/></a>}
function Hero(){return <section className="eng-hero"><div className="eng-hero-image"/><div className="eng-hero-shade"/><div className="eng-wrap eng-hero-content"><div className="eng-crumb"><a href="/#home">HOME</a><span>›</span> ENGINEERING SERVICES</div><h1>Engineering Services<br/><em>Keep Your Assets Running</em></h1><p>We deliver reliable, professional, and efficient engineering services for heavy equipment and industrial systems. From maintenance to full-scale repair, we keep your operations safe, productive, and on schedule.</p><div className="eng-actions"><EngButton>Request a Service</EngButton><EngButton secondary href="#video">Watch Our Process <Play size={13}/></EngButton></div></div></section>}
function Benefits(){return <section className="eng-benefits"><div className="eng-wrap eng-benefit-grid"><div className="eng-benefit-intro"><div className="eng-label">WHY CHOOSE OUR ENGINEERING SERVICES</div><h2>Expertise. Equipment. Results.</h2><p>We combine skilled professionals, modern tools, and proven processes to deliver top-quality engineering services for your heavy and industrial equipment.</p></div>{benefits.map(({icon:Icon,title,text})=><article className="eng-benefit" key={title}><span><Icon/></span><b>{title}</b><p>{text}</p></article>)}</div></section>}
function Services(){return <section className="eng-services"><div className="eng-wrap"><div className="eng-services-top"><div className="eng-services-intro"><div className="eng-label">OUR ENGINEERING SERVICES</div><h2>Comprehensive Engineering Solutions</h2><p>We offer a wide range of services to keep your equipment running at peak performance. Our services are designed to reduce downtime, improve efficiency and extend the life of your assets.</p></div><div className="eng-gallery"><img src={img+'Engine.jpeg'} alt="Technician servicing heavy equipment"/><img src={img+'Hydraulic Excavator Digging Earth.png'} alt="Hydraulic excavator at a work site"/><img src={img+'CollectionOfTractors.jpeg'} alt="Heavy equipment fleet"/></div></div><div className="eng-service-grid">{services.map(({icon:Icon,title,text,list})=><article className="eng-service-card" key={title}><span className="eng-service-icon"><Icon/></span><h3>{title}</h3><p>{text}</p><ul>{list.map(item=><li key={item}>{item}</li>)}</ul><a href="#request">Learn More <ArrowRight size={14}/></a></article>)}</div></div></section>}
function Action(){
  const videoRef=useRef(null);
  useEffect(()=>{
    const video=videoRef.current;
    if(!video)return;
    video.muted=true;
    video.playbackRate=0.75;
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){video.play().catch(()=>{});}
      else{video.pause();}
    },{threshold:0.25});
    observer.observe(video);
    return()=>observer.disconnect();
  },[]);
  return <section className="eng-action" id="video"><div className="eng-wrap eng-action-grid"><div className="eng-action-copy"><div className="eng-label">SEE OUR WORK IN ACTION</div><h2>Engineering in Action</h2><p>Watch how our skilled team diagnoses, repairs and restores heavy equipment using modern tools and proven techniques.</p><EngButton href="#video-frame">Watch Video <Play size={13}/></EngButton></div><div className="eng-video" id="video-frame"><video ref={videoRef} muted playsInline controls preload="metadata" poster={img+'Site Inspection Beside CAT Excavator.png'}><source src="/Working%20in%20workshop.mp4" type="video/mp4"/>Your browser does not support embedded video.</video></div><div className="eng-action-points">{[[Cog,'Real Work, Real Results','See our team in action.'],[Gauge,'Modern Tools & Technology','Advanced tools for better results.'],[Users,'Professional Technicians','Skilled. Certified. Experienced.'],[HardHat,'Your Equipment, Our Priority','We keep you moving.']].map(([Icon,title,text])=><div key={title}><span><Icon/></span><p><b>{title}</b><small>{text}</small></p></div>)}</div></div></section>
}
function Process(){return <section className="eng-process"><div className="eng-wrap eng-process-grid"><div className="eng-process-intro"><div className="eng-label">OUR PROCESS</div><h2>Simple Steps. Lasting Solutions.</h2><p>We make the service process easy and transparent, from booking to completion.</p><EngButton>Get Started</EngButton></div><div className="eng-steps">{process.map(({icon:Icon,title,text},i)=><React.Fragment key={title}><article className="eng-step"><span className="step-number">{String(i+1).padStart(2,'0')}</span><Icon className="step-icon"/><b>{title}</b><small>{text}</small></article>{i<process.length-1&&<ArrowRight className="step-arrow" size={15}/>}</React.Fragment>)}</div></div></section>}
function CTA(){return <section className="eng-cta"><div className="eng-wrap eng-cta-inner"><div><div className="eng-label">READY TO GET STARTED?</div><h2>Keep Your Business Moving</h2><p>Partner with EyeView Engineering for reliable, professional<br/> and efficient engineering services.</p></div><EngButton>Request a Service</EngButton></div></section>}
function Footer(){return <footer className="eng-footer"><div className="eng-wrap"><div className="eng-footer-top"><a className="eng-brand" href="/#home"><span><Eye/></span><b>EyeView<small>Engineering With ICT Solution</small></b></a><nav><a href="/#home">Home</a><a href="/#about">About Us</a><a className="selected" href="/engineering">Engineering</a><a href="/ict-solutions">ICT Solutions</a><a href="/#projects">Projects</a><a href="#contact">Contact</a></nav><div className="eng-social">f　𝕏　in　▶</div></div><div className="eng-footer-bottom"><span>© 2025 EyeView Engineering With ICT Solution. All rights reserved.</span><span>Engineering Today　|　Technology Tomorrow</span></div></div></footer>}
export default function EngineeringPage(){return <><EngineeringHeader/><main className="engineering-page"><Hero/><Benefits/><Services/><Action/><Process/><CTA/><ContactSection variant="contact-engineering"/></main><Footer/></>}
