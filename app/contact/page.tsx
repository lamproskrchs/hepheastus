"use client";

import React, { Fragment, FC } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import {
    IconHome,
    IconSettingsCheck,
    IconUser,
    IconRecordMail,
    IconNews,
    IconMenu,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

type SocialLink = {
    alt: string;
    src: string;
    href?: string;
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

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

const socialLinks: SocialLink[] = [
    { alt: "Instagram", src: "/social/instagram.png", href: "https://www.instagram.com/hephaestus_uop" },
    { alt: "LinkedIn", src: "/social/link.png", href: "#" },
    { alt: "GitHub", src: "/social/git.png", href: "https://github.com/hyphestusrobotics" },
];

const ContactPage: FC = () => {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-lightblack via-black_end to-black">
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

            {/* Hero / Intro - Unchanged */}
            <section className="flex flex-col items-center justify-center flex-1 py-16 px-6 text-center">
                <h2 className="text-5xl font-extrabold text-white mb-4">Find us on</h2>
                <p className="text-gray-400 max-w-xl">
                    Connect with us through social media or send us an email below.
                </p>
            </section>

            {/* Social Grid – plain <img>, fixed sizes */}
            <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
              {socialLinks.map(({ alt, src, href }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  className="
                    group
                    flex flex-col
                    overflow-hidden
                    rounded-2xl
                    shadow-lg
                    transform transition-transform duration-300
                    hover:scale-105
                  "
                >
                  <img
                    src={src}
                    alt={alt}           /* required for accessibility :contentReference[oaicite:0]{index=0} */
                    width={300}         /* fixed width in HTML attributes :contentReference[oaicite:1]{index=1} */
                    height={180}        /* fixed height ensures it always shows :contentReference[oaicite:2]{index=2} */
                    className="
                      w-full h-auto    /* maintain aspect ratio */
                      object-cover
                    "
                  />
                  <div className="p-4 bg-black/30 text-white text-center">
                    <span className="font-semibold">{alt}</span>
                  </div>
                </a>
              ))}
            </section>


            {/* Email Contact */}
            <section className="py-12 bg-black/20 backdrop-blur-sm">
                <div className="max-w-md mx-auto px-6 text-center space-y-3">
                    <h3 className="text-2xl font-semibold text-white">Email</h3>
                    <a
                        href="mailto:hepheastus.social.uop@gmail.com"
                        className="text-indigo-300 hover:text-indigo-200 transition"
                    >
                        hepheastus.social.uop@gmail.com
                    </a>
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
};

export default ContactPage;
