const accessibility = document.querySelector('.accessibility');
const fontSize = document.querySelector('#font-size');
const colorInversion = document.querySelector('#color-inversion');

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

accessibility.addEventListener("mousedown", cancelRandomSelection);
fontSize.addEventListener('click', changeFontSize);
colorInversion.addEventListener('click', inverseColor);