$(document).ready(function(){
    $("button").on("click",function(){
            
            fetch("http://www.zumatra.com/teach/promise_2.php")
            .then((resp) => resp.json()) // Transform the data into json
            .then(function(data) {
                let whole_data="";
                parent=document.getElementById("show1");
                    data.forEach(function(element) {
                        whole_data = whole_data + element + "  ";
                    });
                parent.innerHTML = whole_data;
                });
            
            fetch("http://www.zumatra.com/teach/promise_5.php")
            .then((resp) => resp.json()) // Transform the data into json
            .then(function(data) {
                let whole_data="";
                parent=document.getElementById("show2");
                    data.forEach(function(element) {
                        whole_data = whole_data + element + "  ";
                    });
                parent.innerHTML = whole_data;
                });

            fetch("http://www.zumatra.com/teach/promise_10.php")
            .then((resp) => resp.json()) // Transform the data into json
            .then(function(data) {
                let whole_data="";
                parent=document.getElementById("show3");
                    data.forEach(function(element) {
                        whole_data = whole_data + element + "  ";
                    });
                parent.innerHTML = whole_data;
                });     
    });
    
   
/*    $("#show1").draggable(
        { containment: "parent",stack: ".products"   }
    );
    $("#show2").draggable(
        { containment: "parent",stack: ".products"   }
    );
    $("#show3").draggable(
        { containment: "parent",stack: ".products"   }
    );
*/
     $("#showCircles").sortable({
        axis: "x",
        revert: true,
        scroll: false,
        placeholder: "sortable-placeholder",
        cursor: "move"
    });
    
});