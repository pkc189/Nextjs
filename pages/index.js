import Link from "next/link";
import Layout from "../components/Base/Layout.js";
import {IoTrendingUpOutline} from 'react-icons/io5';

import PopularCourses from '../components/index/PopularCourse.js'

export default function IndexPage() {
  return (

    <Layout>
    <div className="trendcourse"><p className="trendcourse__icon"><IoTrendingUpOutline/></p> <p className="trendcourse__text">Trending Courses</p></div>
     
  <PopularCourses/>
<style jsx>
{` 
   .trendcourse{display:flex;font-weight:bold;}
   .trendcourse p{margin-left:50px;font-weight:bold;font-size:1.2rem}

`}
</style>

 </Layout>
  );
}
