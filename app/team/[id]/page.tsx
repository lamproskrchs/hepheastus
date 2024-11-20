"use client"

import { FloatingNav } from "@/components/ui/floating-navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import { Vortex } from "@/components/ui/vertex";
import { Menu, Transition } from "@headlessui/react";
import { IconHome, IconUser, IconRecordMail, IconNews, IconMenu, IconSettingsCheck } from "@tabler/icons-react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Fragment } from "react";

const Teamate: React.FC = () => {

    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();

    const id = params.id; // Dynamic segment from the route

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
        {
          name: "Blog",
          link: "/blog",
          icon: <IconNews className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
      ];

    const supervising_students = [
        {
            id: "lampros_karachristos",
            name: "Lampros Karachristos",
            photo: "/boy.png",
            head: "Head of informatics",
            cv_file: "lampros_karachristos.pdf",
            school: "/ece.png",
            description: "Lampros Karachristos is a dynamic Software Engineer, born in 2003, who transformed his early passion for programming into a successful career. Currently pursuing Electrical & Computer Engineering at the University of Peloponnese (since 2022), where he excels in programming courses while continuing to develop his knowledge in electrical engineering. His professional journey began as a self-taught programmer, leveraging platforms like SoloLearn, Udemy, and YouTube. By 2021, he launched his career as a freelance developer, specializing in both mobile and web development. During his tenure as an Ad-hoc outsourcer (2021-2023), he developed management Android applications that enhanced product issue tracking and team communication for companies across Greece. His full-stack expertise includes creating high-performance backend servers using Kotlin and Quarkus, capable of handling substantial data loads and concurrent requests. Currently, he works as a full-stack web developer at Novidea, specializing in POS software development and services. He also serves as the Head of Informatics for the Hephaestus team, where he leads technology initiatives and development efforts. His technical toolkit is impressive, spanning multiple languages and frameworks including Java, Kotlin, HTML, CSS, JavaScript, TypeScript, Python, and Rust. He's proficient in modern frameworks like Next.js, SpringBoot, Quarkus, and React Native, with solid experience in PostgreSQL. His English proficiency is certified by the Lower Michigan certification, obtained at age 14 .Lampros combines academic focus with practical experience, demonstrating particularly strong capabilities in software development and programming, while actively working to expand his knowledge in electrical engineering domains."
        },
        {
            id: "fotis_rentzis",
            name: "Fotis Rentzis",
            photo: "/boy.png",
            head: "Team Director",
            cv_file: "fotis_rentzis.pdf",
            school: "/ece.png",
            description: "Fotis Rentzis is an undergraduate student in the Department of Electrical and Computer Engineering at the University of Peloponnese. Since 2013, he has been an active participant in the World Robotics Olympiad, becoming the youngest judge in the open-entrepreneurial category in 2019. He won 1st place and a Gold Medal in 2017-2019 for topics like 'Sustainable Development and Entrepreneurship' and 'Smart Cities.' Fotis has also contributed to numerous programs and events, including the Career Development Program on 'Robotics and Digital Creation' and the Patras IQ Knowledge Transfer Exhibition. He has spoken at several seminars, including the Greek Society for Neurosciences' Artificial Intelligence seminar, and participated in various robotics and educational events, including the WRO Teacher Camp and the World Robot Olympiad 2019 in Hungary. His research interests include integrated circuit design, computer architecture, FPGA programming, embedded systems, IoT technologies, renewable energy, and programming in C and Python. Additionally, he has appeared in a film on Educational Robotics and given media interviews."
        },
        {
            id: "panagiotis_diamantis",
            name: "Panagiotis Diamantis",
            photo: "/boy.png",
            head: "Project Athena",
            cv_file: "panagiotis_diamantis.pdf",
            school: "/civil.jpg",
            description: "As a successful Civil Engineering Assistant with many years of experience, he has made significant contributions to the field through the creation of innovative architectural designs and accurate surveys. His role involved active participation in professional meetings, promoting collaboration, and leading to the success of projects. In addition to practical experience, he invested in knowledge by attending a top-tier seminar on new materials in 2018 and an engaging lecture titled 'Protection of Structures from Natural Disasters,' presented by internationally recognized professors Andreas Langousis and Stefanos Dritsos. This combined approach of practical experience and continuous education highlights his commitment to excellence in the field of civil engineering.",
        },
        {
            id: "christos_rompovilas",
            name: "Christos Rompovilas",
            photo: "/boy.png",
            head: "Micro-electronics reasearch/ Project Zephyros",
            cv_file: "christos_rompovilas.pdf",
            school: "/ece.png",
            description: "Christos RampaVilas is an undergraduate student in the Department of Electrical and Computer Engineering at the University of Peloponnese. His research interests focus on integrated circuit design, computer architecture, FPGA board programming, embedded systems design and applications for automation, and hardware design for embedded systems.",
        },
        {
            id: "yiannis_tokmakidis",
            name: "Yiannis Tokmakidis",
            photo: "/boy.png",
            head: "Social Media management",
            cv_file: "yiannis_tokmakidis.pdf",
            school: "/ece.png",
            description: "Giannis Tokmakidis is a 20-year-old undergraduate student in the Department of Electrical and Computer Engineering, where he also works as a researcher in the department's laboratory. He is passionate about science and fascinated by its applications across various fields. In his free time, Giannis enjoys playing the guitar and exploring photography. He has been a member of Hephaestus since April 2024. His research interests include computational electrodynamics and the mechanics of electrotechnical materials.",
        },
        {
            id: "fillipos_stamos",
            name: "Fillipos Stamos",
            photo: "/boy.png",
            head: "Head of aerodynamics/ Project Hermes",
            cv_file: "fillipos_stamos.pdf",
            school: "/mech.png",
            description: "Filippos Stamos is a Mechanical Engineering student at the University of Peloponnese. They have participated in competitions such as F1 in Schools with the Bluearrowgr team at the Gymnasium and General Lyceum of Vouliagmeni. Filippos is involved in repairing electrical appliances, sound recording, and lighting for performances with musical instruments. They created an internet radio at the 2nd Lyceum of Koropi and a podcast, serving as both producer and technician. Upon entering university, Filippos joined El.Me.Pa and founded the Formula Student team 'Minautor Racing' where they initially served as Technical Director before transitioning to the leader of the aerodynamics and cooling sub-team. Their goal is to optimize the single-seater car's performance, focusing on engine cooling and maximizing grip during cornering to improve lap times, particularly in turns. Filippos is also the Mechanical Engineering Coordinator for the Hephaestus team at the University of Peloponnese and the Team Director of Project Hermes, where they are responsible for aerodynamics. The project aims to develop a rocket for the Czech Rocket Challenge, with a target altitude of around 1 kilometer. Additionally, they lead SimUoPLabs, a student research team at the University of Peloponnese focused on static and fluid dynamics analysis.",
        }
    ];

    const student = supervising_students.find((s) => s.id === id);

    if (!student) {
        return <p className="text-white">Student not found.</p>;
    }

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (

        <main className="flex flex-col w-full bg-gradient-to-br to-black_end from-lightblack via-90%">
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
                        <a href="/blog" className="cursor-pointer hover:text-shadow-[0_4px_8px_#FFFFFF] hover:text-white p-2">
                            Blog
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
                                            href="/blog"
                                            className={classNames(
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Blog
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
            <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
                <Vortex className="flex flex-row items-center justify-between px-2 md:px-10 py-4 w-full h-full">
                    <div className="flex flex-row items-center justify-center">
                        <img src={student.photo} className="w-[150px] h-[150px] max-sm:w-[40px] max-sm:h-[40px] rounded-full" />
                    </div>
                    <div className="flex items-center flex-col justify-center px-2">
                        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                            {student.name}
                        </h2>
                        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                            {student.head}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                            <Link href={"/team/" + student.id + "/cv"}>
                                <button className="px-5 py-4 bg-gradient-to-br to-black_end from-lightblack via-90% hover:shadow-2xl hover:shadow-white rounded-lg text-white ">
                                    resume
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <img src={student.school} className="w-[150px] h-[150px] max-sm:w-[40px] max-sm:h-[40px] rounded-full" />
                    </div>
                </Vortex>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center space-y-5 my-[100px]">
                <p className="w-full text-center text-5xl font-extrabold text-white">About</p>
                <p className="text-justify max-w-5xl break-words p-5 text-lg text-white">{student.description}</p>
            </div>
            <div className="flex flex-col pt-[100px] pb-[10px] space-y-7 items-center text-white text-lg ">
                <div className="flex flex-row w-[200px] h-[5px] rounded-full bg-white shadow-2xl shadow-white"></div>
                <p className="max-sm:text-sm">
                    This site is open source ! You can find on{" "}
                    <a target="_blank" className=" text-gray-400" href="https://github.com/xartokoptiko/hepheastus">
                        Github
                    </a>
                </p>
                <p className="text-sm mb-[10px] max-sm:text-xs">
                    all rights reserved heaphestus.vercel.app© 2024
                </p>
            </div>
        </main>

    );
}

export default Teamate;