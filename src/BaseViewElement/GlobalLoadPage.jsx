import {ViewIndexConfig} from "../index.config";

export default function GlobalLoadPage({Stats}) {
    return (
        <div id="Loading"
             class={Stats}
             className={`fixed z-[${ViewIndexConfig.LoadPage}] h-screen w-screen grid place-items-center bg-base-100`}>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )
}