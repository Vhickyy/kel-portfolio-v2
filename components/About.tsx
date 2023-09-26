import React from 'react'

function About() {
  return (
    <section className='pt-[8rem]'>
      {/* <div className='flex items-center justify-center'> */}
        {/* <h2 className='font-extrabold text-3xl text-primary'> 01.</h2> */}
        <h2 className='font-extrabold text-3xl text-textColor text-center'>About Me</h2>
        {/* <div className='w-[7rem] h-[1px] bg-textgray'></div> */}
      {/* </div> */}
      <div>
        <p className='text-textgray leading-loose mt-6   tracking-wider'>
        I am a Business Management graduate, a Business Assistant and a <span className="text-primary font-bold">Canva Expert</span> with more than 3years experience. I am also a <span className="text-primary font-bold">Canvassador</span>. I take my client's work very seriously and always deliver on time.
        </p>
        <p className='text-textgray leading-loose mt-6   tracking-wider'>
        My works are always exceptional and extraordinary; reason why my clients stick with me.
        I create attractive and scroll-stopping designs for business owners that help them grab the attention of their target/potential customers.
        I also tutor people on how to make better use of Canva. I have trained over a thousand people.
        </p>
      </div>
    </section>
  )
}

export default About