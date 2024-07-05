import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useState } from "react";

const ToogleTheme = () => {

    const [darkMode,setDarkMode] = useState(false);

    const mudaTema = () =>{
          setDarkMode(!darkMode);
          const body = document.body
        body.classList.toggle('dark');
    }

    return <div className="hidden sm:block">
        <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={mudaTema}/>
        <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={mudaTema}/>
    </div>
}

export default ToogleTheme