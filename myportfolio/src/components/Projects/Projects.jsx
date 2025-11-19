import React from 'react'
import Projectscard from './projectscard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>

      <div className='py-12 px-8 flex flex-wrap gap-5'>

        <Projectscard
          title='Carzoo'
          main='Automated enrolment, scheduling, instructor allocation, and record management to reduce manual effort and improve accuracy.'
          demoLink='https://your-carzoo-demo-link.com'
          sourceLink='https://github.com/yourusername/carzoo'
        />

        <Projectscard
          title='Complaint Box'
          main='Built a cross-platform app for users to submit and track complaints under multiple categories with realtime admin responses.'
          demoLink='https://your-complaint-demo-link.com'
          sourceLink='https://github.com/yourusername/complaint-box'
        />

        <Projectscard
          title='Savoury Score'
          main='MEAN-stack application for authentic reviews/ratings; owners manage profiles and respond to feedback.'
          demoLink='https://your-savoury-demo-link.com'
          sourceLink='https://github.com/yourusername/savoury-score'
        />

      </div>
    </div>
  )
}

export default Projects
