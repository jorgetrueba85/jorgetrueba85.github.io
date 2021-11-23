function redirect(){
    
}

/*function scrolled(){*/
    window.pageYOffset == window.scrollY;
    var y = window.scrollY;
    let root = document.documentElement;
    
    var h1opa = '1' - y / 300;
    var h1opaneg = '0' + y / 500;
    var why = y - 700;
    console.log(y);

    if (h1opa < 0){
        document.getElementById('uname').innerHTML = 'Jorge Trueba';
        document.getElementById('uname').style.opacity = h1opaneg;
    }
    else if (h1opa > 0){
        document.getElementById('uname').innerHTML = 'jorgetrueba85';
        document.getElementById('uname').style.opacity = h1opa;
    }
    
    if(y > 700){
        root.style.setProperty('--h1why', '-' + why / 2 + 'px');
    }

    if (y == 0){
        why = 0;
    }


