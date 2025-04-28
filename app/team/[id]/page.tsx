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

    const IconMap = {
        IconBriefcase,
        IconSchool,
        IconTools,
        IconUser,
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

    const supervising_students =
        [{
            id: "fotis_rentzis",
            name: "Jane Doe",
            head: "Senior Software Engineer",
            photoUrl: "/boy.png",
            departmentImageUrl: "/ece.png",
            small_description: "Passionate engineer with 10+ years of full-stack web development experience.",
            resume: [
                {
                    section_title: "Professional Summary",
                    icon: "IconBriefcase",
                    description: "A driven and detail-oriented Senior Software Engineer with expertise in designing scalable web applications and leading development teams to success."
                },
                {
                    section_title: "Experience",
                    icon: "IconBriefcase",
                    description: `
      - **Acme Corp** (2020 - Present): Lead engineer for the e-commerce platform, architected microservices, and improved performance by 40%.
      - **XYZ Inc** (2016 - 2020): Full-stack developer on customer portal, implemented real-time features and CI/CD pipelines.
      - **Startup Co** (2014 - 2016): Junior developer, built REST APIs and integrated third-party services.
            `
                },
                {
                    section_title: "Education",
                    icon: "IconSchool",
                    description: `
      - M.S. in Computer Science, University of Technology, 2014 - 2016
      - B.S. in Software Engineering, State University, 2010 - 2014
            `
                },
                {
                    section_title: "Skills",
                    icon: "IconTools",
                    description: "JavaScript, TypeScript, React, Next.js, Node.js, Python, SQL, Docker, AWS, Kubernetes, GraphQL, REST API design, Agile/Scrum."
                },
                {
                    section_title: "Certifications",
                    icon: "IconBriefcase",
                    description: `
      - AWS Certified Solutions Architect
      - Certified Scrum Master
      - Google Cloud Professional Cloud Architect
            `
                },
                {
                    section_title: "Projects",
                    icon: "IconBriefcase",
                    description: `
      - **Open Source Contributor**: Improved performance of 'XYZ' library by refactoring core modules.
      - **ProdTracker App**: Built a productivity tracking app with Next.js, Tailwind CSS, and Firebase.
      - **DataViz Dashboard**: Created interactive dashboards using React and D3.js.
            `
                },
                {
                    section_title: "Publications",
                    icon: "IconBriefcase",
                    description: `
      - "Optimizing React Performance" on Medium, 2023
      - Co-authored "Microservices at Scale" published in Tech Journal, 2022
            `
                },
                {
                    section_title: "Volunteer Experience",
                    icon: "IconUser",
                    description: "Mentor at Code for Good (2019 - Present); Speaker at local tech meetups on JavaScript best practices."
                },
                {
                    section_title: "Languages",
                    icon: "IconUser",
                    description: "English (Native), Spanish (Fluent), German (Conversational)."
                }
            ]
        },
        ]

    const student = supervising_students.find((s) => s.id === id);

    if (!student) {
        return <p className="text-white">Student not found.</p>;
    }

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (

        <main className="flex flex-col w-full h-full bg-gradient-to-br to-black_end from-lightblack via-90%">
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

            <section className="mx-4 md:mx-10 py-12">
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
                                const IconC = IconMap[sec.icon] || (() => null);
                                return (
                                    <div
                                        key={i}
                                        className="pt-6"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <IconC className="h-6 w-6 text-indigo-300 flex-shrink-0" />
                                            <h3 className="text-2xl font-semibold text-white">{sec.section_title}</h3>
                                        </div>
                                        <p className="mt-2 text-gray-300 leading-relaxed">{sec.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="py-8 text-center text-gray-500 text-sm">
                <div className="max-w-md mx-auto px-6">
                    <div className="h-0.5 w-24 mx-auto bg-gray-600 mb-4" />
                    <p>
                        This site is open source! Find it on&nbsp;
                        <a
                            href="https://github.com/xartokoptiko/hepheastus"
                            target="_blank"
                            className="text-indigo-300 hover:text-indigo-200"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>.
                    </p>
                    <p className="mt-2">© 2024 hephaestus.vercel.app — All rights reserved.</p>
                </div>
            </footer>
        </main>

    );
}

export default Teamate;