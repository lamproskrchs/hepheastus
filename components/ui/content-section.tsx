import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { Button } from "./moving-border";

export default function ContentSection() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-300">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                but what is it?
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About the team
              </h1>
              <p className="mt-6 text-xl leading-8 text-white">
                The interdisciplinary team of Hephaestus aims at educating
                students with versatile knowledge in various fields. It combines
                the knowledge of all three departments of the engineering
                school.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="eclass.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <p>
                Its main goal is the creation of modern projects that will
                participate in national and international competitions! Some of
                the subjects of our interest are:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                  />
                  <span className="text-white">
                    <strong className="font-semibold text-white">
                      Rovers and Drones and Rocket
                    </strong>{" "}
                    The goal is participation in the INTERNATIONAL SPACE
                    ROBOTICS COMPETITION & CONFERENCE and/or EuRoC. The drones
                    are rescue drones and are used in cases of human rescue
                    (e.g., wildfires).
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                  />
                  <span className="text-white">
                    <strong className="font-semibold text-white">
                      Smart Houses - Cities - Smart green houses
                    </strong>{" "}
                    A smart city aims for better services across various urban
                    sectors such as transportation, water supply, lighting,
                    waste management, and energy. Additionally, a smart city
                    targets a more interactive and responsive city
                    administration, safer public spaces, and meeting the needs
                    of its population. Smart Greenhouse Automation: The "smart
                    greenhouse" revolutionizes agriculture by creating a
                    self-regulating microclimate suitable for plant growth
                    through the use of IoT sensors and monitoring systems that
                    optimize production conditions and automate the process.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                  />
                  <span className="text-white">
                    <strong className="font-semibold text-white">
                      Building and large-scale project automation (Our Smart
                      Campus)
                    </strong>{" "}
                    It concerns the maintenance and control of tunnels,
                    hydraulic cleaning, dams, etc. This team will focus on
                    automating mechanisms and designing a smart campus using AI
                    and sensors.
                  </span>
                </li>

                <li className="flex flex-row w-full justify-center gap-x-3" >
                  <Link href={"/team"}>
                    <Button
                      borderRadius="1.75rem"
                      className="mx-auto  text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      Learn more about the team
                    </Button>{" "}
                  </Link>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
