import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:achums2121@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} className="text-primary" />
            achums2121@gmail.com
          </a>
          <a
            href="tel:+918138095803"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={20} className="text-primary" />
            +91 8138095803
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
          <MapPin size={20} className="text-primary" />
          <span>Bengaluru, Karnataka, India</span>
        </div>

        <a
          href="mailto:achums2121@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-medium text-lg hover:bg-primary/10 transition-all duration-300 group"
        >
          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
