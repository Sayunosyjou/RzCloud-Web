import '../../index.css'
import '/src/components/tools/search'
import Search from "../tools/search";

function Top({DrawerAssembly}) {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
            <div className="navbar w-screen h-0.5 bg-base-200/40 backdrop-blur-md">
                <div className="flex-none md:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">RzCloud</a>
                </div>
                <div className="flex-none gap-2">
                    <Search/>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component"
                                     src="https://avatars.githubusercontent.com/u/46060005?v=4"/>
                            </div>
                        </div>
                        <ul tabIndex={0}
                            className="mt-3 z-[1] p-2 menu menu-sm dropdown-content rounded-box w-auto bg-base-200/60 backdrop-blur-md">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-2/3 min-h-full bg-base-200/20 backdrop-blur-md">
                    {DrawerAssembly}
                </ul>
            </div>
        </div>
    )
}

export default Top;