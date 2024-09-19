import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Projects?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with 20+ MERN Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://my-creative-journy.netlify.app" target='_blank' rel='noopener noreferrer'> {/* As your wish change this link */}
                    20+ MERN Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://i.imgur.com/RZsEzop.png" /> {/* As your wish change this image */}
        </div>
    </div>
  )
}