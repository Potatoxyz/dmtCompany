function init() {
    $(function () {
            $("#slider4").responsiveSlides({
                auto: true,
                pager:true,
                nav:false,
                speed: 500,
                namespace: "callbacks"
            });
        $('.flexslider').flexslider({
            animation: "slide",
            start: function(slider){
                $('body').removeClass('loading');
            }
        });
        var body=$("html,body");
        body.on('scroll',function () {
            //console.log(document.body.scrollTop);
            if(document.body.scrollTop>300){
                $('#scrollToTop').show();
            }
            else{
                $('#scrollToTop').hide();
            }
        });
        var partNode=$('.linkTo');
        partNode.each(function (index,value) {
            $(value).click(function (e) {
                var target=$(value.getAttribute('href'));
                //console.log(target);
                if(target.length)
                    body.stop().animate({scrollTop:target[0].offsetTop+'px'}, 500, 'swing');
                e.preventDefault();
            })
        });

        $('#openRecruitment').click(function () {
            $('#recruitment').show();
            $('#recruitment').removeClass('zoomOut').addClass('zoomIn');
            setTimeout(function () {
                loadList();
            },500)
        });
        $('#closeRecruitment').click(function () {
            $('#recruitment').removeClass('zoomIn').addClass('zoomOut');
            setTimeout(function () {
                $('#recruitment').hide();
            },500)
        });
        $('.rolldown-list li').each(function () {
            var delay = ($(this).index() / 4) + 's';
            $(this).css({
                webkitAnimationDelay: delay,
                mozAnimationDelay: delay,
                animationDelay: delay
            });
        });
        var loadList=function () {
            $('#myList').removeClass('rolldown-list');
            setTimeout(function () {
                $('#myList').addClass('rolldown-list');
            }, 1);
        };
        $('#myList .pos').each(function (index,value) {
            $(value).click(function () {
                $(this).addClass('active');
                //console.log($(this).attr('data-pos'));
                var index=$(this).attr('data-pos');
                //console.log($('.text-content')[Number(index)]);
                $($('.text-content')[Number(index)]).siblings('.text-content').hide();
                $($('.text-content')[Number(index)]).fadeIn();
                $(this).siblings().removeClass('active');
            });
        })
    });
}
export {init};