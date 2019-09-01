let night_mode = 0;

function mode_upd()
{
    if (night_mode) 
    {
        document.documentElement.classList.add('night-mode');
        document.getElementsByClassName('story')[0].classList.add('night-mode');
        document.getElementsByClassName('band')[0].classList.add('night-mode');
        document.getElementsByClassName('nav-title')[0].classList.add('night-mode');
        document.getElementById('night-mode').innerHTML = '<i class="fas fa-moon" title="Выключить ночной режим"></i>';
        document.getElementById('night-mode-mobile').innerHTML = '<i class="fas fa-moon" title="Выключить ночной режим"></i>';
    }
    else 
    {
        document.documentElement.classList.remove('night-mode');
        document.getElementsByClassName('story')[0].classList.remove('night-mode');
        document.getElementsByClassName('band')[0].classList.remove('night-mode');
        document.getElementsByClassName('nav-title')[0].classList.remove('night-mode');
        document.getElementById('night-mode').innerHTML = '<i class="far fa-moon" title="Включить ночной режим"></i>';
        document.getElementById('night-mode-mobile').innerHTML = '<i class="far fa-moon" title="Включить ночной режим"></i>';
    }
}

window.onload = function()
{
    // Прибираемся за собой
    if (localStorage.getItem('wwNightMode')) 
    {
        if (Number(localStorage.getItem('wwNightMode')) == 1) { localStorage.setItem('ww_nm', 1) }
        localStorage.removeItem("wwNightMode");
    }

    if (localStorage.getItem('ww_nm')) { night_mode = 1; }
    mode_upd();
}

document.getElementById('night-mode').onclick = function(event)
{
    event.preventDefault();
    if (night_mode) { night_mode = 0; } else { night_mode = 1; }
    mode_upd();
    if (localStorage.getItem('ww_nm')) 
    {
        localStorage.removeItem("ww_nm");
    }
    else 
    {
        localStorage.setItem('ww_nm', 1)
    }
}

document.getElementById('night-mode-mobile').onclick = function(event)
{
    event.preventDefault();
    if (night_mode) { night_mode = 0; } else { night_mode = 1; }
    mode_upd();
    if (localStorage.getItem('ww_nm')) 
    {
        localStorage.removeItem("ww_nm");
    }
    else 
    {
        localStorage.setItem('ww_nm', 1)
    }
}

document.getElementById('toggle-menu').onclick = function(event)
{
    event.preventDefault();
    document.getElementsByClassName('nav-menu')[0].classList.toggle('on')
}
