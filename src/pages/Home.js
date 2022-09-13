import React from 'react'
import Navbar from '../components/nav/Navbar';
import Banner from '../components/banner/Banner';
import Work from '../components/work/Work';
import Project from '../components/project/Project';
import ProblemSolve from '../components/problemsolve/ProblemSolve';
import Testimonial from '../components/testimonial/Testimonial';
import Faq from '../components/faq/Faq';
import Inquiry from '../components/inquiry/Inquiry';
import Blog from '../components/blog/Blog';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Work />
    <Project />
    <ProblemSolve />
    <Testimonial />
    <Faq />
    <Inquiry />
    <Blog />
    <Footer />
  </>
  )
}

export default Home