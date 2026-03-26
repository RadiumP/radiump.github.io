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
        var latitude = 33.4294,
            longitude = -111.9431,
            radius = 80000,
            center = [latitude, longitude];

        var map = L.map('map-canvas', {
            center: center,
            zoom: 12,
            scrollWheelZoom: false,
            doubleClickZoom: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
     
         
         
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

        


      for (var ri = 0; ri < 10; ri++) {
        (function(idx) {
          $("#r" + (idx + 1)).click(function(){
            if (menuData && menuData[idx]) {
              map.setView([menuData[idx].latitude, menuData[idx].longitude], 15);
              showDetail(menuData, idx);
            }
          });
        })(ri);
      }    

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


    function setMarkers(center, radius, map, js) {
        var bounds = L.latLngBounds();
        passdata = js;

        for (var i = 0, length = js.length; i < length; i++) {
            var data = js[i];
            var latLng = [data.latitude, data.longitude];

            // Determine rank label style
            var rankClass = 'rank-label';
            if (i === 0) rankClass += ' gold';
            else if (i === 1) rankClass += ' silver';
            else if (i === 2) rankClass += ' bronze';

            var icon = L.divIcon({
                className: 'leaflet-rank-icon',
                html: '<div class="' + rankClass + '">' + (i + 1) + '</div>',
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });

            var marker = L.marker(latLng, { icon: icon, title: data.name }).addTo(map);

            var popupContent = '<div class="map-popup" style="min-width:220px;font-family:Arial,sans-serif;">' +
                '<strong style="font-size:14px;">' + data.name + '</strong>' +
                '<div style="font-size:11px;color:#666;margin:2px 0;">' + (data.categories || '') + '</div>' +
                '<div style="display:flex;gap:6px;justify-content:center;margin:8px 0;">' +
                  '<div style="text-align:center"><svg id="pop-gauge-c-' + i + '" width="50" height="50"></svg><div style="font-size:9px;">Combined</div></div>' +
                  '<div style="text-align:center"><svg id="pop-gauge-r-' + i + '" width="50" height="50"></svg><div style="font-size:9px;">Reviews</div></div>' +
                  '<div style="text-align:center"><svg id="pop-gauge-p-' + i + '" width="50" height="50"></svg><div style="font-size:9px;">Value</div></div>' +
                '</div>' +
                '<div style="font-size:11px;">' + (data.full_address || '') + '</div>' +
                '</div>';

            marker.bindPopup(popupContent, { maxWidth: 280, minWidth: 220 });

            (function(marker, idx, d) {
                marker.on('click', function() {
                    map.setView(marker.getLatLng(), 15);
                    index = idx;
                    showDetail(js, idx);
                });
                marker.on('popupopen', function() {
                    renderPopupGauges(d, idx);
                });
            })(marker, i, data);

            if (i < 3) bounds.extend(latLng);
            markers.push(marker);
        }

        if (bounds.isValid()) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }

    function DeleteMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].remove();
        }
        markers = [];
        $("#detail-panel").hide();
    }

    function showDetail(data, idx) {
        var d = data[idx];
        $("#detail-name").text(d.name);
        $("#detail-cate").text(d.categories || '');
        $("#detail-address").text(d.full_address || '');
        $("#detail-r1").text(d.top_1 || '');
        $("#detail-r2").text(d.top_2 || '');
        $("#detail-r3").text(d.top_3 || '');

        // Clear old gauges and redraw
        $("#gauge-combined").empty();
        $("#gauge-review").empty();
        $("#gauge-price").empty();

        if (typeof loadLiquidFillGauge === 'function') {
            var cfg1 = liquidFillGaugeDefaultSettings();
            cfg1.circleColor = "#ee6121";
            cfg1.textColor = "#21b6ca";
            cfg1.waveTextColor = "#000000";
            cfg1.waveColor = "#f39468";
            cfg1.circleThickness = 0.2;
            cfg1.textVertPosition = 0.2;
            cfg1.waveAnimateTime = 1000;
            cfg1.minValue = 4;
            cfg1.maxValue = 5;
            cfg1.displayPercent = false;
            loadLiquidFillGauge("gauge-combined", d.combine_stars, cfg1);

            var cfg2 = liquidFillGaugeDefaultSettings();
            cfg2.circleColor = "#21b6ca";
            cfg2.textColor = "#553300";
            cfg2.waveTextColor = "#2162ca";
            cfg2.waveColor = "#20d6cc";
            cfg2.circleThickness = 0.1;
            cfg2.circleFillGap = 0.2;
            cfg2.textVertPosition = 0.8;
            cfg2.waveAnimateTime = 2000;
            cfg2.waveHeight = 0.3;
            cfg2.waveCount = 2;
            cfg2.minValue = 4;
            cfg2.maxValue = 5;
            cfg2.displayPercent = false;
            loadLiquidFillGauge("gauge-review", d.review_stars, cfg2);

            var cfg3 = liquidFillGaugeDefaultSettings();
            cfg3.circleThickness = 0.15;
            cfg3.circleColor = "#78c35f";
            cfg3.textColor = "#555500";
            cfg3.waveTextColor = "#529b3a";
            cfg3.waveColor = "#97d184";
            cfg3.textVertPosition = 0.8;
            cfg3.waveAnimateTime = 1000;
            cfg3.waveHeight = 0.05;
            cfg3.waveAnimate = true;
            cfg3.waveRise = false;
            cfg3.waveOffset = 0.25;
            cfg3.waveCount = 3;
            cfg3.minValue = 0;
            cfg3.maxValue = 5;
            cfg3.displayPercent = false;
            loadLiquidFillGauge("gauge-price", 5 - d.price, cfg3);
        }

        $("#detail-panel").show();
    }

    function renderPopupGauges(d, idx) {
        if (typeof loadLiquidFillGauge !== 'function') return;

        var cId = "pop-gauge-c-" + idx;
        var rId = "pop-gauge-r-" + idx;
        var pId = "pop-gauge-p-" + idx;

        if (!document.getElementById(cId)) return;

        var cfg1 = liquidFillGaugeDefaultSettings();
        cfg1.circleColor = "#ee6121";
        cfg1.textColor = "#21b6ca";
        cfg1.waveTextColor = "#000000";
        cfg1.waveColor = "#f39468";
        cfg1.circleThickness = 0.2;
        cfg1.textVertPosition = 0.2;
        cfg1.waveAnimateTime = 1000;
        cfg1.minValue = 4;
        cfg1.maxValue = 5;
        cfg1.displayPercent = false;
        loadLiquidFillGauge(cId, d.combine_stars, cfg1);

        var cfg2 = liquidFillGaugeDefaultSettings();
        cfg2.circleColor = "#21b6ca";
        cfg2.textColor = "#553300";
        cfg2.waveTextColor = "#2162ca";
        cfg2.waveColor = "#20d6cc";
        cfg2.circleThickness = 0.1;
        cfg2.circleFillGap = 0.2;
        cfg2.textVertPosition = 0.8;
        cfg2.waveAnimateTime = 2000;
        cfg2.waveHeight = 0.3;
        cfg2.waveCount = 2;
        cfg2.minValue = 4;
        cfg2.maxValue = 5;
        cfg2.displayPercent = false;
        loadLiquidFillGauge(rId, d.review_stars, cfg2);

        var cfg3 = liquidFillGaugeDefaultSettings();
        cfg3.circleThickness = 0.15;
        cfg3.circleColor = "#78c35f";
        cfg3.textColor = "#555500";
        cfg3.waveTextColor = "#529b3a";
        cfg3.waveColor = "#97d184";
        cfg3.textVertPosition = 0.8;
        cfg3.waveAnimateTime = 1000;
        cfg3.waveHeight = 0.05;
        cfg3.waveAnimate = true;
        cfg3.waveRise = false;
        cfg3.waveOffset = 0.25;
        cfg3.waveCount = 3;
        cfg3.minValue = 0;
        cfg3.maxValue = 5;
        cfg3.displayPercent = false;
        loadLiquidFillGauge(pId, 5 - d.price, cfg3);
    }

function getWeight(value){
    weight = value;
}

  //show map