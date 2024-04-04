"use client";





import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Divider, Link } from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaCode } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { GoHeartFill } from "react-icons/go";
import { FaBookmark } from "react-icons/fa";



const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};



export default function Services() {
    const { ref } = useSectionInView("#Services");
    return (

        <motion.section
            id="Services"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>
                My Services
            </SectionHeading>

            <div className=" grid sm:grid-rows-1 sm:grid-flow-col md:grid-rows-2 md:grid-flow-col lg:grid-rows-2 lg:grid-flow-col gap-4 ">


                <Card className="  bg-white   rounded-lg  dark:bg-gray-800 shadow-xl   
                 hover:text-white  hover:bg-gradient-to-r from-blue-500  to-pink-500 dark:hover:bg-gradient-to-r from-green-400  to-blue-500 transform transition-transform hover:scale-[1.02]">
                    <CardHeader className=" flex-auto">
                        <FaCode
                            size="35px" />
                        <h1 className=" font-bold px-3">Content Creation</h1>
                    </CardHeader>
                    <Divider />
                    <CardBody className="  text-justify   ">
                        <p className=" ">Offer content creation services such as blog posts, creating graphics. </p>
                    </CardBody>

                </Card>

                <Card className="  bg-white   rounded-lg  dark:bg-gray-800 shadow-xl    hover:bg-gradient-to-r from-blue-500  to-pink-500 dark:hover:bg-gradient-to-r from-green-400  to-blue-500 hover:text-white transform transition-transform hover:scale-[1.02]">
                    <CardHeader className=" flex-auto">
                        <CgFigma
                            size="35px" />
                        <h1 className=" font-bold px-3">UI/UX Designs</h1>
                    </CardHeader>
                    <Divider />
                    <CardBody className="  text-justify   ">
                        <p className=" ">Crafting digital experiences with mastery in Figma and XD. Every detail finely tuned for seamless, engaging user journeys.
                            Elevate your experience with intuitive design.  </p>
                    </CardBody>

                </Card>

                <Card className="  bg-white   rounded-lg  dark:bg-gray-800 shadow-xl    hover:bg-gradient-to-r from-blue-500  to-pink-500 dark:hover:bg-gradient-to-r from-green-400   to-blue-500 hover:text-white transform transition-transform hover:scale-[1.02]">
                    <CardHeader className=" flex-auto">
                        <GoHeartFill
                            size="35px" />
                        <h1 className=" font-bold px-3">Print Design Services</h1>
                    </CardHeader>
                    <Divider />
                    <CardBody className="  text-justify   ">
                        <p className=" ">Offer print design services designing business card, flyers, posters and banner using photoshop.  </p>
                    </CardBody>

                </Card>

                <Card className="  bg-white   rounded-lg  dark:bg-gray-800 shadow-xl    hover:bg-gradient-to-r from-blue-500  to-pink-500  dark:hover:bg-gradient-to-r from-green-400   to-blue-500 hover:text-white transform transition-transform hover:scale-[1.02]">
                    <CardHeader className=" flex-auto">
                        <FaBookmark
                            size="35px" />
                        <h1 className=" font-bold px-3">Front end developing</h1>
                    </CardHeader>
                    <Divider />
                    <CardBody className="  text-justify   ">
                        <p className=" "> Using the latest web technologies such as HTML, CSS, and TypeScript framework  React, 
                         I craft responsive and visually stunning websites and web applications.. </p>
                    </CardBody>

                </Card>




            </div>


        </motion.section>





    );
}
