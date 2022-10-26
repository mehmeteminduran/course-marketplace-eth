import { useWeb3 } from "@components/providers";
import {Hero, Breadcrumbs} from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { OrderCard } from "@components/ui/order";
import { EthRates, WalletBar } from "@components/ui/web3";
import { getAllCourses } from "content/courses/fetcher";

export default function Home({courses}) { 
  return (  
    <> 
            <Hero/>
            <Breadcrumbs/>
            <WalletBar />
            <EthRates />
            <OrderCard />  
            <CourseList courses={courses} />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Home.Layout = BaseLayout