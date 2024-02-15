/* @refresh reload */
import {render} from 'solid-js/web';

import './index.css';
import App from './App';
import GlobalLoadPage from "./BaseViewElement/GlobalLoadPage";
import {createSignal, onMount} from "solid-js";

const root = document.getElementById('root');
const loading = document.getElementById('loading');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

const [hidden, setHidden] = createSignal("");
onMount(() => {
    setHidden("hidden")
});
render(() => <GlobalLoadPage Stats={hidden()}/>, loading);
render(() => <App/>, root);