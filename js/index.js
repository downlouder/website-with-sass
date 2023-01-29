const switchButton = document.getElementById('switchBtn');
let theme = 'light';
switchButton.innerHTML = 'Light';
switchButton.addEventListener('click', () => {
    if (theme === 'light') {
        switchButton.innerHTML = 'Dark'
        theme = 'dark';
        swapStyleSheet('style2');
        
    } else if (theme === 'dark') {
        switchButton.innerHTML = 'Light'
        theme = 'light';
        swapStyleSheet('style1');
    }
})
function swapStyleSheet(sheet) {
    document.getElementById('pageStyle').setAttribute('href', `css/${sheet}.css`);
}