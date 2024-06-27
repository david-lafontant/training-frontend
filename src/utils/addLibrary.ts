// Add custom script file in the app
function AddLibrary(urlOfTheLibrary:string) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
    }
}
export  default AddLibrary;