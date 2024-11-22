const windowButton = document.getElementById('window-button');

windowButton.addEventListener('click', () => {
    const newWindow = window.open('','','height=200,width=400');
    newWindow.document.write('<h1>Hello World</h1>');
})