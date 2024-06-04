"use client";

import type { JSX } from "react";
import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is OpenUser?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          OpenUser is a platorm for you to share different aspects of your life
          in an organized way. You can share, for instance, the books you read
          for leisure, the tools you use for your craft, or even share your
          productivity routine that keeps your going.
        </p>
        <p>Breakdown your OpenUser profile in different sections such as:</p>
        <ul className="list-disc list-outside pl-5">
          <li>
            <strong>Health & Fitness</strong>: Share your workout routine,
            equipment, fitness tracker, or your favorite cheat meal.
          </li>
          <li>
            <strong>Books</strong>: Talk us about the books your have read and
            which ones made the most impact on your life.
          </li>
          <li>
            <strong>Finances</strong>: How do you buget, where do you spend and
            invest. Do not forget to tell us the apps, tools and services you
            use to manage your finances.
          </li>
        </ul>
        <p>These are just ideas on what you can share.</p>
        <p>
          If you are a specialist such as a Software Engineer, Interior
          Designer, Structural Architect, Gamer, Farmer, Actor, Entreprenur,
          Investor, Writer, Marketer, etc, create custom sections in your
          OpenUser profile to share your world.
        </p>
      </div>
    ),
  },
  {
    question: "Is OpenUser really free?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! OpenUser was created to enable you to open up certain aspects of
        your life with the world. To afford this ability to the maximum amount
        of people, OpenUser is free to get started. Additional features will be
        available in the <span className="underline">OpenUser Pro</span> plan.
      </div>
    ),
  },
  {
    question: "Who is behind OpenUser",
    answer: (
      <p>
        OpenUser is created by @azizali. BTW Aziz Ali is an OpenUser himself.
        Click here to checkout his profile.
      </p>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="bg-white rounded-xl p-7 border border-base-content/10 hover:border-base-content/30 ">
      <button
        className="relative flex gap-2 bg-white items-center rounded-xl w-full text-base font-semibold text-left"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="mt-7 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-[#f9f9f9]" id="faq">
      <div className="max-w-5xl mx-auto py-24 px-8 flex flex-col gap-8">
        <p className="heading-2">Questions and Answers</p>
        <ul className="basis-1/2  gap-4 flex flex-col">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
