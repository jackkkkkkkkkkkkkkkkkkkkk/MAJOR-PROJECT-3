var sidebar = document.querySelector('.sidebar');
var threshold = 10;

document.addEventListener('mousemove', function(e) {
  var rect = sidebar.getBoundingClientRect();
  var isNear = e.clientX < threshold;

  if(isNear) {
    sidebar.style.transform = 'translateX(0)';
  } 
});

sidebar.addEventListener('mouseleave', function() {
  sidebar.style.transform = 'translateX(-90%)';
});
