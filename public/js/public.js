var oDiv = document.getElementsByClassName('list-tab-content');
        // var oDiv2 = document.getElementsByClassName('list-wrap')[0];
        // var oLi = oDiv2.getElementsByTagName('li');
        $(document).ready(function () {
            //顶部导航切换事件
            $(".list-tab").hover(function () {
                $('.header').css('background', '#fff');
                $(".list-tab>li>a").css('color', '#333');
                $(this).find('.list-tab-wrap').stop().slideDown(300);
            },function(){
                $(this).find('.list-tab-wrap').css('display','none');
                $('.header').css('background', 'rgba(255,255,255,0)');
                $(".list-tab>li>a").css('color', '#fff');
            })
            $('.list-wrap').mouseleave(function(){
                $(this).css('display','none');
                $('.header').css('background', 'rgba(255,255,255,0)');
                $(".list-tab>li>a").css({'color':'#fff'});
            })
           // 顶部标签切换对应div显示
            $(".list-tab>li>a").each(function (index, item) {
                $(item).hover(function () {
                    $(this).addClass('active');
                    [...oDiv].forEach(function (items, index) {
                        items.style.display = "none";
                    })
                    oDiv[index].style.display = "block";
                }, function () {
                    $(this).removeClass('active');
                })
            });
            $('.list-tab-content li').each(function(index,item){
                $(item).hover(function(){
                    myFilter();
                    this.classList.remove('noactive');
                    this.classList.add('active');
                },function(){
                    myFilterAll();
                })
            })
            function myFilter() {
                $('.list-tab-content li').each(function(index,item){
                    $(item).addClass('noactive')
                })
            }
            function myFilterAll(){
                $('.list-tab-content li').each(function(index,item){
                    $(item).removeClass('active noactive')
                })
            }
         })