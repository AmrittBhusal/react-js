import React from 'react'

function About() {
    return (
        <div className='max-w-[900px] h-auto m-auto my-20'>
            <div className='max-w-[850px] h-auto md:flex md:flex-row flex-col gap-12'>
                <div className='md:flex-[2] flex items-center justify-between'>
                    <img className='w-[90%]' src="https://tailus.io/templates/alt/alt-1.webp" alt="image" />
                </div>
                <div className=' h-auto text-center flex-col flex-wrap md:flex-[3] font-bold  '>
                    <h2 className='text-3xl  '>React development is <br/> carried out by passionate <br/>developers</h2>
                    <p className=' text-gray-500 mt-5' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                        accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                        aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                    </p>
                    <p className=' text-gray-500 mt-5'>Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                        Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About
