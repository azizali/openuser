import logo from "@/app/icon.png";
import config from "@/config";
import Image from "next/image";
import Link from "next/link";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="border-t border-base-content/10">
      <div className="max-w-5xl border-base-content/10 mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col gap-12">
          <div className="max-w-64 flex-shrink-0 md:mx-0 md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap -mb-10 md:mt-0">
            <div className="md:w-1/3 w-full">
              <div className="flex flex-col justify-center md:items-start gap-2 mb-10 text-sm">
                <div className="font-bold">Product</div>
                {config.mailgun.supportEmail && (
                  <a
                    href={`mailto:${config.mailgun.supportEmail}`}
                    target="_blank"
                    className="text-base-content/70 link link-hover"
                    aria-label="Contact Support"
                  >
                    Features
                  </a>
                )}
                <Link
                  href="/#pricing"
                  className="text-base-content/70 link link-hover"
                >
                  Pricing
                </Link>

                <a
                  href="/#"
                  target="_blank"
                  className="text-base-content/70 link link-hover"
                >
                  What's new<sup>✧</sup>
                </a>
              </div>
            </div>

            <div className="md:w-1/3 w-full">
              <div className="flex flex-col justify-center md:items-start gap-2 mb-10 text-sm">
                <div className="font-bold text-base-content">Company</div>
                <a
                  href="/#"
                  target="_blank"
                  className="text-base-content/70 link link-hover"
                >
                  About us (@azizali)
                </a>
                <Link
                  href="/blog"
                  className="text-base-content/70 link link-hover"
                >
                  Blog
                </Link>
                <Link
                  href="/tos"
                  className="text-base-content/70 link link-hover"
                >
                  Terms of services
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-base-content/70 link link-hover"
                >
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
