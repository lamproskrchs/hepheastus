"use client"

import { FloatingNav } from "@/components/ui/floating-navbar";
import { Vortex } from "@/components/ui/vertex";
import { Menu, Transition } from "@headlessui/react";
import { IconHome, IconUser, IconRecordMail, IconNews, IconMenu, IconSettingsCheck, IconBriefcase, IconSchool, IconTools } from "@tabler/icons-react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Fragment } from "react";

const Teamate: React.FC = () => {

    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();

    const id = params.id; // Dynamic segment from the route

    // Define a type for your icon map
    type IconMapType = {
        IconBriefcase: React.ComponentType<any>;
        IconSchool: React.ComponentType<any>;
        IconTools: React.ComponentType<any>;
        IconUser: React.ComponentType<any>;
    };

    // Create the icon map with explicit type
    const IconMap: IconMapType = {
        IconBriefcase: IconBriefcase,
        IconSchool: IconSchool,
        IconTools: IconTools,
        IconUser: IconUser,
    };

    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Project",
            link: "/projects",
            icon: <IconSettingsCheck className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "The team",
            link: "/team",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact us",
            link: "/contact",
            icon: <IconRecordMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    const supervising_students = [
        {
            id: "fotis_rentzis",
            name: "Fotis Rentzis",
            head: "Team Director",
            photoUrl: "/boy.png",
            departmentImageUrl: "/ece.png",
            small_description: "Electrical & Computer Engineering student with strong experience in embedded systems, robotics, and digital technologies.",
            resume: [
                {
                    section_title: "Education",
                    icon: "IconSchool",
                    description: "Undergraduate student in Electrical & Computer Engineering | University of Peloponnese"
                },
                {
                    section_title: "Technical Skills & Knowledge",
                    icon: "IconTools",
                    description: "Integrated Circuit Design, Computer Architecture, FPGA Programming, Arduino, Raspberry Pi, Embedded Systems Design for Automation, Hardware Development for Embedded Platforms, Telecommunications Fundamentals, Microprocessor and Microelectronics Applications, C and Python Programming, Smart Cities (eGovernment, Open Data), Internet of Things (IoT), Renewable Energy Sources (RES), Public Speaking."
                },
                {
                    section_title: "Seminars & Camps",
                    icon: "IconSchool",
                    description: "Career Guidance Program: 'Robotics and Digital Creation' (2015–2016) by the Network for Innovation and Creativity in the School of the Future, under KESYP Patras. Diploma recipient in 'Robotics and Digital Creation' (2017–2018). Participant at the WRO Teacher Camp 2019, OTE Academy, Athens."
                },
                {
                    section_title: "Competitions & Projects",
                    icon: "IconBriefcase",
                    description: "World Robot Olympiad 2019 – International Final in Hungary (Certificate of Participation). Student Festival of Digital Creativity – Project: 'Harnessing Underwater Currents'. Exhibitor at the 1st Patras IQ Technology Transfer Exhibition. Member of the 7th Regional Development Conference (Achaia Clauss, September 2019)."
                },
                {
                    section_title: "Speaking Engagements",
                    icon: "IconBriefcase",
                    description: "Key speaker at a certification seminar organized by the Hellenic Society for Neurosciences on Artificial Intelligence. Speaker at the Student Festival of Digital Creativity organized by the Ministry of Education (April 11, 2019)."
                },
                {
                    section_title: "Languages",
                    icon: "IconUser",
                    description: "Greek (native), English (fluent)"
                }
            ]
        },


        {
            id: "lampros_karachristos",
            name: "Lampros Karachristos",
            head: "Head of informatics",
            photoUrl: "/boy.png",
            departmentImageUrl: "/ece.png",
            small_description: "Software Engineer, Full stack developer , junior-mid Developer",
            resume: [
                {
                    section_title: "Education",
                    icon: "IconSchool",
                    description: "Student on Electrical & Computer engineering | University of peloponnese"
                },
                {
                    section_title: "Current position : Full-stack web developer at Novidea 2024 - today ",
                    icon: "IconBriefcase",
                    description: `Full Stack Web Developer specializing in creating POS management services that automate routine tasks, enabling technicians to focus on delivering top-quality results. With expertise in both front-end and back-end development, I design seamless, high-performance systems that enhance efficiency and ensure fast processing speeds. My solutions help businesses streamline operations, reduce human error, and improve overall productivity. By leveraging modern web technologies, I strive to provide scalable, user-friendly applications that support growth and innovation while meeting the ever-evolving needs of the industry.`
                },
                {
                    section_title: "Android Developer 2021-2022 (Ad-hoc outsourcer)",
                    icon: "IconBriefcase",
                    description: `Created Management android applications for companies to track issues on their
                    products around Greece and create the most suitable communication environment
                    for their workers.
                    This boosted the companies reaction speed for their costumers`
                },
                {
                    section_title: "Full-stack web developer 2022-2024 (Ad-hoc outsoucer)",
                    icon: "IconBriefcase",
                    description: `Created Management android applications for companies to track issues on their
                    products around Greece and create the most suitable communication environment
                    for their workers.
                    This boosted the companies reaction speed for their costumers.
                    For the android applications to have the maximum performance they need the
                    best back-end . During those 2 years i achieved creating server-side servers
                    with the kotlin programming language and the Quarkus framework that can
                    stand multiple requests per second handling a lot of data, therefore having the
                    application running on maximum speed.
                    Created web applications (front-end )for a quick visit on the workers app if
                    they couldn't access, for various reasons, their mobile app.
                    Created web applications (front-end) for the companies to manage the data of
                    those applications and track the issues as long as their workers during their
                    working hours
                    `
                },
                {
                    section_title: "Volunteer at Lifechain - 2023-2024",
                    icon: "IconUser",
                    description: `Lifechain was a team that created a safety app for universities.`
                },
                {
                    section_title: "Skills",
                    icon: "IconTools",
                    description: `Java(very good), Kotlin(expert)
                    HTML(Very good), CSS(good), Tailwind
                    CSS(very good), JavaScript(very good),
                    Typescript(good)
                    Python(Very good)
                    Next.js(Very good), SpringBoot(Very good),
                    Quarkus(Good), ReactNative(Good)
                    PostgreSQL(Good)`
                },
                {
                    section_title: "Languages",
                    icon: "IconUser",
                    description: "English (Fluent), Greek (native)"
                },
            ]
        },

        {
            id: "fillipos_stamos",
            name: "Fillipos Stamos",
            head: "Head of aerodynamics/ Project Hermes",
            photoUrl: "/boy.png",
            departmentImageUrl: "/mech.png",
            small_description: "Mechanical Engineering Student, Robotics Enthusiast, Team Leader, Technical Director",
            resume: [
                {
                    section_title: "Education",
                    icon: "IconSchool",
                    description: "Mechanical Engineering Student | University of Peloponnese"
                },
                {
                    section_title: "Formula Student - Minautor Racing Team",
                    icon: "IconBriefcase",
                    description: "Founder of the 'Minautor Racing' Formula Student team. Technical Director for a short period, currently leading the aerodynamics and cooling subgroup. Our goal is to optimize car performance throughout its journey, from engine cooling to cornering grip for better lap times."
                },
                {
                    section_title: "Project Hermes - Rocket Engineering",
                    icon: "IconBriefcase",
                    description: "Team Director of Project Hermes, responsible for aerodynamics. We are developing a rocket to participate in the Czech Rocket Challenge, aiming to reach an altitude of 1 kilometer."
                },
                {
                    section_title: "SimUoPLabs - Student Research Group",
                    icon: "IconBriefcase",
                    description: "Leader of SimUoPLabs, a student research group at the University of Peloponnese. We specialize in static and fluid dynamics analyses for engineering applications."
                },
                {
                    section_title: "Experience in Digital Media and Production",
                    icon: "IconBriefcase",
                    description: "Created an internet radio station at 2nd Lyceum of Koropi and produced podcasts, acting as both producer and technician. Additionally, I have experience in sound engineering, lighting design, and music instrument performances."
                },
                {
                    section_title: "F1 in Schools Participation",
                    icon: "IconBriefcase",
                    description: "Participated in the F1 in Schools competition as part of the Bluearrowgr team during middle and high school at the Gymnasium and Lyceum of Vouliagmeni."
                },
                {
                    section_title: "Skills",
                    icon: "IconTools",
                    description: "Mechanical Engineering, Technical Direction, Aerodynamics, Fluid Dynamics, Project Management, Team Leadership, Robotics"
                },
                {
                    section_title: "Languages",
                    icon: "IconUser",
                    description: "Greek (native), English (fluent)"
                }
            ]
        },

        {
            id: "panagiotis_diamantis",
            name: "Panagiotis Diamantis",
            head: "Head of Project Athena",
            photoUrl: "/boy.png",
            departmentImageUrl: "/civil.png",
            small_description: "Civil Engineering Student, Autocad Designer, Seminar Participant",
            resume: [
                {
                    section_title: "Education",
                    icon: "IconTools",
                    description: "Civil Engineering Student | University of Peloponnese"
                },
                {
                    section_title: "Professional Experience",
                    icon: "IconBriefcase",
                    description: "Assistant to a Civil Engineer, responsible for producing professional architectural designs, performing on-site surveys, and attending professional meetings."
                },
                {
                    section_title: "Seminars",
                    icon: "IconSchool",
                    description: "Attended a seminar on new materials in 2018. Participated in a lecture titled 'Protection of Structures from Natural Disasters' by internationally recognized professors Andreas Langousis and Stefanos Dritsos."
                },
                {
                    section_title: "Interests",
                    icon: "IconTools",
                    description: "Autocad Design, Smart Campus, Supporting tasks across various technical fields"
                },
                {
                    section_title: "Languages",
                    icon: "IconUser",
                    description: "Greek (native), English (fluent)"
                }
            ]
        },


        {
            id: "christos_rompovilas",
            name: "Christos Rampavilas",
            head: "Head of Micro-electronics reasearch/ Project Zephyros",
            photoUrl: "/boy.png",
            departmentImageUrl: "/ece.png",
            small_description: "Embedded Systems Enthusiast, FPGA Programmer, Circuit Designer",
            resume: [
                {
                    section_title: "Education",
                    icon: "IconSchool",
                    description: "Department of Electrical and Computer Engineering | University of Peloponnese"
                },
                {
                    section_title: "Research Interests",
                    icon: "IconTools",
                    description: "Integrated Circuit Design, Computer Architecture, FPGA Board Programming, Embedded Systems Applications and Design for Automation, Hardware Design for Embedded Systems"
                },
                {
                    section_title: "Languages",
                    icon: "IconUser",
                    description: "Greek (native), English (fluent)"
                }
            ]
        },



        {
            id: "athanasios_daoulas",
            name: "Athanassios Daoulas",
            head: "Head of Hyron",
            photoUrl: "/boy.png",
            departmentImageUrl: "/ece.png",
            small_description: "Electrical Systems Technician, Full-Time Electrician, Passionate Learner",
            resume: [
                {
                    section_title: "Education",
                    icon: "IconSchool",
                    description: "Second-year student at the School of Engineering, Department of Electrical and Computer Engineering, University of Peloponnese. Graduate of the 1st Vocational High School of Haidari with honors and awards. Degree in Electrical Systems, Installations, and Networks."
                },
                {
                    section_title: "Certifications",
                    icon: "IconBriefcase",
                    description: "Professional electrician licenses A, C, D, and F specialty. Holder of ECDL certification in basic computer skills. English language certificate: ESB B2 (Lower)."
                },
                {
                    section_title: "Professional Experience",
                    icon: IconBriefcase,
                    description: "Full-time electrician specializing in internal electrical installations."
                },
                {
                    section_title: "Research Interests",
                    icon: "IconTools",
                    description: "Renewable energy sources, Electronics, Automation & PLC Programming, Electrical Design, Internal Electrical Installations."
                },
                {
                    section_title: "Technical Skills",
                    icon: "IconTools",
                    description: "Internal Electrical Installations, Automation Systems"
                },
                {
                    section_title: "Social Skills",
                    icon: "IconUser",
                    description: "Strong communication skills, High motivation"
                },
                {
                    section_title: "Languages",
                    icon: "IconUser",
                    description: "Greek (native), English (very good)"
                },
            ]
        }



    ]

    const student = supervising_students.find((s) => s.id === id);

    if (!student) {
        return <p className="text-white">Student not found.</p>;
    }

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (

        <main className="flex flex-col w-full h-screen overflow-y-scroll bg-gradient-to-br to-black_end from-lightblack via-90%">
            <div className="relative  w-full">
                <FloatingNav navItems={navItems} />
            </div>
            <div className="flex flex-row w-full py-[30px] px-[100px] max-sm:px-[50px] items-center justify-between">
                <div className="flex flex-row items-center space-x-[35px]">
                    <p className="text-2xl text-white font-extrabold">Hephaestus</p>
                    <div className="flex flex-row items-center space-x-8 text-lg text-gray-500 max-sm:hidden">
                        <a href="/" className="cursor-pointer hover:text-shadow-[0_4px_8px_#FFFFFF] hover:text-white p-2">
                            home
                        </a>
                        <a href="/projects" className="cursor-pointer hover:text-shadow-[0_4px_8px_#FFFFFF] hover:text-white p-2">
                            Projects
                        </a>
                        <a href="/team" className="cursor-pointer hover:text-shadow-[0_4px_8px_#FFFFFF] hover:text-white p-2">
                            The team
                        </a>
                        <a href="/contact" className="cursor-pointer hover:text-shadow-[0_4px_8px_#FFFFFF] hover:text-white p-2">
                            Contact us
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center space-x-2 text-lg text-gray-500 max-sm:hidden">
                    <a
                        target="_blank"
                        href="https://forms.gle/dYWvBPTG7Btp8Wdt6"
                        className="cursor-pointer hover:text-shadow-[0_4px_8px_#FFFFFF] hover:text-white p-2"
                    >
                        Become a member
                    </a>
                </div>
                <Menu
                    as="div"
                    className="relative inline-block text-left md:hidden max-sm:visible"
                >
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <IconMenu />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/"
                                            className={classNames(
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Home
                                        </a>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/projects"
                                            className={classNames(
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Project
                                        </a>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="team"
                                            className={classNames(
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            The Team
                                        </a>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/contact"
                                            className={classNames(
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Contact us
                                        </a>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="https://github.com/xartokoptiko/hepheastus/blob/main/LICENSE.txt"
                                            className={classNames(
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            License
                                        </a>
                                    )}
                                </Menu.Item>


                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            target="_blank"
                                            href="https://forms.gle/dYWvBPTG7Btp8Wdt6"
                                            className={classNames(
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Become a member
                                        </a>
                                    )}
                                </Menu.Item>

                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            <section className="mx-4 md:mx-10 py-12 h-full overflow-y-scroll">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* IMAGES */}
                    <div
                        className="
    /* Always: align and size */
    self-start h-fit flex flex-col items-center space-y-8

    /* Only on md and above: become sticky */
    md:sticky md:top-20
  "
                    >
                        <img
                            src={student.photoUrl}
                            alt={`${student.name} photo`}
                            className="w-44 h-44 rounded-full object-cover"
                        />
                        <img
                            src={student.departmentImageUrl}
                            alt={`${student.head} department`}
                            className="w-14 h-14 object-cover rounded-full"
                        />
                    </div>

                    {/* TEXT & DIVIDER */}
                    <div className="md:col-span-2">
                        {/* Header */}
                        <div className="text-center space-y-2 mb-8">
                            <h1 className="text-5xl font-bold text-white">{student.name}</h1>
                            <h2 className="text-xl text-indigo-300">{student.head}</h2>
                            <p className="mt-2 text-gray-400 max-w-lg mx-auto">{student.small_description}</p>
                        </div>

                        {/* Sections */}
                        <div className="space-y-6 divide-y divide-gray-600">
                            {student.resume.map((sec, i) => {
                                // Add type assertion for valid icon keys
                                const iconKey = sec.icon as keyof typeof IconMap;
                                const IconComponent = IconMap[iconKey] || (() => null);

                                return (
                                    <div key={i} className="pt-6">
                                        <div className="flex items-center space-x-4">
                                            <IconComponent className="h-6 w-6 text-indigo-300 flex-shrink-0" />
                                            <h3 className="text-2xl font-semibold text-white">
                                                {sec.section_title}
                                            </h3>
                                        </div>
                                        <p className="mt-2 text-gray-300 leading-relaxed">
                                            {sec.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Teamate;