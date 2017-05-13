/**
 * Created by john zhou on 2017/5/13.
 */

(function(){

    //获取相关元素
    var uls = document.querySelectorAll(".main-btn h3");
    var alllis = document.querySelectorAll(".main-btn li");

    //默认关闭全部菜单
    for(var i=0;i<alllis.length;i++){
        alllis[i].style.display = "none";
    }
    //默认小箭头方向向右
    for(var i=0;i<uls.length;i++){
        uls[i].querySelector("s").className = "glyphicon glyphicon-triangle-bottom";
    }

    //点击打开或关闭菜单
    for(var i=0;i<uls.length;i++){
        uls[i].index = i;
        uls[i].onclick = function(){
            //获取该ul下面的全部li
            var lis = uls[this.index].parentElement.querySelectorAll("li");
            var icon = uls[this.index].querySelector("s");

            for(var j=0;j<lis.length;j++){
                var display = lis[j].style.display;
                if(display==="none"){
                    lis[j].style.display = "block";
                    icon.className = "glyphicon glyphicon-triangle-right";
                }else{
                    lis[j].style.display = "none";
                    icon.className = "glyphicon glyphicon-triangle-bottom";
                }
            }
        }
    }

})();

(function(){
    var hidelis = document.querySelectorAll(".admin-menu-hide");
    var hoverul = document.querySelector(".admin-menu");
    hoverul.onmouseover = function(){
        for(var i=0;i<hidelis.length;i++){
            hidelis[i].style.display = "block";
        }
    };
    hoverul.onmouseout = function(){
        for(var i=0;i<hidelis.length;i++){
            hidelis[i].style.display = "none";
        }
    }
})();


