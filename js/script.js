



// ===========================
//     script for tooltip
// ============================



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   


    $('.counter').counterUp({
      delay: 10,
      time: 2000,
      offset: 70,
      beginAt: 100,
      formatter: function (n) {
          return n.replace(/,/g, '.');
      }
    });

  });


// =====================================
//     script for counterup plugin
// ======================================
 $(document).ready(function(){
    
            $('.counter').counterUp({
                delay: 10,
                time: 1000,
                offset: 70,
                beginAt: 100,
                formatter: function (n) {
                    return n.replace(/,/g, '.');
                }
            });
      });


      


  // for first pie chart JS
  
  $(document).ready(function(){
    
  
    
    $('#static').listtopie({
      startAngle:0,
      strokeWidth:0,
        hoverEvent:false,
        drawType:'round',
        speedDraw:150,
        hoverColor:'#ffffff',
        textColor:'#ffffff',
        strokeColor:'#ffffff',
        textSize:'18',
        hoverAnimate:true,
        marginCenter:1,
        sectorRotate:true,
        easingType:mina.bounce,
        infoText:true,
    });
    $('.donut').listtopie({
      startAngle:270,
      strokeWidth:5,
        hoverEvent:true,
        hoverBorderColor:'#2a363b',
        hoverAnimate:false,
        drawType:'round',
        speedDraw:150,
        hoverColor:'#ffffff',
        textColor:'#ffffff',
        strokeColor:'#ffffff',
        textSize:'14',
        hoverAnimate:true,
        marginCenter:50,
  
    });
     
  });


// another

$(document).ready(function(){
    
  
    
  $('#static2').listtopie({
    startAngle:0,
    strokeWidth:0,
      hoverEvent:false,
      drawType:'round',
      speedDraw:150,
      hoverColor:'#ffffff',
      textColor:'#ffffff',
      strokeColor:'#ffffff',
      textSize:'18',
      hoverAnimate:true,
      marginCenter:1,
      sectorRotate:true,
      easingType:mina.bounce,
      infoText:true,
  });
  $('.donut').listtopie({
    startAngle:270,
    strokeWidth:5,
      hoverEvent:true,
      hoverBorderColor:'#2a363b',
      hoverAnimate:false,
      drawType:'round',
      speedDraw:150,
      hoverColor:'#ffffff',
      textColor:'#ffffff',
      strokeColor:'#ffffff',
      textSize:'14',
      hoverAnimate:true,
      marginCenter:50,

  });
   
});


  // <!-- Menu Toggle Script -->

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });


// for pie chart three

$(document).ready(function () {
  $('#demo-pie-1').pieChart({
      barColor: '#ff9c01',
      trackColor: '#3f3f3f',
      lineCap: 'round',
      lineWidth: 20,
      onStep: function (from, to, percent) {
          $(this.element).find('.pie-value').text(Math.round(percent) + '%');
      }
  });

  $('#demo-pie-2').pieChart({
    barColor: '#36b9cc',
    trackColor: '#3f3f3f',
    lineCap: 'round',
    lineWidth: 20,
    onStep: function (from, to, percent) {
        $(this.element).find('.pie-value').text(Math.round(percent) + '%');
    }
});


});






  









