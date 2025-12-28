import { BriefcaseBusinessIcon, Code, ShieldCheck, User, User2Icon } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Embedded Systems & IoT Explorer
                    </h3>
                    <p className="text-muted-foreground">
                        I build embedded systems and IoT solutions that connect hardware to the digital world, focusing on efficient C/C++ development for microcontrollers and connected devices.
                    </p>
                    <p className="text-muted-foreground">
                        I’m also exploring cybersecurity, learning how to secure embedded and networked systems to make them more resilient and reliable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch

                        </a>
                        <a
                            href="/Soumri-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">

                            Download CV
                        </a>



                    </div>


                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />

                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Embedded Systems & IoT Development</h4>
                                <p className="text-muted-foreground"> I develop embedded systems and IoT solutions that turn hardware into smart, connected devices, with a focus on reliable C/C++ development and system integration.</p>

                            </div>

                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <ShieldCheck className="h-6 w-6 text-primary" />


                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Embedded & IoT Security Specialist </h4>
                                <p className="text-muted-foreground"> I help secure embedded and connected systems by identifying vulnerabilities and implementing protective measures, ensuring devices and networks remain safe, reliable, and resilient.</p>



                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                < Code className="h-6 w-6 text-primary" />


                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground"> I’m expanding my skill set into web development, building responsive interfaces and dashboards to complement my embedded and IoT systems. I’m actively learning React, Tailwind, and modern frontend practices.</p>



                            </div>
                        </div>



                    </div>


                </div>
            </div>

        </div>

    </section>
};