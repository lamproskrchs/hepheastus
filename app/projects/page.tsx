"use client"

import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlights";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "@react-pdf-viewer/core";
import { IconHome, IconMenu, IconNews, IconRecordMail, IconSettingsCheck, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function Projects() {


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

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <>
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
                <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
                    >
                        With hephaestus , You get to choose from a big variety of
                        projects and teams, each one{" "}
                        <Highlight className="text-white">
                            creating innovation
                        </Highlight>
                    </motion.h1>
                </HeroHighlight>
                <div className="position: absolute; top: 0; left: 0; width: 100%; overflow: hidden; line-height: 0;">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="flex flex-row w-full my-[100px] max-sm:flex-col">

                    <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[20px]">
                        <img src="/ZEPHYR_NO_BG.png" className="w-[500px] h-[300px] max-sm:w-[200px] max-sm:h-[110px]" />
                    </div>

                    <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
                        <p className="max-w-xl text-xl text-white text-justify p-5"> The Project Zephyros is an innovative initiative by Hephaestus aimed at developing an affordable yet highly effective weather station.
                            This station combines advanced hardware and software, integrates Internet of Things (IoT) capabilities, and enables user participation, contributing to
                            immediate and reliable weather forecasting. The goal of the Project is to collaborate with the National Meteorological Service, leveraging technology and the
                            collective knowledge of users to enhance weather prediction accuracy.</p>
                    </div>

                </div>


                <div className="flex flex-row w-full py-[100px] bg-black max-sm:flex-col">

                    <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
                        <p className="max-w-xl text-xl text-justify p-5 text-white"> Project Athena, developed by Team Hephaestus, aims to transform the university into a smart campus that enhances both learning and daily life. Inspired by Athena, the goddess of wisdom and technology, the project integrates AI-driven tools and IoT systems to streamline tasks like classroom scheduling, attendance tracking, and energy management.
                            By students, for students, Project Athena empowers the university community with real-time access to resources, fostering innovation and creating a more efficient, connected campus.</p>
                    </div>

                    <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
                        <img src="/athena.png" className="w-[500px] h-[300px] max-sm:w-[300px] max-sm:h-[200px]" />
                    </div>

                </div>

                <div className="custom-shape-divider-top-1731075309">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>

                <div className="flex flex-row w-full my-[100px] max-sm:flex-col">

                    <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
                        <img src="/ermis.png" className="w-[300px] h-[300px] max-sm:w-[150px] max-sm:h-[150px]" />
                    </div>

                    <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
                        <p className="max-w-xl text-xl text-justify p-5 text-white"> Project Hermes, launched in 2024 by Team Hephaestus, is dedicated to advancing aerospace technology and innovation. Our primary goal is to compete in the Czech Rocket Challenge 2025, where we will showcase our engineering and design expertise on an international stage.
                            With a team of talented students, we are focused on designing and building rockets capable of withstanding the extreme conditions of space travel. Project Hermes represents our commitment to pushing the boundaries of rocketry and making a lasting impact in the field.
                        </p>
                    </div>

                </div>

                <div className="custom-shape-divider-bottom-1732185752">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>

                <div className="flex flex-row w-full py-[100px] bg-black max-sm:flex-col">

                    <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
                        <p className="max-w-xl text-xl text-justify p-5 text-white"> The Heron subteam, part of the Hephaestus team, focuses on automation and control engineering, starting with the utilization of PLCs (Programmable Logic Controllers) for developing automation applications. Our initial goal is to optimize systems, enhance efficiency, and ensure precision, while planning to expand our expertise in the future by incorporating new technologies and methods for comprehensive and innovative solutions.</p>
                    </div>

                    <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
                        <img src="/hyron.png" className="w-[300px] h-[300px] max-sm:w-[300px] max-sm:h-[200px]" />
                    </div>

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
        </>
    );
}