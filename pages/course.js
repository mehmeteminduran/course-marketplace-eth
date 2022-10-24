import { Modal } from "@components/common"
import { CourseHero, Curriculum, Keypoints } from "@components/course"
import { BaseLayout } from "@components/layout"
import Home from "."




export default function Course() {

    const lectures = [
      "How to init App",
      "How to get a help",
      "Introduction to Solidity",
      "Programing in C++",
      "How to write For Loops",
      "Safe operator",
    ]
  
    return (
      <>
        <div className="py-4">
          <CourseHero />
        </div>
        <Keypoints/>
        <Curriculum/>
        <Modal />
      </>
    )
  }

  Course.Layout = BaseLayout