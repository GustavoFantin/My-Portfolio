import { useRef, useState, type FormEvent } from 'react'
import { NumberFormatter } from 'react-number-formatter'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

const ContactMe = () => {
    const [ number, setNumber ] = useState<string>('')
    const form = useRef<HTMLFormElement | null>(null)

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!form.current) return;

      emailjs
      .sendForm(String(process.env.SERVICE_ID), String(process.env.TEMPLATE_ID), form.current, {
        publicKey: String(process.env.PUBLIC_ID),
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      toast.success("Email sent successfully!")
      form.current.reset()
    }
  return (
    <div className='flex items-center flex-col w-screen mx-auto mb-20 relative z-20 justify-items-center'>
        <div className="flex col-span-full flex-start w-[90%] left-10 mb-5">
          <Link to={'/'}>
            <MoveLeft className="h-10 w-20 text-gray-600 hover:text-cyan-300 hover:transform hover:translate-x-1 transition-all duration-300 ease-in-out  bg-slate-900/90 rounded-xl p-3 hover:bg-slate-800/50 hover:border-cyan-400/40 border border-slate-700/50 items-center justify-center"/>
          </Link>
        </div>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-500 mb-6">
        Wanna work ? Leave a message !
      </h1>
      <span className="text-md md:text-lg w-80 text-center text-gray-500 mb-12">You can also reach me on my email: gustavofantinbarros@gmail.com</span>
      <form ref={form} className="w-screen mx-auto mb-20 relative z-20 flex flex-col gap-8 justify-items-center items-center" onSubmit={sendEmail}>
        <label className='flex flex-col gap-2'>
          Full Name:
        <input type="text" className="max-w-2xl min-w-3xs bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 hover:bg-slate-800/60 hover:border-cyan-400/30 hover:transition-all hover:duration-300" />
        </label>
          
        <label className='flex flex-col gap-2'>Email:
        <input type="email" name='user_email' className="max-w-2xl min-w-3xs bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 hover:bg-slate-800/60 hover:border-cyan-400/30 hover:transition-all hover:duration-300" />
        </label>
         <div className='flex flex-col gap-2 text-white'>
              <span className="p-1">Phone Number</span>
              <div className='bg-white'>

              <NumberFormatter
                value={number}
                initialFormat={true}
                getValue={(n: string) => setNumber(n)}
                defaultCountry="CAN"
                name='phone'
              />
              </div>
            </div>
          
        <label className='flex flex-col gap-2'>
        Message:
        <textarea name="message"  className="max-w-2xl min-w-3xs bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:bg-slate-800/60 hover:border-cyan-400/30 hover:transition-all hover:duration-300"></textarea>
        </label>
        <button className='max-w-2xl bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 hover:bg-cyan-800/60 hover:border-cyan-400/30 hover:transition-all hover:duration-300'>Submit</button>
      </form>
    </div>
  )
}

export default ContactMe