import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useLightMode = (key, initialValue) => {
    const [storedValue, setValue] = useLocalStorage(key,initialValue);

    useEffect(() => {
        const appEnlightener = document.querySelector("body");

        if(storedValue) {
            appEnlightener.classList.add("light-mode");
        }
        else {
            appEnlightener.classList.remove("light-mode");
        };
    }, [storedValue]);

    return [storedValue, setValue];
}

export default useLightMode