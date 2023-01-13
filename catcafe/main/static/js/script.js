function alertedque(){
        var element = document.getElementById('infoque');
          style = window.getComputedStyle(element);
          visibility = style.getPropertyValue('visibility');
        if(visibility == 'hidden'){
          document.getElementById('infoque').style.visibility = 'visible';
        }
        if(visibility == 'visible'){
          document.getElementById('infoque').style.visibility = 'hidden';
        }
    }
    function alertednumber(){
        var element = document.getElementById('infonumber');
          style = window.getComputedStyle(element);
          visibility = style.getPropertyValue('visibility');
        if(visibility == 'hidden'){
          document.getElementById('infonumber').style.visibility = 'visible';
        }
        if(visibility == 'visible'){
          document.getElementById('infonumber').style.visibility = 'hidden';
        }
    }