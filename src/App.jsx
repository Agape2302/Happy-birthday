import { useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useScript from './hooks/useScript';

const App = () => {
  useScript('/scripts/custom1.js');

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="min-h-screen flex justify-center flex-col items-center bg-green-500 lg:hidden p-5">
        <h1 className='text-5xl text-center font-bold text-white'>Buka di Laptop Please</h1>
        <p className="text-8xl mt-5">🥺</p>
      </div>

      <div className='hidden lg:block'>
        <section className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-500 flex" id="first-section">
          <div className="container mx-auto flex flex-col justify-center items-center relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h1 className="text-7xl font-semibold text-center">Hi, there. who has a long hair, very beautiful eyes, short height and who is definitely my girlfriend 😚 </h1>
            <a href="#" className='animate-bounce text-4xl absolute bottom-5'><FaArrowDown /></a>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-500 flex py-10" id='chatSection'>
          <div className="container w-3/4 mx-auto flex flex-col justify-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          <div className="flex justify-end items-start gap-2.5 mt-5" data-aos="fade-left">
              <div className="flex flex-col w-full max-w-[420px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-br-xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900">Rakan</span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900">i wanna talk about something</p>
                  <BiCheckDouble className="ms-auto text-2xl font-normal text-sky-500" />
              </div>
              <img src="/images/avatar-2.jpg" alt="" className='w-10 h-10 rounded-full'/>
            </div>
            <div className="flex items-start gap-2.5 mt-5" data-aos="fade-right">
              <img src="/images/avatar-1.JPG" alt="" className='w-10 h-10 rounded-full'/>
              <div className="flex flex-col w-full max-w-[420px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                  <div className="flex justify-start items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900">Lovebug </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900">What's wrong? </p>
                  <BiCheckDouble className="ms-auto text-2xl font-normal text-sky-500" />
              </div>
            </div>
            <div className="flex justify-end items-start gap-2.5 mt-5" data-aos="fade-left">
              <div className="flex flex-col w-full max-w-[420px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-br-xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900">Rakan</span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900">im not a perfect bf, thank you</p>
                  <BiCheckDouble className="ms-auto text-2xl font-normal text-sky-500" />
              </div>
              <img src="/images/avatar-2.jpg" alt="" className='w-10 h-10 rounded-full'/>
            </div>
            <div className="flex justify-end items-start gap-2.5 mt-5" data-aos="fade-left">
              <div className="flex flex-col w-full max-w-[420px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-br-xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900">Rakan</span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900">i just want to thank you, because of something difficult or not you continue to understand me, every day i make a mistake ypu forgive me, you understand me in every situation. thank tou, i love you so much</p>
                  <BiCheckDouble className="ms-auto text-2xl font-normal text-sky-500" />
              </div>
              <img src="/images/avatar-2.jpg" alt="" className='w-10 h-10 rounded-full'/>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-b from-indigo-500 to-fuchsia-500 flex">
          <div className="container mx-auto flex flex-col justify-center items-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h1 className="text-7xl font-semibold">🥳 Happy Birthday 🥳</h1>
            <p className="text-4xl font-medium mt-8">🎉 to my lovely and best girlfriend 🎉</p>
          </div>
        </section>

        <section className="min-h-screen py-10 flex flex-col justify-center items-center bg-gradient-to-b from-fuchsia-500 to-red-500">
          <div>
            <h2 className="text-3xl font-['pacifico'] text-white">the best photo and the photo I like the most from you</h2>
          </div>
          <div className="w-full flex justify-center h-[500px] gap-[10px] mt-10">
            <div className="flex-[0_0_150px] rounded-lg transition duration-500 ease-in-out cursor-pointer shadow-[1px_5px_15px_#1e0e3e relative overflow-hidden bg-[url('/images/img-1.JPG')] bg-no-repeat bg-[50%] bg-cover hover:flex-[0_0_350px] hover:shadow-[1px_3px_15px_#7645d8] hover:translate-y-[-30px] group/carousel">
              <div className="font-['Ubuntu_Mono'] text-white text-2xl flex flex-col justify-end items-center padding-4 h-full bg-gradient-to-t from-[#02022cac] from-30% opacity-0 group-hover/carousel:opacity-100 translate-y-full group-hover/carousel:translate-y-0 transition-opacity duration-500 ease-in-out transition-transform duration-500 delay-200">
                <span className="block mt-1 mb-14 text-lg">The sexiest</span>
              </div>
            </div>
            <div className="flex-[0_0_150px] rounded-lg transition duration-500 ease-in-out cursor-pointer shadow-[1px_5px_15px_#1e0e3e relative overflow-hidden bg-[url('/images/img-2.JPG')] bg-no-repeat bg-[50%] bg-cover hover:flex-[0_0_350px] hover:shadow-[1px_3px_15px_#7645d8] hover:translate-y-[-30px] group/carousel">
              <div className="font-['Ubuntu_Mono'] text-white text-2xl flex flex-col justify-end items-center padding-4 h-full bg-gradient-to-t from-[#02022cac] from-30% opacity-0 group-hover/carousel:opacity-100 translate-y-full group-hover/carousel:translate-y-0 transition-opacity duration-500 ease-in-out transition-transform duration-500 delay-200">
                <span className="block mt-1 mb-14 text-lg">the most beautiful</span>
              </div>
            </div>
            <div className="flex-[0_0_150px] rounded-lg transition duration-500 ease-in-out cursor-pointer shadow-[1px_5px_15px_#1e0e3e relative overflow-hidden bg-[url('/images/img-3.jpg')] bg-no-repeat bg-[50%] bg-cover hover:flex-[0_0_350px] hover:shadow-[1px_3px_15px_#7645d8] hover:translate-y-[-30px] group/carousel">
              <div className="font-['Ubuntu_Mono'] text-white text-2xl flex flex-col justify-end items-center padding-4 h-full bg-gradient-to-t from-[#02022cac] from-30% opacity-0 group-hover/carousel:opacity-100 translate-y-full group-hover/carousel:translate-y-0 transition-opacity duration-500 ease-in-out transition-transform duration-500 delay-200">
                <span className="block mt-1 mb-14 text-lg">the cutest</span>
              </div>
            </div>
            <div className="flex-[0_0_150px] rounded-lg transition duration-500 ease-in-out cursor-pointer shadow-[1px_5px_15px_#1e0e3e relative overflow-hidden bg-[url('/images/img-4.JPG')] bg-no-repeat bg-[50%] bg-cover hover:flex-[0_0_350px] hover:shadow-[1px_3px_15px_#7645d8] hover:translate-y-[-30px] group/carousel">
              <div className="font-['Ubuntu_Mono'] text-white text-2xl flex flex-col justify-end items-center padding-4 h-full bg-gradient-to-t from-[#02022cac] from-30% opacity-0 group-hover/carousel:opacity-100 translate-y-full group-hover/carousel:translate-y-0 transition-opacity duration-500 ease-in-out transition-transform duration-500 delay-200">
                <span className="block mt-1 mb-14 text-lg">the smartest</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gradient-to-b from-red-500 to-orange-400">
          <div className="container mx-auto flex flex-col w-10/12">
            <div className="grid gap-10 grid-cols-2 my-2">
              <video className="w-full border-8 border-white aspect-video bg-gradient-to-r from-cyan-500 to-blue-500" controls >
                <source src="/images/buba.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col justify-center items-center">
                <p className="text-white text-2xl text-center font-medium">I may not know what the future holds, but my hope is that you will always be a part of it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-orange-400 to-blue-500">
          <div className="min-h-screen w-8/12 mx-auto flex flex-col justify-center items-center" ><div className="container mx-auto mb-10 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h1 className="text-4xl font-semibold">🤗 Moments in Harmony: Our Shared Seconds 🤗</h1>
          </div>
          <div className="mb-10 relative w-[350px] perspective-1000">
            <div className="absolute w-full h-full transform-style-3d animate-rotate360">
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-5.JPG')] bg-cover flex" style={{ transform: 'rotateY(0deg) translateZ(350px)'}}>
                
              </div>
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-6.JPG')] bg-cover flex" style={{ transform: 'rotateY(40deg) translateZ(350px)'}}>
                
              </div>
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-7.JPG')] bg-cover flex" style={{ transform: 'rotateY(80deg) translateZ(350px)'}}>
                
              </div>
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-8.JPG')] bg-cover flex" style={{ transform: 'rotateY(120deg) translateZ(350px)'}}>
                
              </div>
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-9.JPG')] bg-cover flex" style={{ transform: 'rotateY(160deg) translateZ(350px)'}}>
                
              </div>
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-10.JPG')] bg-cover flex" style={{ transform: 'rotateY(200deg) translateZ(350px)'}}>
                
              </div>
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-11.JPG')] bg-cover flex" style={{ transform: 'rotateY(240deg) translateZ(350px)'}}>
                
              </div>
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-12.JPG')] bg-cover flex" style={{ transform: 'rotateY(280deg) translateZ(350px)'}}>
                
              </div>
              <div className="absolute w-[250px] h-[187px] top-5 inset-x-2 bg-[url('/images/img-13.JPG')] bg-cover flex" style={{ transform: 'rotateY(320deg) translateZ(350px)'}}>
                
              </div>
            </div>
          </div>
          </div>
        
        </section>
        <section className="min-h-screen bg-gradient-to-b from-blue-500 to-amber-400 flex">
          <div className="container mx-auto w-10/12 flex flex-col justify-center items-center relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h2 className="text-4xl font-semibold text-center mt-3">kamu adalah wanita yang sangat lucu, kamu cantik, baik kadang ngeselin, bisa cuek, bisa juga pengertian dan moodnya mudah berubah, tapi ranpa kamu ketahui, kamu sangat spesial di mataku. I love you so much😚🤗 </h2>
            <a href="#last-section" className='animate-bounce text-4xl mt-10'><FaArrowDown /></a>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-b from-amber-400 to-lime-500 flex" id='last-section'>
          <div className="container mx-auto flex flex-col justify-center items-center relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h2 className="text-3xl font-semibold text-center">Happy Birthday sayangku, i wish, apapun doa dan keinginan kamu bisa kampu dapetin, jangan lupa nikmatin prosesnya ya. Tetep semangat karena inget banyak yang dukung kamu, termasuk aku juga. Jangan takut untuk gagal ya sayang, I'll be there for u. I love you sayang😚 </h2>
            <a href="#first-section" className='animate-bounce text-4xl absolute bottom-5 right-5' title="Kembali ke Atas"><FaArrowUp /></a>
          </div>
        </section>

        <footer className='bg-lime-500'>
          <h2 className='text-center font-medium text-lg py-3'>Made with ❤️ by Rakan. Copyright &copy; 2024.</h2>
        </footer>
      </div>
    </>
  );
};


export default App
