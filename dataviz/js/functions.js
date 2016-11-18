var markers = [];
var type;
var passdata;
var boxList =[];
var index = 0;
var typeData;
var weightData;
var menuData;
var num = [];
var weight = 70;
var menu ;
function initialize() {
         var myStyles =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
        }
        ];
        var latitude = 33.4294,
            longitude = -111.9431
            radius = 80000, //how is this set up
            center = new google.maps.LatLng(latitude,longitude),
        
       

            mapOptions = {
                center: center,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles:myStyles,
                disableDoubleClickZoom: true
            };

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
     
         
         
         $("#Chinese").click(function(){
            type = "Chinese";
            $("#ChineseMenu").show();
            $("#SeafoodMenu").hide();
            $("#MexicanMenu").hide();
            $("#JapanMenu").hide();
            $("#ItalianMenu").hide();
            $("#AmericanMenu").hide();
            weight = 70;
            weightData = getTypeData(type);
            typeData = getWeightData(weightData,weight);
         });
         $("#Seafood").click(function(){
            type = "Seafood";
            $("#SeafoodMenu").show();
            
            $("#ChineseMenu").hide();
            $("#MexicanMenu").hide();
             $("#JapanMenu").hide();
            $("#ItalianMenu").hide();
            $("#AmericanMenu").hide();
           weightData = getTypeData(type);
            typeData = getWeightData(weightData,weight);
         });
         $("#Mexican").click(function(){
            type = "Mexican";
            weight = 70;
            $("#SeafoodMenu").hide();
            $("#ChineseMenu").hide();
            $("#MexicanMenu").show();
             $("#JapanMenu").hide();
            $("#ItalianMenu").hide();
            $("#AmericanMenu").hide();
             
            weightData = getTypeData(type);
            typeData = getWeightData(weightData,weight);
         });
         $("#Japanese").click(function(){
            type = "Japanese";
            weight = 70;
            $("#SeafoodMenu").hide();
            $("#ChineseMenu").hide();
            $("#JapanMenu").show();
            $("#MexicanMenu").hide();
            $("#ItalianMenu").hide();
            $("#AmericanMenu").hide();
             
            weightData = getTypeData(type);
            typeData = getWeightData(weightData,weight);
         });
         $("#Italian").click(function(){
            type = "Italian";
            weight = 70;
            $("#SeafoodMenu").hide();
            $("#ChineseMenu").hide();
            $("#MexicanMenu").hide();
            $("#JapanMenu").hide();
            $("#ItalianMenu").show();
            $("#AmericanMenu").hide();
            weightData = getTypeData(type);
            typeData = getWeightData(weightData,weight);
         });
         $("#American").click(function(){
            type = "American (Traditional)";
            weight = 70;
            $("#SeafoodMenu").hide();
            $("#ChineseMenu").hide();
            $("#MexicanMenu").hide();
            $("#JapanMenu").hide();
            $("#ItalianMenu").hide();
            $("#AmericanMenu").show();
            weightData = getTypeData(type);
            typeData = getWeightData(weightData,weight);
         });



         $("#setweight").click(function(){
             $("#rankbtn").show();
           // menu = "crab";
    
            
            weightData = getTypeData(type);
            typeData = getWeightData(weightData,weight);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        
         $("#S_Crab").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "crab";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
         $("#S_Lobster").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "lobster";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
         $("#S_Fish").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "fish";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#S_Oyster").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "oyster";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
           $("#S_Tuna").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "tuna";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
           $("#S_Clam").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "clam";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
           $("#S_Shrimp").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "shrimp";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
           $("#S_Salmon").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "salmon";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#C_Beef").click(function(){
             $("#rankbtn").show();
            menu = "beef";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#C_Chicken").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "chicken";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#C_Tofu").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "tofu";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#C_Dumpling").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "dumpling";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#C_Fish").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "fish";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#C_Noodle").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "noodle";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#C_Duck").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "duck";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#C_Pork").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "pork";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
             menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
         $("#M_Taco").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "taco";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
         $("#M_Burrito").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "burrito";
    
          //  typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
         $("#M_Quesadilla").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "quesadilla";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#M_Carnita").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "carnita";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#M_Fajita").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "fajita";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#M_Guacamole").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "guacamole";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#M_Enchilada").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "enchilada";
    
            //typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#M_Chimichanga").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "chimichanga";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#I_Bruschetta").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "bruschetta";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#I_Pasta").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "pasta";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#I_Pizza").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "pizza";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#I_Risotto").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "risotto";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#I_Tiramisu").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "tiramisu";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#I_Cheese").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "cheese";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        
         $("#I_Soup").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "soup";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#I_Beef").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "beef";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });



        $("#J_Sushi").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "sushi";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#J_Sashimi").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "sashimi";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#J_Ramen").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "ramen";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#J_Tempura").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "tempura";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#J_Rice").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "rice";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#J_Fish").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "fish";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        
         $("#J_Soup").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "soup";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#J_Beef").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "beef";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });

          $("#A_Sandwich").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "sandwich";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#A_Chicken").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "chicken";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#A_Sausage").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "sausage";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#A_Turkey").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "turkey";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#A_Appetizer").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "appetizer";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        $("#A_Dessert").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "dessert";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
        
         $("#A_Soup").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "soup";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });
          $("#A_Beef").click(function(){
             $("#rankbtn").show();
             $("#weight").show();
            menu = "beef";
    
           // typeData = getTypeData(type);
            DeleteMarkers();
            setMarkers(center,radius,map,getMenuData(typeData,menu));
            menuData = getMenuData(typeData,menu);
             $("#r1").html(menuData[0].name);
             $("#r2").html(menuData[1].name);
             $("#r3").html(menuData[2].name);
             $("#r4").html(menuData[3].name); 
             $("#r5").html(menuData[4].name);
             $("#r6").html(menuData[5].name);
             $("#r7").html(menuData[6].name);
             $("#r8").html(menuData[7].name); 
             $("#r9").html(menuData[8].name);
             $("#r10").html(menuData[9].name);
         });

        


      $("#r1").click(function(){
        latLng = new google.maps.LatLng(menuData[0].latitude, menuData[0].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);

      });
      $("#r2").click(function(){
        latLng = new google.maps.LatLng(menuData[1].latitude, menuData[1].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });
      $("#r3").click(function(){
        latLng = new google.maps.LatLng(menuData[2].latitude, menuData[2].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });
      $("#r4").click(function(){
        latLng = new google.maps.LatLng(menuData[3].latitude, menuData[3].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });
      $("#r5").click(function(){
        latLng = new google.maps.LatLng(menuData[4].latitude, menuData[4].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });
    $("#r6").click(function(){
        latLng = new google.maps.LatLng(menuData[5].latitude, menuData[5].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });
      $("#r7").click(function(){
        latLng = new google.maps.LatLng(menuData[6].latitude, menuData[6].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });
      $("#r8").click(function(){
        latLng = new google.maps.LatLng(menuData[7].latitude, menuData[7].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });
      $("#r9").click(function(){
        latLng = new google.maps.LatLng(menuData[8].latitude, menuData[8].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });
      $("#r10").click(function(){
        latLng = new google.maps.LatLng(menuData[9].latitude, menuData[9].longitude); 
        
        map.panTo(latLng);
        map.setZoom(15);
      });    

    }



    function getTypeData(type){
         var json = (function () { 
            var json = null; 
            $.ajax({ 
                'async': false, 
                'global': false, 
                'url': "json/Phoenix.json", 
                'dataType': "json", 
                'success': function (data) {
                     json = data; 
                 }
            });
            return json;
        })();
       
        
        var js=$(json).filter(function (i,n){return n.type_r===type});
        return js;

    }
    function getWeightData(json,weight){
       var js=$(json).filter(function (i,n){return n.weight==weight});
        return js;
    }

    function getMenuData(json,menu){
         
        
        var js=$(json).filter(function (i,n){return n.manu_r===menu});
        return js;

    }


    function setMarkers(center, radius, map,js) {
       
        var bounds = new google.maps.LatLngBounds();   
        passdata = js;
        //loop between each of the json elements
        for (var i = 0, length = js.length; i < length; i++) {
            data = js[i];
         
            latLng = new google.maps.LatLng(data.latitude, data.longitude); 



            
                // Creating a marker and putting it on the map
                 var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: data.name,
                    zIndex:1,
                    opacity:0
                    
                });
               
              
            
            marker.infoWindow = new google.maps.InfoWindow();
            
            //marker.infoWindow.setContent(data.name);
            
           

                
                if(i<3)bounds.extend(marker.position);  
        // Attaching a click event to the current marker
            google.maps.event.addListener(marker, "click", (function(marker,i) {
            
            return function() {
                    boxList[i].open(map, this);
                    map.panTo(this.getPosition());
                   
                    map.setZoom(15);
  
                    index = i;
        
                }
            })(marker, i));
           google.maps.event.addListener(map, 'click', function() {
            boxList[index].close();
            map.setZoom(12);
          });

       

           
            markers.push(marker);
            
            var myOp = {
                 content: document.getElementById("info")
                ,disableAutoPan: true
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-200, -400)
                ,zIndex: 3
                ,boxStyle: { 
                  background: "url('tipbox.gif') no-repeat"
                  ,opacity: 1
                  
                 }
                
                ,closeBoxURL:""
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,position:latLng
                ,isHidden: false
                ,pane: "mapPane"
                ,enableEventPropagation: false

            };
            var ib = new InfoBox(myOp);
            boxList.push(ib);
        }
          
        
        for (var i = 0; i < markers.length; i++) {
            
             var frame = [];
            
             frame[0] = document.getElementById("gold");
             frame[1] = document.getElementById("silver");
             frame[2] = document.getElementById("bronze");
             var n = i+1;
             if(i>2){
              num[i] = document.getElementById("rank"+n);
              num[i].innerHTML = "<img src='img/number_"+n+".png'>"
            }
            //liq[1] = document.getElementById("fillgauge2");
            //liq[i].style.cssText = "border: 1px solid black; margin-top: 8px; background: yellow; padding: 5px;";
           //drawInfoBox(js,i);

            var myOptions = {
                 content: frame[i]
                ,disableAutoPan: true
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-60, -120)
                ,zIndex: 3
                ,boxStyle: { 
                  background: "url('tipbox.gif') no-repeat"
                  ,opacity: 1
                  ,width: "100px"
                 }
                
                ,closeBoxURL:""
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,position:latLng
                ,isHidden: false
                ,pane: "mapPane"
                ,enableEventPropagation: false
            };
            var newOptions = {
                 content: num[i]
                ,disableAutoPan: true
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-48, -90)
                ,zIndex: 2
                ,boxStyle: { 
                  background: "url('tipbox.gif') no-repeat"
                  ,opacity: 1
                  ,width: "100px"
                 }
                
                ,closeBoxURL:""
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,position:latLng
                ,isHidden: false
                ,pane: "mapPane"
                ,enableEventPropagation: false
            };
            if(i<3){
             markers[i].infobox = new InfoBox(myOptions);
            //Open box when page is loaded
             markers[i].infobox.open(map, markers[i]);
           }
           else{
             markers[i].infobox = new InfoBox(newOptions);
            //Open box when page is loaded
             markers[i].infobox.open(map, markers[i]);
           }
        }
          //map.setCenter(latLng);
        map.fitBounds(bounds);

        
    }

  
 function DeleteMarkers() {
        //Loop through all the markers and remove
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
            //markers[i].infobox.close();
        }
        markers = [];

    }


function getWeight(value){
    weight = value;
}

  //show map