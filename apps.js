document.addEventListener('DOMContentLoaded', async function () {
    const body = document.body;
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const spaceofmessages = document.getElementById('messages-container');
    const SendMessage = document.getElementById('button-send');
    const ChangeColor = document.getElementById('button-toggle-theme');

    const LIghtMode = {
        body: '#F8F8F8',
        header: '#2c024b',
        main: '#F6F6F6',
        footer: '#F6F6F6',
        message: '#2c024b',
        border: '#EDF0F1',
        text: '#4F4F4F'
      };
    
      const DArkMode = {
        body: '#242F38',
        header: '#52a5e0',
        main: '#141F27',
        footer: '#141F27',
        message: '#52a5e0',
        border: '#192934',
        text: '#D5D8DA'
      };

    function applyTheme(colors) {
        for (let key in colors) {
            body.style.setProperty(`--${key}`, colors[key]);
        }
    }

    function toggleTheme() {
        const DarkM = body.classList.toggle('dark-mode');
        const ColorMode = DarkM ? DArkMode : LIghtMode;
        applyTheme(ColorMode);
        ChangeColor.innerText = DarkM ? '🕶️' : '👓';
        localStorage.setItem('darkMode', DarkM);
    }

    ChangeColor.addEventListener('click', toggleTheme);

})