"use client"
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Menu, Transition } from "@headlessui/react";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconMenu, IconNewSection, IconTerminal2, IconUser } from "@tabler/icons-react";
import { Fragment } from "react";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/flaoting-deck";

export default function ContactPage() {


    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Aceternity UI",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <>
            <main className="flex flex-col w-full bg-gradient-to-br to-black_end from-lightblack via-90%">
                <div className="flex flex-row w-full py-[30px] px-[100px] max-sm:px-[50px] items-center justify-between">
                    <div className="flex flex-row items-center space-x-[35px]">
                        <p className="text-2xl text-white font-extrabold">Hephaestus</p>
                        <div className="flex flex-row items-center space-x-2 text-lg text-gray-500 max-sm:hidden">
                            <a href="/" className="cursor-pointer">
                                Home
                            </a>
                            <a href="/team" className="cursor-pointer">
                                The team
                            </a>
                            <a href="/blog" className="cursor-pointer">
                                Blog
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-x-2 text-lg text-gray-500 max-sm:hidden">
                        <a
                            target="_blank"
                            href="https://forms.gle/dYWvBPTG7Btp8Wdt6"
                            className="cursor-pointer"
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

                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div className="flex flex-col w-fulll h-screen items-center space-y-16 justify-center">

                    <p className="text-white font-extrabold text-6xl mt-[35px] ">Find us on </p>

                    <div className="grid grid-cols-3 w-full gap-10 max-sm:grid-cols-1">

                        <div className="flex flex-col items-center justify-center">
                            <img src="/social/instagram-logo-banner.avif" className="rounded-lg w-[200px] h-[100px]" />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <img src="/social/link.png" className="rounded-lg w-[200px] h-[100px]" />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <img src="/social/git.png" className="rounded-lg w-[200px] h-[100px]" />
                        </div>

                        <div></div>

                        <div className="flex flex-col items-center justify-center">
                            <img src="/social/face.jpg" className="rounded-lg w-[200px] h-[100px]" />
                        </div>

                        <div></div>


                    </div>

                    <div className="flex flex-col space-y-3">
                        <p className="font-extrabold text-center">Email</p>
                        <p>hepheastus.social.uop@gmail.com</p>
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