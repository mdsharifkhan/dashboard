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