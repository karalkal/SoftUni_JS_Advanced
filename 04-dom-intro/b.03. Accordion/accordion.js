function toggle() {
    if (document.querySelector('div span.button').textContent === 'More') {
        document.querySelector('div span.button').textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }
    else if (document.querySelector('div span.button').textContent === 'Less') {
        document.querySelector('div span.button').textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}

// #extra {    display: none;}