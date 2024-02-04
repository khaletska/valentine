const button = document.getElementById('no');

const btnHandler = () => {
    const newX = Math.random() * (window.innerWidth - button.clientWidth);
    const newY = Math.random() * (window.innerHeight - button.clientHeight);
    
    button.style.position = 'absolute';
    button.style.top = 0;
    button.style.left = 0;
    button.style.transform = `translate(${newX}px, ${newY}px)`;
}

button.addEventListener('mouseover', btnHandler);
button.addEventListener('mousedown', btnHandler);
button.addEventListener('click', btnHandler);