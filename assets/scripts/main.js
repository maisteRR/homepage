const accessibility = document.querySelector('.accessibility');
const fontSize = document.querySelector('#font-size');
const colorInversion = document.querySelector('#color-inversion');
const languageSwitch = document.querySelector('#language-switch');

const cancelRandomSelection = (e) =>{
    e.preventDefault();
}

const changeFontSize = () =>{
    const currentSize = parseInt(getComputedStyle(document.body, null).getPropertyValue("font-size"));
    if(currentSize < 24)
        document.body.style.fontSize = (currentSize + 2) + 'px';
    else
        document.body.style.fontSize = '14px';
}

const inverseColor = () =>{
    const currentFilter = getComputedStyle(document.body, null).getPropertyValue("filter");
    if(currentFilter === 'none')
        document.body.style.filter = 'invert(1)';
    else
        document.body.style.filter = 'none';
}
const changeLanguage = () =>{
    const { href } = window.location;

    if(href.endsWith('/uk/'))
        window.location = `${window.location.origin}/homepage/ru`
    else if(href.endsWith('/ru/'))
        window.location = `${window.location.origin}/homepage/`
    else
        window.location = `${window.location.origin}/homepage/uk`
}
const changeSettings = (e) =>{
    switch (e.target) {
        case fontSize:
            changeFontSize();
            break;
        case colorInversion:
            inverseColor();
            break;
        case languageSwitch:
            changeLanguage();
            break;
    }
}
accessibility.addEventListener("mousedown", cancelRandomSelection);

accessibility.addEventListener("click", changeSettings, false);