
export default function BodyComponent () {
    return (
        <div className="relative lg:flex lg:flex-row lg:items-center lg:justify-between lg:leading-20">
           <div className="flex flex-row items-center justify-around lg:order-2 relative">
             <img src="../public/assets/Blue-Shape.svg" alt="blueShape image" className=" h-64 lg:h-120 -rotate-30"/>
             <img src="../public/assets/Pink-Shape.svg" alt="blueShape image" className="absolute top-4 h-64 lg:h-120 -rotate-20"/>
             <img src="../public/assets/Purple-Shape.svg" alt="blueShape image" className="absolute top-4 h-64 lg:h-120 -rotate-10 text-sm"/>
             <img src="../public/assets/Hero-Model.png" alt="blueShape image"  className="absolute top-4 h-64 lg:h-120 text-sm"/>
           </div>
           <div className="space-y-2 mt-10 lg:order-1 lg:w-1/2">
            <h2 className="text-[3em] font-bold font-serif leading-[1em]">Host your website in less than 5 minutes</h2>
            <p className="text-gray-400 text-[1em]" >With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
              <form action = "" method="" class="flex flex-col items-start justify-center gap-y-6 lg:flex-row lg:justify-start lg:gap-x-5">
               <input type="text" placeholder="Enter e-mail address" className="lg:w-60 w-90 h-12 p-2 bg-white placeholder:text-gray-500 rounded-sm" />
               <button className="w-90 h-12 p-2 bg-blue-300 active:bg-blue-500 hover:bg-blue-500 lg:w-40 text-center text-white leading-[.5em] rounded-[5px]">Join Waitlist</button>
              </form>
            <div className="flex gap-x-2 lg:flex-row">
              <img src="../public/assets/Checkmark.svg" alt="check marker image" />
              <p>No spam ,ever . Unsubscribe anytime</p>
            </div>
           </div>
        </div>
    )
}