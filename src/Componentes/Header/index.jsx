import ToogleTheme from "../ToogleTheme";
import { UserIcon } from "@heroicons/react/24/solid"

const Header = () => {
    return <div className="flex h-20 bg-gray-500 justify-between items-center px-5 sm:rounded-xl sm:m-5 dark:bg-black">
        <div className="flex justify-center items-center">
            <UserIcon className="h-8 text-gray-100" />
            <span className="text-gray-100 text-sm lg:text-lg">Olá, Usuário</span>
        </div>
        <span className=" text-gray-100 text-sm lg:text-lg">Meu Header em React</span>
        <ToogleTheme />
    </div>
}

export default Header;
