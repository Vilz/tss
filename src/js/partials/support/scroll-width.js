//scrollWidth 
    var scrollWidthDiv = document.createElement('div');
    scrollWidthDiv.style.overflowY = 'scroll';
    scrollWidthDiv.style.width =  '50px';
    scrollWidthDiv.style.height = '50px';
    scrollWidthDiv.style.visibility = 'hidden';
    document.body.appendChild(scrollWidthDiv);
    var scrollWidth = scrollWidthDiv.offsetWidth - scrollWidthDiv.clientWidth;
    document.body.removeChild(scrollWidthDiv);

