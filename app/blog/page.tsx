"use client"
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Menu, Transition } from "@headlessui/react";
import { IconArrowLeft, IconBrandTabler, IconHome, IconMenu, IconRecordMail, IconSettings, IconUser, IconUserBolt } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { motion } from "framer-motion";
import DevelopmentPopup from "@/components/ui/development";

export const LogoM = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                Hepheastus Blog
            </motion.span>
        </Link>
    );
};
export const LogoIconM = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <DevelopmentPopup />
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                <div className="flex flex-col w-full items-center">
                    <p className="text-xl font-extrabold">Announcements</p>
                    <div className="flex overflow-x-auto w-[100vh] space-x-4 p-5">
                        <section className="flex flex-col flex-shrink-0 bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col flex-shrink-0 bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col flex-shrink-0 bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col flex-shrink-0 bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col flex-shrink-0 bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col flex-shrink-0 bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col flex-shrink-0 bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col flex-shrink-0 bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center">
                    <p className="text-xl font-extrabols">Read More</p>
                    <div className="grid grid-cols-3 gap-5 w-[100vh] p-4">

                        <section className="flex flex-col  bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col  bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col  bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col  bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col  bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col  bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col  bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>
                        <section className="flex flex-col  bg-gray-500 rounded-md w-[300px] h-[200px]">
                            {/* Content */}
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Blog() {


    const links = [
        {
            label: "Home",
            href: "/",
            icon: (
                <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "The team",
            href: "/team",
            icon: (
                <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Contact us",
            href: "contact",
            icon: (
                <IconRecordMail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);


    return (
        <>
            <main className="flex flex-col w-full bg-gradient-to-br to-black_end from-lightblack via-90%">
                <div
                    className={cn(
                        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full overflow-hidden",
                        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
                    )}
                >
                    <Sidebar open={open} setOpen={setOpen}>
                        <SidebarBody className="justify-between gap-10">
                            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                                {open ? <LogoM /> : <LogoIconM />}
                                <div className="mt-8 flex flex-col gap-2">
                                    {links.map((link, idx) => (
                                        <SidebarLink key={idx} link={link} />
                                    ))}
                                </div>
                            </div>

                        </SidebarBody>
                    </Sidebar>
                    <Dashboard />
                </div>
                <div className="flex flex-col pt-[20px] pb-[10px] space-y-7 items-center text-white text-lg ">
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
