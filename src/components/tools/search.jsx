import {createSignal} from "solid-js";
import {BsSearch} from 'solid-icons/bs'
import {SearchPreviewList} from "../file/list";

function Search() {
    const [inputValue, setInputValue] = createSignal('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(inputValue());
            setInputValue('');
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <div className="hidden md:block">
                <div className="dropdown dropdown-end">
                    <input tabIndex={0} type="text" placeholder="Search"
                           className="input input-ghost w-full max-w-xs avatar"
                           value={inputValue()} onInput={handleChange} onKeyPress={handleKeyPress}>
                    </input>
                    <div tabIndex={0}
                         className="mt-3 z-[1] dropdown-content rounded-box w-full bg-base-200 relative max-h-32 min-h-20 overflow-y-scroll scrollbar-hide">
                        <SearchPreviewList searchKey={inputValue()} Class={"absolute"}/>
                    </div>
                </div>
            </div>
            <div role="button" className="btn btn-ghost md:hidden"
                 onClick={() => document.getElementById("mdSearchPreviewModal").showModal()}><BsSearch/></div>
            <dialog id="mdSearchPreviewModal" className="modal modal-top">
                <div className="modal-box backdrop-blur-sm space-y-4 overflow-y-scroll scrollbar-hide">
                    <input tabIndex={0} type="text" placeholder="Search"
                           className="input input-ghost w-full avatar"
                           value={inputValue()} onInput={handleChange} onKeyPress={handleKeyPress}>
                    </input>
                    <SearchPreviewList searchKey={inputValue()}/>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Search;