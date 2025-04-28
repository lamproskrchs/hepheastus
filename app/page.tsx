"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconMenu,
  IconHome,
  IconUser,
  IconMessage,
  IconRecordMail,
  IconNews,
  IconSettingsCheck,
} from "@tabler/icons-react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/gemini-google-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
import Dropdown from "@/components/ui/dropdown";
import ContentSection from "@/components/ui/content-section";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { it } from "node:test";

export default function Home() {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollToRef = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

  //Bendo grid
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 "></div>
  );
  const items = [
    {
      title: "Project Hermes",
      description: "All about rockets",
      header: <Skeleton />,
      link: "/projects#project_hermes",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Project Athena",
      description: "Campus build by stuents, for students",
      header: <Skeleton />,
      link: "/projects#project_athena",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Project Heron",
      description: "In for automation and control ?",
      header: <Skeleton />,
      link: "/projects#project_heron",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Project Zephyros",
      description: "What's the weather in the place of innovaiton ?",
      header: <Skeleton />,
      link: "/projects#project_zephyros",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Lean more about the projects",
      description:
        "Hephaestus has a various of on going projects. Click here or projects to see all of them",
      header: <Skeleton />,
      link: "/projects",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];

  //MacBook scroll
  const Badge = ({ className }: { className?: string }) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
          fill="#00AA45"
        ></path>
        <path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
          fill="#219653"
        ></path>
        <path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
          fill="#24292E"
        ></path>
        <path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
          fill="#24292E"
        ></path>
      </svg>
    );
  };

  //GEMINI EFFECT
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

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
      <div className="grid grid-cols-2 max-sm:gird max-sm:grid-cols-1 items-center pt-[80px] px-[100px] max-sm:px-[50px]">
        <div className="flex flex-col h-full w-full justify-between max-sm:items-center max-sm:justify-center max-md:justify-center max-md:items-center">
          <div className="flex flex-row h-full w-full max-sm:pb-16 max-sm:items-center max-sm:justify-center max-md:justify-center max-md:items-center">
            <img
              src="pcg-baner.png"
            />
            <img
              src="hyphestusbg.png"
              className="w-[400px] h-[400px] max-sm:w-[200px] max-sm:h-[200px]"
            />
          </div>
          <div className="flex flex-col h-full w-full justify-center ">
            <p className="text-white font-extrabold text-4xl max-w-xl max-sm:text-center max-sm:mb-24">
              The Innovating team in University of Peloponnese
            </p>
          </div>
        </div>

        <BentoGrid className="max-w-full w-full max-sm:hidden max-md:hidden lg:visible mb-16">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              link={item.link}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>

      <div id="about">
        <ContentSection />
      </div>

      <div className="overflow-hidden w-full">
        <MacbookScroll
          title={
            <span>
              Everything from informatics <br /> all the way to.
            </span>
          }
          badge={
            <Link href="https://peerlist.io/manuarora">
              <Badge className="h-10 w-10 transform -rotate-12" />
            </Link>
          }
          src={`/vscode.png`}
          showGradient={false}
        />
      </div>
      <div
        className="h-[400vh] max:sm-h-[50vh] w-full rounded-md relative overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <div className="h-[40rem] w-full   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl max-sm:text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          3D Modeling & Building
        </p>
      </div>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl space-y-8  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            And much more <br /> awaiting for you in the team.
          </h1>
          <div className="flex flex-row w-full items-center justify-center">
            <Link target="_blank" href={"https://forms.gle/dYWvBPTG7Btp8Wdt6"}>
              <Button
                borderRadius="1.75rem"
                className="mx-auto  text-white border-neutral-200 dark:border-slate-800"
              >
                Become a member
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
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
