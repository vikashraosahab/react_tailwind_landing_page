
export const FooterComponent = ()=>{
    return (
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
           <ul className="flex flex-row items-start gap-x-5 text-gray-500 text-[1.1em]">
            <li><a href="#" classNanme="text-gray-500">Facebook</a></li>
            <li><a href="#" classNanme="text-gray-500">Instagram</a></li>
            <li><a href="#" classNanme="text-gray-500">Twitter</a></li>
           </ul>
           <div className="flex flex-row items-start gap-x-2 mt-5 bg-amber-50">
             <img src="../public/assets/Help-Avatar.svg" alt="a boy image" />
             <p className="text-gray-500">Have any Questions?<br/>Talk to a specialist!</p>
           </div>
        </div>    
    )
}