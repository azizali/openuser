import icon from "@/app/icon.svg";
import config from "@/config";
import Image from "next/image";
import Link from "next/link";

type PropTypes = {
  shouldLink?: Boolean;
  showBeta?: Boolean;
  version?: 1 | 2;
  className?: String;
  isIconOnly?: Boolean;
  size?: "xs" | "sm" | "md" | "lg";
};

const Logo = ({
  shouldLink = true,
  isIconOnly,
  size = "md",
  showBeta = true,
}: PropTypes) => {
  const iconSizeToCSSclassMap = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-12 h-12",
  };
  const classNameForIconSize = iconSizeToCSSclassMap[size];

  const textSizeToCSSclassMap = {
    xs: "text-xs md:text-sm",
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xlg",
  };
  const classNameForTextSize = textSizeToCSSclassMap[size];

  let content = (
    <div className="flex md:justify-start items-center">
      <Image
        src={icon}
        alt={`${config.appName} logo`}
        priority={true}
        className={`${classNameForIconSize}`}
      />
      <strong
        className={`font-extrabold tracking-tight ${classNameForTextSize}`}
      >
        {config.appName}
      </strong>
      {showBeta && <sup className="pl-1">beta</sup>}
    </div>
  );

  if (isIconOnly) {
    content = (
      <Image
        src={icon}
        alt={`${config.appName} logo`}
        priority={true}
        className={`${classNameForIconSize}`}
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
