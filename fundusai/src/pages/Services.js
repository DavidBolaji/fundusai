// import HowItWorks from '../images/how-it-works.jpg'
import check from '../images/check-circle.png'
const Services= (props) => {
   
    return (
      <section  className='md:px-20 px-10 md:py-12 py-10 '>
          <h1 className='font-[poppins] text-[#0447b9] text-[40px] font-light text-center
          pb-14'>How it Works</h1>
          <div className='flex flex-col-reverse lg:flex-row gap-10'>
            <img src={`../images/${props.img}`}  alt='a bulb' className=' max-w-fit md:w-[400px]' />
            <div className=' flex gap-4'>
              <div className='relative pt-2'>
                <span className='w-5 h-5 border-solid border-2 border-black flex justify-center items-center'>{props.num}</span>
                <div className="border-l-2 border-[#b4b4b4] absolute h-[95%] top-8 left-[50%]"></div>
              </div>
                
              <div>
                <h3 className='font-[poppins] font-bold text-[20px] text-[#160647]' >{props.title}</h3>
                <p className='font-semi-bold text-[18px] text-[#160647] py-2 max-w-prose'>{props.description} </p>
                <ul>
                  <li className='flex items-center gap-2 py-1'>
                    <img src={check} alt='check' className='w-5' />
                    <span>{props.listOne}</span>
                  </li>
                  <li className='flex items-center gap-2 py-1' >
                    <img src={check} alt='check' className='w-5' />
                    <span>{props.listTwo}</span>
                  </li>
                  <li className='flex items-center gap-2 py-1' >
                    <img src={check} alt='check' className='w-5' />
                    <span>{props.listThree}</span>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
      </section>
    )
  }
  
  export default Services