"use client"

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beans-collision";
import { Menu, Transition } from "@headlessui/react";
import { IconHome, IconMenu, IconNews, IconRecordMail, IconSettingsCheck, IconUser } from "@tabler/icons-react";
import { Fragment } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";

export default function Team() {

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

    const words = [
        {
            text: "Join",
        },
        {
            text: "the",
        },
        {
            text: "Hepheastus",
            className: "text-blue-500",
        },
        {
            text: "team",
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

                <BackgroundBeamsWithCollision>
                    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
                        What&apos;s cooler than being part of{" "}<br />
                        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                <span className="">Hephaestus</span>
                            </div>
                            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                                <span className="">Hephaestus</span>
                            </div>
                        </div>
                    </h2>
                </BackgroundBeamsWithCollision>
                <div className="flex flex-col w-full p-10">

                    <p className="w-full text-center text-5xl font-extrabold text-white">Supervising students</p>

                    <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 my-32">


                        {/* FOTIS */}

                        <Link href={"/team/fotis_rentzis"}>
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    "bg-[url(/microelectronics.jpg)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/ece.png"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-extrabold text-base text-gray-50 relative z-10">
                                            Fotis Rentzis
                                        </p>
                                        <p className="text-sm text-white">Electrical & Computer Engineering department</p>
                                    </div>
                                </div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Team director
                                    </h1>

                                </div>
                            </div>
                        </Link>


                        {/* LAMPROS */}

                        <Link href={"/team/lampros_karachristos"}>

                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    "bg-[url(/informatics.jpg)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/ece.png"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-base font-extrabold text-gray-50 relative z-10">
                                            Lampros Karachristos
                                        </p>
                                        <p className="text-sm text-white">Electrical & Computer Engineering department</p>
                                    </div>
                                </div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Head of Informatics
                                    </h1>

                                </div>
                            </div>
                        </Link>

                        {/* FILLIPOS */}

                        <Link href={"/team/fillipos_stamos"}>
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    "bg-[url(/aerodynamics.webp)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/mech.png"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-extrabold text-base text-gray-50 relative z-10">
                                            Fillipos Stamos
                                        </p>
                                        <p className="text-sm text-white">Mehcanical Engeeniring Department</p>
                                    </div>
                                </div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Head of Aerodynamics/ Project Hermes
                                    </h1>

                                </div>
                            </div>
                        </Link>

                        {/* panagiotis */}

                        <Link href={"/team/panagiotis_diamantis"}>
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    " bg-[url(/fpg.jpg)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/civil.jpg"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-extrabold text-base text-gray-50 relative z-10">
                                            Panagiotis Diamantis
                                        </p>
                                        <p className="text-sm text-white">Civil Engineering</p>
                                    </div>
                                </div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Project Athena
                                    </h1>

                                </div>
                            </div>
                        </Link>

                        {/* CHRISTOS */}

                        <Link href={"/team/christos_rompovilas"}>
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    "bg-[url(/micro.jpg)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/ece.png"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-extrabold text-base text-gray-50 relative z-10">
                                            Christos Rampavilas
                                        </p>
                                        <p className="text-sm text-white">Electrical & Computer Engineering department</p>
                                    </div>
                                </div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Micro-electronics reasearch/ Project Zephyros
                                    </h1>

                                </div>
                            </div>
                        </Link>

                        <Link href={"/team/athanasios_daoulas"}>
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    "bg-[url(/plcdev.jpg)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/ece.png"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-extrabold text-base text-gray-50 relative z-10">
                                            Athanasios Daoulas
                                        </p>
                                        <p className="text-sm text-white">Electrical & Computer Engineering department</p>
                                    </div>
                                </div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Automation and Control Engineering / Heron
                                    </h1>

                                </div>
                            </div>
                            
                        </Link>

                    </div>

                    <p className="w-full text-center text-5xl font-extrabold text-white">Supervising professors</p>
                    <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 my-32">
                        <Link target="_blank" href={"https://www.ece.uop.gr/staff/kitsos-paraskevas/"}>
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    "bg-[url(/ecebg.webp)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/paris_kitsos.png"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-extrabold text-base text-gray-50 relative z-10">
                                            Paraskeuas Kitsos
                                        </p>
                                        <p className="text-sm text-white">President of Electrical and computer engineering department</p>
                                    </div>
                                </div>
                                <div className="text content">

                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Learn more
                                    </h1>


                                </div>
                            </div>
                        </Link>
                        <Link target="_blank" href={"https://www.uop.gr/staff-member/alexandros.kalarakis"}>
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    "bg-[url(/mechbg.jpg)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/kalarakis.jpeg"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-extrabold text-base text-gray-50 relative z-10">
                                            Kalarakis Alexandros
                                        </p>
                                        <p className="text-sm text-white">Associate Professor of Mechanical Engineering department</p>
                                    </div>
                                </div>
                                <div className="text content">

                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Learn more
                                    </h1>

                                </div>
                            </div>
                        </Link>

                        <Link target="_blank" href={"https://scholar.google.com/citations?user=Qc0Uko4AAAAJ&hl=en"}>
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:shadow-white",
                                    "bg-[url(/structular.png)] bg-cover"
                                )}
                            >

                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        src="/panagiota.jpeg"
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-extrabold text-base text-gray-50 relative z-10">
                                            Panagiota S. Katsimpini
                                        </p>
                                        <p className="text-sm text-white">Post-doctoral Researcher</p>
                                    </div>
                                </div>
                                <div className="text content">

                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        Learn more
                                    </h1>

                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center h-[40rem]  ">
                    <p className="text-neutral-200 text-xs sm:text-base  ">
                        The road of innovation starts from here
                    </p>
                    <TypewriterEffectSmooth words={words} />
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                        <a target="_blank"
                            href="https://forms.gle/dYWvBPTG7Btp8Wdt6" className="flex flex-col w-40 h-10 rounded-xl items-center justify-center border-white border-transparent text-white text-sm">
                            Join now
                        </a>
                        <a href="/contact" className="flex flex-col items-center justify-center w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                            contact us
                        </a>
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