var GALLERY_DATA = {
    "WebGL.html": {
        title: "Web Playground",
        nav: {
            prev: { href: "", label: "Previous" },
            home: { href: "index.html", label: "Home" },
            next: { href: "projects.html", label: "Next" }
        },
        items: [
            {
                thumb: "thumbs/hb_thumb.png",
                image: "images/hb.png",
                title: "Happy Birthday",
                subtitle: "WebGL Animation",
                description: 'A animated website to celebrate happy birthday on WebGL with tessellated effect over a ocean. <a href="WebGL/ocean.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/mtb_thumb.png",
                image: "images/mtb.png",
                title: "My Target Body",
                subtitle: "Interactive WebGL",
                description: 'A WebGL-based body-simulation website aiming to help adolescents to keep track of their perceived, target and actual body types and provide screenshots, data-saving and downloading. Worked with ASU College of Nursing and Health Innovation. <a href="https://interactive.asu.edu/TargetBody/" target="_blank"> Web Link</a><a href="https://youtu.be/M4Aay4_Ko_A" target="_blank"> Video Link</a>'
            },
            {
                thumb: "thumbs/websponza_thumb.png",
                image: "images/websponza.png",
                title: "Screen Space Ambient Occlusion",
                subtitle: "Interactive WebGL",
                description: 'Implemented SSAO, HBAO on WebGL to deliver real-time interactive soft-shadowing.<a href="WebGL/hbao.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/webssao_thumb.png",
                image: "images/webhbao.png",
                title: "AO with PN-Triangles",
                subtitle: "Interactive WebGL",
                description: 'Followed the same OpenGL pipeline to implement the most popular image-based AO algorithms on WebGL with smoothing to find the bottlenecks and  optimizations.<a href="https://github.com/RadiumP/WebAO" target="_blank"> Github Link</a><a href="WebGL/WebAO/plusAO.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/dice_thumb.png",
                image: "images/dice.png",
                title: "Dice Game",
                subtitle: "Web Game",
                description: 'A JS Dice Game<a href="WebGL/Dice/index.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/objloader_thumb.png",
                image: "images/objloader.png",
                title: "OBJ Loader and Viewer",
                subtitle: "Interactive WebGL",
                description: 'A Threejs-based WebGL OBJ Loader and Viewer<a href="WebGL/objloader.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/3dviewer_thumb.png",
                image: "images/3dviewer.png",
                title: "Furniture Viewer",
                subtitle: "Interactive WebGL",
                description: 'A BabylonJS-based WebGL 3D Furniture Viewer<a href="Babylon/3Dviewer.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/mdviewer_thumb.png",
                image: "images/mdviewer.png",
                title: "MicroD Furniture 3DViewer",
                subtitle: "Interactive WebGL",
                description: 'A Unity-based WebGL 3D Furniture Viewer developed by our team in MicroD. Allow user to interact with furniture in real-time and changing fabrics<a href="https://ecommerces.microdinc.com/item-info3d84.inc" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/tree_thumb.png",
                image: "images/tree.png",
                title: "HeartTree",
                subtitle: "Interactive WebGL",
                description: 'A Xmas Heart Xmax tree<a href="WebGL/Xmas/xmas.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/panda_thumb.png",
                image: "images/panda.png",
                title: "PixelPanda",
                subtitle: "Interactive WebGL",
                description: 'A 3D Pixel Panda with WebGL<a href="WebGL/vday/weian.html" target="_blank"> Link</a>'
            }
        ]
    },
    "projects.html": {
        title: "Computer Graphics",
        nav: {
            prev: { href: "WebGL.html", label: "Previous" },
            home: { href: "index.html", label: "Home" },
            next: { href: "dv.html", label: "Next" }
        },
        items: [
            {
                thumb: "thumbs/2dstick_thumb.png",
                image: "images/2dstick.png",
                title: "2D StickMan",
                subtitle: "OpenGL C++",
                description: 'Implemented animated 2D StickMan which can do exercises, walk, climb up and down the hill on OpenGL. <a href="https://youtu.be/-hrZr6Oodz8" target="_blank"> Video Link</a><a href="https://github.com/RadiumP/Computer-Graphics/tree/master/P2.Li%2CChenyang.V2" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/3dsnowman_thumb.png",
                image: "images/3dsnowman.png",
                title: "3D SnowMan",
                subtitle: "OpenGL C++",
                description: 'Two 3D Snowmen implemented on OpenGL with texture mapping, bump mapping, Perlin noise mapping. Scene contains a interactive camera and basic shading. <a href="https://youtu.be/x1XEPS50Deo" target="_blank"> Video Link</a><a href="https://github.com/RadiumP/Computer-Graphics/tree/master/P3.Li%2CChenyang.V1" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/raytracing_thumb.png",
                image: "images/raytracing.png",
                title: "Ray-Tracing",
                subtitle: "OpenGL C++",
                description: 'Rendered ray-tracing with CPU to deliver shadow and reflection effects.<a href="https://youtu.be/zVJdsXqNtYc" target="_blank"> Video Link</a><a href="https://github.com/RadiumP/Computer-Graphics/tree/master/P4.Li%2CChenyang.V1" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/hbaoplus_thumb.png",
                image: "images/hbaoplus.png",
                title: "AO with Hardware Tessellation",
                subtitle: "OpenGL C++",
                description: 'Implemented real-time SSAO, HBAO and HBAO+ to provide image-based ambient occlusion effects on hardware tessellated objects.<a href="https://youtu.be/sK42YSKfSiw" target="_blank"> Video Link 1</a><a href="https://youtu.be/P_aBNqYNl4o" target="_blank"> Video Link 2</a><a href="https://github.com/RadiumP/Tessellation" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/loop_thumb.png",
                image: "images/loop.png",
                title: "Loop Subdivision C++",
                subtitle: "Computer Graphics",
                description: 'Implemented Loop Subdivision to smooth low-poly objects. Working well on objects with borders(teapot) and without (bunny).<a href="https://github.com/RadiumP/Computer-Graphics/tree/master/Subdivision" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/conformal_thumb.png",
                image: "images/conformal.png",
                title: "Spherical Conformal Mapping",
                subtitle: "Computer Graphics",
                description: 'Implement spherical conformal paramerterization method to map a brain onto a sphere with Genus Zero Conformal Mapping algorithm. <a href="https://github.com/RadiumP/Computer-Graphics/tree/master/Conformal" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/phong_thumb.png",
                image: "images/phong.png",
                title: "PN-Triangles and Phong Tessellation",
                subtitle: "OpenGL C++",
                description: 'Implemented real-time GPU tessellation with Tessellation Shader on OpenGL 4.0. Used PN-Triangles and Phong Tessellation for smoothing.<a href="https://youtu.be/iWZ-cuEQlBE" target="_blank"> Video Link</a> <a href="https://github.com/RadiumP/Tessellation/tree/master/Tessellation/TessMesh" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/pbr_thumb.png",
                image: "images/pbr.png",
                title: "OpenGL Projects",
                subtitle: "OpenGL C++",
                description: 'A collection of OpenGL projects including PBR, HDR, SSAO, Assimp etc.<a href="https://github.com/RadiumP/OpenGL" target="_blank"> Github Link</a>'
            }
        ]
    },
    "dv.html": {
        title: "Personal Projects",
        nav: {
            prev: { href: "projects.html", label: "Previous" },
            home: { href: "index.html", label: "Home" },
            next: { href: "interests.html", label: "Next" }
        },
        items: [
            {
                thumb: "thumbs/assignment1_thumb.png",
                image: "images/assignment1.jpg",
                title: "Key to Champions",
                subtitle: "Info Graph",
                description: 'This is a info graph based on the stats of Australian Open from 2004 - 2014. After comparing the crucial stats of the champions and runner-ups, I created this graph to visualize the analysis. <a href="dataviz/img/assignment1.jpg" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/rivalry_thumb.png",
                image: "images/rivalry.png",
                title: "Rivalry",
                subtitle: "Interactive Visualizaiton",
                description: 'After the info graph, I dug deeper and looked into the top-10 semi-final players from 04-14. Based on the similar idea, I listed players personal stats and compared players with each other to show the rivalry story and the domination of players. In order to provide better details, the information is visulized into an interactive website.<a href="dataviz/rivalry.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/dataviz_thumb.png",
                image: "images/dataviz.png",
                title: "Food In Phoenix 2015",
                subtitle: "Interactive Recommendation",
                description: 'Based on the public dataset from Yelp Phoenix, my group and I made this interactive recommendation web to provide our insights. We did a sentiment analysis and weight the score with the users\' scores and the price range to recommend different types of restaurants. We also put animated rank marks on the map to deliver better visual effects. <a href="dataviz/dataviz.html" target="_blank"> Link</a>'
            },
            {
                thumb: "thumbs/hbv2_thumb.png",
                image: "images/hbv2.png",
                title: "Happy Birthday V2",
                subtitle: "Unity",
                description: 'Developed a 3D animation on Unity with the characters from One Piece. Animated the characters to dance with music.<a href="https://youtu.be/7_9hOz-jQBg" target="_blank"> Video Link</a><a href="https://github.com/RadiumP/One-Piece" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/vrop_thumb.png",
                image: "images/vrop.png",
                title: "Unity VR for Cardboard",
                subtitle: "Unity",
                description: 'A updated version of Happy Birthday V2 using Google VR SDK. APK available on Github.<a href="https://github.com/RadiumP/One-Piece/tree/master/AndroidVR" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/polyp_thumb.png",
                image: "images/polyp.png",
                title: "Polyp Detection",
                subtitle: "Image Analtics",
                description: 'A Matlab-based image/video analytic program to detect polyps with Random Forest, DAISY, Circular Hough Transform, ROC,  Convolutional Neural Network and Bag of Visual Words etc. <a href="https://youtu.be/H8GHkFO48So" target="_blank"> Video Link</a>'
            },
            {
                thumb: "thumbs/winvsmac_thumb.png",
                image: "images/winvsmac.png",
                title: "Unity FPS v0.1",
                subtitle: "Unity",
                description: 'A Simple Multiplayer Melee FPS Game<a href="UnityWeb/WinVMac/wvm0_1.html" target="_blank"> Game Link</a>'
            },
            {
                thumb: "thumbs/sp_thumb.png",
                image: "images/sp.png",
                title: "Solar Powered",
                subtitle: "iOS",
                description: 'This is a project based on location service and XML api. We want to get the latitude and longitude of the user and get the solar info from the api. We compare it with the averge energy used with traditional power and calculate the savings if using a suggested solar panel.<a href="https://github.com/RadiumP/Project-1" target="_blank"> Github Link</a>'
            },
            {
                thumb: "thumbs/bricks_thumb.png",
                image: "images/bricks.png",
                title: "Unity 2D Bricks v1.0",
                subtitle: "Unity",
                description: 'A simple 2D brick-breaking game featuring Top 3 Chinese Punsters <a href="UnityWeb/Bricks/bricks.html" target="_blank"> Game Link</a> <a href="https://github.com/RadiumP/Bricks" target="_blank"> Code</a>'
            },
            {
                thumb: "thumbs/laser_thumb.png",
                image: "images/laser.png",
                title: "Unity 2D Laser v0.5",
                subtitle: "Unity",
                description: 'A simple 2D laser-shooting game<a href="UnityWeb/Laser/laser.html" target="_blank"> Game Link</a> <a href="https://github.com/RadiumP/Laser" target="_blank"> Code</a>'
            },
            {
                thumb: "thumbs/hoopvr_thumb.png",
                image: "images/hoopvr.png",
                title: "Unity 3D VR HoopVR v1.0",
                subtitle: "Unity",
                description: 'A VR hoop shooting game for Google Cardboard <a href="https://github.com/RadiumP/Sports-VR/tree/master/apk" target="_blank"> Game Link</a>'
            },
            {
                thumb: "thumbs/unreal_thumb.png",
                image: "images/unreal.png",
                title: "Unreal Projects",
                subtitle: "Unreal",
                description: 'A collection of Unreal Demos including TPS shooters, Multiplayer games etc <a href="https://github.com/RadiumP/ue4" target="_blank"> Github Link</a>'
            }
        ]
    }
};
