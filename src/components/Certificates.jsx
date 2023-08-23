/* eslint-disable react/prop-types */
import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import { styles } from "../styles"
import { certificates } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const CertificateCard = ({ certificate }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // date={certificate.date}
      iconStyle={{ background: certificate.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={certificate.icon}
            alt={certificate.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{certificate.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {certificate.company_name}
        </p>
      </div>


      <div className='relative w-full h-[auto] pt-2'>
        <img
          src={certificate.image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{certificate.description}</p>
      </div>

    </VerticalTimelineElement>
  )
}

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What do i know?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certificates.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={`certificate-${index}`}
              certificate={certificate}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Certificates, 'work')