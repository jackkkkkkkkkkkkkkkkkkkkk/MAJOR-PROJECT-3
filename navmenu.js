document.getElementById('trigger-btn').addEventListener('click', function() {
    var btn1 = document.getElementById('fadeBtn1');
    var btn2 = document.getElementById('fadeBtn2');
    var btn3 = document.getElementById('fadeBtn3');
    
    btn1.style.opacity = btn1.style.opacity == 1 ? 0 : 1;
    btn2.style.opacity = btn2.style.opacity == 1 ? 0 : 1;
    btn3.style.opacity = btn3.style.opacity == 1 ? 0 : 1;
});
