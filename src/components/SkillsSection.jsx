import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    //Embedded systems & IoT 
    { name: "C/C++", level: 95, category: "Embedded systems & IoT" },
    { name: "Circuit design & prototyping", level: 95, category: "Embedded systems & IoT" },
    { name: "Communication protocols (UART, SPI, I2C, CAN – basics)", level: 95, category: "Embedded systems & IoT" },
    { name: "VHDL", level: 70, category: "Embedded systems & IoT" },
    { name: "IoT Solutions & Connected Devices", level: 95, category: "Embedded systems & IoT" },
    { name: "Software Testing", level: 60, category: "Embedded systems & IoT" },
    { name: "Arduino IDE", level: 95, category: "Embedded systems & IoT" },

    //cybersecurity
    { name: "Linux", level: 60, category: "Cybersecurity" },
    { name: "Python", level: 60, category: "Cybersecurity" },
    { name: "cisco packet tracer", level: 95, category: "Cybersecurity" },

    //web development
    { name: "HTML/CSS", level: 95, category: "web development" },
    { name: "JavaScript", level: 30, category: "web development" },
    { name: "PHP", level: 30, category: "web development" },
    { name: "MySQL", level: 30, category: "web development" },
    { name: "ReactJS", level: 30, category: "web development" },
    { name: "Tailwind CSS", level: 40, category: "web development" },
    { name: "Bootstrap", level: 30, category: "web development" },
    { name: "Angular", level: 30, category: "web development" },
    { name: "Git & GitHub", level: 70, category: "web development" },
];
const categories = ["all", "Embedded systems & IoT", "Cybersecurity", "web development"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-24 px-4 relative bg-secoundary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My<span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}

                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize"
                            , activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>{category}</button>

                ))
                }

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{ width: skill.level + "%" }}

                            />


                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground"> {skill.level}% </span>


                        </div>




                    </div>




                ))
                }

            </div>

        </div>

    </section>;
};
