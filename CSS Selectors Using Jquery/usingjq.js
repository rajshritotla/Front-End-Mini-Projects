$(document).ready(
    function appendElements() {
        var i;
        var h3_1=$("<h3></h3>").text("First H3").attr('name','firstHeading');  // Create heading with jQuery
        var h3_2=$("<h3></h3>").text("Second H3").attr('id','secondHeading');
        var h3_3=$("<h3></h3>").text("Third H3").attr('name','thirdHeading');
          
        $("div[name='main_div']").append(h3_1,h3_2,h3_3);     // Append new elements
        
            
            var h3_1_info=$("<span></span>").text("     Attribute selector applied  ->>h3[name=firstHeading]").attr('class','comment');    //for info 
            $("h3[name='firstHeading']").append(h3_1_info);

            var h3_2_info1=$("<span></span>").text("     Id selector applied ->>h3[id=secondHeading]").attr('class','comment');    //for info 
            $("h3[id='secondHeading']").append(h3_2_info1);


        for(i=1;i<=5;i++){
            var parah_create=$("<p></p>").text("Parahgraph "+i).attr('name','parah'+i);
            $("h3[name='firstHeading']").append(parah_create);
        }
        
        for(i=6;i<=10;i++){
            var parah_create=$("<p></p>").text("Parahgraph "+i).attr('name','parah'+i);
            $("h3[id='secondHeading']").append(parah_create);
        }

            var h3_2_info2=$("<span></span>").text("     Direct descendants selector applied ->> h3[id=secondHeading] > p[name=parah6]").attr('class','comment');    //for info 
            $("p[name='parah6']").append(h3_2_info2);

            
        for(i=11;i<=15;i++){
            var parah_create=$("<p></p>").text("Parahgraph "+i).attr('name','parah'+i);
            $("h3[name='thirdHeading']").append(parah_create);
        }

            var h3_3_info=$("<span></span>").text("     Descendants selector applied ->> body div h3[name=thirdHeading] p[name=parah12]").attr('class','comment');    //for info 
            $("p[name='parah12']").append(h3_3_info);

        for(i=1;i<=12;i++){
            var span_create=$("<span></span>").text("  Span "+i).attr('name','span'+i);
            $("div[name='forSpan']").append(span_create);
        }
            var span_info=$("<span></span>").text("     Adjacency selector applied ->> span+span").attr('class','comment');    //for info 
            $("span[name='span1']").append(span_info);
    }
);