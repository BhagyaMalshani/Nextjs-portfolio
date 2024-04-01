"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/containers/language-context";
import { useSectionInView } from "@/lib/useInView";
import { Card, CardHeader, CardBody, CardFooter, Image, Divider, Link, Button } from "@nextui-org/react";
import {Tooltip} from "@nextui-org/react";


export default function About() {
  const { ref } = useSectionInView("#about");
  const { languageStrings } = useLanguage();

  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <SectionHeading>{languageStrings.about.title}</SectionHeading>
      <p className="mb-3  lg:text-xl  sm:text-lg  text-justify  italic  pb-4">
      Welcome to my personal website! I specialize in the dynamic realms of ICT, project management, and UI/UX design.
       My journey in the digital landscape commenced in 2023
        

        <br></br><br></br>
        In 2023, I embarked on my front-end development career,
        gaining expertise in HTML, CSS, Typescript, React, Next.js,
        MongoDB, MySQL, and more. As a dedicated freelancer, I am passionate
        about delivering top-notch solutions to meet and exceed the
        expectations of my clients.
      </p>

      <p className="text-xl">
        
        {languageStrings.about.conclusion}{" "}
      </p>

      <div className="flex items-center justify-center pt-6 ">
        <Card className="max-w-[600px] bg-white border-black   dark:bg-gray-800  rounded-2xl dark:border-gray-300  shadow-2xl hover:scale-[1.04]  transform transition-transform">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={10}
             
              src="/bha.jpg"
              width={90}
              className="rounded-full object-cover shadow-xl "
            />
            <div className="flex flex-col">
              <p className="text-md font-semibold">Bhagya Malshani</p>
              <Link href="https://bhagyamalshani.my.canva.site/" size="sm" isExternal className=" hover:text-sky-400">
          @bhagyamalshani
        </Link>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className=" pb-5">
              <p className=" font-semibold  ">
              🎓Bachelor of Science IT
              </p>
              <p className=" text-sm italic  font-normal">
              📖Reading<br />
              🎯GPA 3.30<br />
              📚University of Sri Jayewardenepura - 2022
              </p>
            </div>
            <div className=" pb-5">
              <p className=" font-semibold  ">
              🎓NVQ level 04 in ICT Technicial
              </p>
              <p className=" text-sm italic  font-normal">
              📚National Vocational Authority - 2021
              </p>
            </div>
            <div className=" pb-5">
              <p className=" font-semibold  ">
              🎓NVQ level 01 in English
              </p>
              <p className=" text-sm italic  font-normal">
              📚National Vocational Authority - 201
              </p>
            </div>
            <div className="">
              <p className=" font-semibold  ">
              🎓The English Bank Academy
              </p>
              <p className=" text-sm italic  font-normal">
              
              ✅Completed recidential spoken English Course - 2019
              </p>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
          <Tooltip placement="bottom" showArrow={true} content="You can find me on every social media through this bio link"
          
          className="  bg-indigo-400 dark:bg-indigo-400  rounded-2xl "
          >
            <Link
              isExternal
              showAnchorIcon
              href="https://bhagyamalshani.my.canva.site/"
              className="  hover:text-indigo-400"
            >
              Find me on Socials.
            </Link>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </motion.section>
  );
}
