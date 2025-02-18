const Map = ({}) => {
    return (
        <section id="welcome" className="flex h-[50vh] w-full items-center justify-center overflow-hidden bg-[#000] px-4 md:px-0">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419.3093530443102!2d-1.1901099888423565!3d52.672451271985096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877607586b3901f%3A0x3e2cc8c299288365!2sLara%20Restaurant!5e0!3m2!1sen!2sin!4v1732026568402!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale invert-0"
            ></iframe>
        </section>
    );
};

export default Map;
