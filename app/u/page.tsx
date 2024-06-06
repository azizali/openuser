import BuiltWithBadge from "@/components/BuiltWithBadge";
import Logo from "@/components/Logo";
import SubScribeMe from "@/components/SubscribeMe";
import Image from "next/image";

export const dynamic = "force-dynamic";

const menuOptions = [
  {
    label: "About",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
      </svg>
    ),
  },
  {
    label: "What's New",
    iconSVG: (
      <span className="relative flex size-4 justify-center items-center">
        <span className="animate-ping absolute inline-flex size-3 rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full size-3 bg-green-500"></span>
      </span>
    ),
  },
  {
    label: "Articles",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Health & fitness",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
      </svg>
    ),
  },
  {
    label: "Book Review",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M7.25 3.688a8.035 8.035 0 0 0-4.872-.523A.48.48 0 0 0 2 3.64v7.994c0 .345.342.588.679.512a6.02 6.02 0 0 1 4.571.81V3.688ZM8.75 12.956a6.02 6.02 0 0 1 4.571-.81c.337.075.679-.167.679-.512V3.64a.48.48 0 0 0-.378-.475 8.034 8.034 0 0 0-4.872.523v9.268Z" />
      </svg>
    ),
  },
  {
    label: "Tools I Use",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          clipRule="evenodd"
        />
        <path d="M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z" />
      </svg>
    ),
  },
  {
    label: "Career",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          clipRule="evenodd"
        />
        <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
      </svg>
    ),
  },
  {
    label: "Timeline",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Investments",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm9 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11.5 6A.75.75 0 1 1 13 6a.75.75 0 0 1-1.5 0Z"
          clipRule="evenodd"
        />
        <path d="M13 11.75a.75.75 0 0 0-1.5 0v.179c0 .15-.138.28-.306.255A65.277 65.277 0 0 0 1.75 11.5a.75.75 0 0 0 0 1.5c3.135 0 6.215.228 9.227.668A1.764 1.764 0 0 0 13 11.928v-.178Z" />
      </svg>
    ),
  },
];

const menu2Options = [
  {
    label: "Templates",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
      </svg>
    ),
  },
  {
    label: "Product Updates",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
      </svg>
    ),
  },
  {
    label: "Roadmap",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="M7.25 3.688a8.035 8.035 0 0 0-4.872-.523A.48.48 0 0 0 2 3.64v7.994c0 .345.342.588.679.512a6.02 6.02 0 0 1 4.571.81V3.688ZM8.75 12.956a6.02 6.02 0 0 1 4.571-.81c.337.075.679-.167.679-.512V3.64a.48.48 0 0 0-.378-.475 8.034 8.034 0 0 0-4.872.523v9.268Z" />
      </svg>
    ),
  },
  {
    label: "Requests a feature",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          clipRule="evenodd"
        />
        <path d="M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z" />
      </svg>
    ),
  },
  {
    label: "How-to guides",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          clipRule="evenodd"
        />
        <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
      </svg>
    ),
  },
];

const Header = () => {
  return (
    <div className="p-2 border-b flex gap-4 justify-between items-center">
      <Logo size="sm" />
      <div>
        <input
          type="text"
          className="bg-slate-100 text-sm px-3 py-1 -my-1 rounded-md w-96"
          name="search-open-users"
          id="search-open-users"
          placeholder="Search open users"
        />
      </div>
      <ul className="menu p-0">
        <li className="">
          <a className="-my-1">Log out</a>
        </li>
      </ul>
    </div>
  );
};

export default async function Profile() {
  return (
    <>
      <BuiltWithBadge />
      <Header />
      <div className="flex">
        <aside className="min-h-screen bg-slate-100 pt-3">
          <div className="flex flex-col gap-12">
            <div>
              <div className="px-4 text-xs mb-3 text-base-content/60 font-semibold">
                Aziz Ali
              </div>
              <ul className="w-56 rounded-box flex flex-col gap-3 pl-4 pr-4 font-medium text-base-content/90">
                {menuOptions.map(({ label, iconSVG: IconSvg }) => {
                  return (
                    <li key={label} className="text-sm flex gap-1 items-center">
                      {IconSvg}
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="px-4 text-xs mb-3 text-base-content/60 font-semibold">
                Product
              </div>
              <ul className="w-56 rounded-box flex flex-col gap-3 pl-4 pr-4 font-medium text-base-content/90">
                {menu2Options.map(({ label, iconSVG: IconSvg }) => {
                  return (
                    <li key={label} className="text-sm flex gap-1 items-center">
                      {IconSvg}
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
        <div className=" max-w-4xl min-h-screen px-24 py-12 pb-24">
          <div className="flex flex-col gap-6">
            <div className="flex gap-7 items-center">
              <Image
                alt="Profile Picture - TODO change with user name"
                className="rounded-full w-36 h-36"
                src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=148&h=148`}
              />
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <h1 className="heading-1">Aziz Ali</h1>
                  <div className="text-xs text-slate-400">#1</div>
                </div>
                <div className="font-light">
                  Self-Taught Dev + Founder @ iLoveCoding
                </div>
                <div className="flex text-sm pt-5 gap-5">
                  <div className="flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Chicago, IL
                  </div>
                  <div className="flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <a href="http://azizali.com">azizali.com</a>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <SubScribeMe />
            <p className="my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit minima quasi nesciunt nam expedita iure,
              necessitatibus perspiciatis aut placeat voluptates mollitia
            </p>
          </div>

          <div>
            <h2 className="heading-2 my-5">Me in 7 bullets</h2>
            <p className=" my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit minima quasi nesciunt nam expedita iure,
              necessitatibus perspiciatis aut placeat voluptates mollitia
            </p>
            <ul className="list-disc list-outside pl-9 flex flex-col gap-4">
              <li>I am a Pakistani, currently living in Chicago</li>
              <li>
                I have had 3 careers namely Marketing Manager, Project Manager,
                Software Engineer working in respectable public companie
              </li>
              <li>
                While working full-time for others, I have always had my side
                gig. I have launched 6 companies, most of which faile
              </li>
              <li>
                Currently, I am running my own company full-time,
                iLoveCoding.org
              </li>
              <li>
                On my quest, I have learned a lot of life and business lessons
                that I share her
              </li>
              <li>
                I enjoy learning, programming, usable design, sales copywriting
                and physical fitnes
              </li>
              <li>
                I have conquered my fear of coding, and I am also an open source
                contributon
              </li>
              <li>See what I am doing these day</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-2 mt-10 mb-5">What am I doing /now</h2>
            <ul className="list-disc list-outside pl-9 flex flex-col gap-4">
              <li>
                On my quest, I have learned a lot of life and business lessons
                that I share her
              </li>
            </ul>
          </div>

          <div>
            <h2 className="heading-2 mt-10 mb-5">Tools I use</h2>
            <ul className="list-disc list-outside pl-9 flex flex-col gap-4">
              <li>
                On my quest, I have learned a lot of life and business lessons
                that I share her
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
