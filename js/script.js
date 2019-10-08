
// ---------------------------------------------------------

$(document).ready(function() {
            // $('.no-dis').click(function() {
            //  $('.bp-chatbox').hide();
            // });
            $('.bp-cb-header').click(function() {
                $('.mini').show();
                $('.bp-chatbox').hide();
            });
            $('.mini').click(function() {
                /* Act on the event */
                $(this).hide();
                $('.bp-chatbox').show();
            });
        });
$(document).ready(function () {

   
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
    });
    
    
    
      
    if($('.area-left-menu .left-menu .list-group .list-group-item').scrollTop()<=300)
            $('.left-menu').hide();

    //scroll event
    JustMovedOverclick=$('.area-left-menu .left-menu .list-group .list-group-item');
    $(window).scroll(function(){
        if($(this).scrollTop()>=Mayhidrogen && $(this).scrollTop()<Maykangaroo){
            $('.area-left-menu .left-menu .list-group .list-group-item').css({'width': '70px', 'padding-left':'18px'});
            $("#scroll1").css({'width':'100px','padding-left':'50px'});
            JustMovedOverclick=$("#scroll1");
        }
        if($(this).scrollTop()>=Maykangaroo && $(this).scrollTop()<CaynuocHanQuoc){
            $('.area-left-menu .left-menu .list-group .list-group-item').css({'width': '70px', 'padding-left':'18px'});
            $("#scroll2").css({'width':'100px','padding-left':'50px'});
            JustMovedOverclick=$("#scroll2");
        }
        if($(this).scrollTop()>=CaynuocHanQuoc && $(this).scrollTop()<Caynuocliendoanh){
            $('.area-left-menu .left-menu .list-group .list-group-item').css({'width': '70px', 'padding-left':'18px'});
            $("#scroll3").css({'width':'100px','padding-left':'50px'});
            JustMovedOverclick=$("#scroll3");
        }
        if($(this).scrollTop()>=Caynuocliendoanh && $(this).scrollTop()<Lammatkhongkhi){
            $('.area-left-menu .left-menu .list-group .list-group-item').css({'width': '70px', 'padding-left':'18px'});
            $("#scroll4").css({'width':'100px','padding-left':'50px'});
            JustMovedOverclick=$("#scroll4");
        }
        if($(this).scrollTop()>=Lammatkhongkhi && $(this).scrollTop()<Tudontumat){
            $('.area-left-menu .left-menu .list-group .list-group-item').css({'width': '70px', 'padding-left':'18px'});
            $("#scroll5").css({'width':'100px','padding-left':'40px'});
            JustMovedOverclick=$("#scroll5");
        }
        if($(this).scrollTop()>=Tudontumat && $(this).scrollTop()<Thietbimuadong){
            $('.area-left-menu .left-menu .list-group .list-group-item').css({'width': '70px', 'padding-left':'18px'});
            $("#scroll6").css({'width':'100px','padding-left':'40px'});
            JustMovedOverclick=$("#scroll6");
        }
        if($(this).scrollTop()>=Thietbimuadong && $(this).scrollTop()<Thietbinhabep){
            $('.area-left-menu .left-menu .list-group .list-group-item').css({'width': '70px', 'padding-left':'18px'});
            $("#scroll7").css({'width':'100px','padding-left':'40px'});
            JustMovedOverclick=$("#scroll7");
        }
        if($(this).scrollTop()>=Thietbinhabep){
            $('.area-left-menu .left-menu .list-group .list-group-item').css({'width': '70px', 'padding-left':'18px'});
            $("#scroll8").css({'width':'100px','padding-left':'40px'});
            JustMovedOverclick=$("#scroll8");
            //$('#list3').css('width','65px');
        }
        if($(this).scrollTop()>300)
                $('.left-menu').show();
        if($(this).scrollTop()<=300)
                $('.left-menu').hide();
    })
    var Mayhidrogen=$('#index_col_group_1').offset().top;
    var Maykangaroo=$('#index_col_group_2').offset().top;
    var CaynuocHanQuoc=$('#index_col_group_3').offset().top;
    var Caynuocliendoanh=$('#index_col_group_4').offset().top;
    var Lammatkhongkhi=$('#index_col_group_5').offset().top;
    var Tudontumat=$('#index_col_group_6').offset().top;
    var Thietbimuadong=$('#index_col_group_7').offset().top;
    var Thietbinhabep=$('#index_col_group_8').offset().top;
    

    // hide/show rightsidebar
    if($('.area-left-menu .left-menu').scrollTop()>300)
                $('.left-menu').show();
    
    if($('.area-left-menu .left-menu').scrollTop()<=300)
                $('.left-menu').hide();

});