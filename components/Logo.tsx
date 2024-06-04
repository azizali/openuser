import icon from "@/app/icon.svg";
import config from "@/config";
import Image from "next/image";
import Link from "next/link";

type PropTypes = {
  shouldLink?: Boolean;
  version?: 1 | 2;
  className?: String;
  isIconOnly?: Boolean;
};

const Logo = ({ shouldLink = true, isIconOnly }: PropTypes) => {
  let content = (
    <div className="flex gap-2 md:justify-start items-center">
      <Image
        src={icon}
        alt={`${config.appName} logo`}
        priority={true}
        className="w-6 h-6"
        width={24}
        height={24}
      />
      <strong className="font-extrabold tracking-tight text-base md:text-lg">
        {config.appName}
      </strong>
    </div>
  );

  if (isIconOnly) {
    content = (
      <Image
        src={icon}
        alt={`${config.appName} logo`}
        priority={true}
        className="w-12 h-12"
        width={24}
        height={24}
      />
    );
  }

  if (shouldLink) {
    return (
      <Link
        href="/#"
        aria-current="page"
        className="flex gap-2 md:justify-start items-center"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
