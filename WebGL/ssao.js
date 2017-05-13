THREE.mySSAOShader = {

	uniforms: {

		"tDiffuse":     { value: null },
        
		"tDepth":       { value: null },
        "tNoise":       {value: null},
		"size":         { value: new THREE.Vector2( 0, 0 ) },
		"cameraNear":   { value: 0 },
		"cameraFar":    { value: 0 },
        "fov":          {value: 0.0},
        "aspectRatio":  {value: 0.0},
		"kernel":       {value: null},
        "noiseScale":   {value: new THREE.Vector2( 0, 0 )},
		"aoClamp":      { value: 0.5 },
		"lumInfluence": { value: 0.5 }

	},

	vertexShader: [

		"varying vec2 vUv;",
        "varying mat4 projMat;",
        "varying vec3 pos;",
        "varying mat3 normMat;",
        
		"void main() {",

			"vUv = uv;",
            "projMat = projectionMatrix;",
            "pos =  (projectionMatrix * modelViewMatrix * vec4( position, 1.0 )).xyz;",
            
            "normMat = normalMatrix;",
			"gl_Position = vec4(pos,1.0);",

		"}"

	].join( "\n" ),

	fragmentShader: [
        
        "#extension GL_OES_standard_derivatives : enable",
		"#include <packing>",
        
        "uniform float cameraNear;",
		"uniform float cameraFar;",
        "uniform float fov;",
        "uniform float aspectRatio;",
        "uniform vec3 kernel[16];",
        "uniform vec2 size;",   
        "uniform vec2 noiseScale;",
        
        "uniform sampler2D tDiffuse;",
		"uniform sampler2D tDepth;",
        "uniform sampler2D tNoise;",
        
        "const int kernelSize = 16;",  
	    "const float radius = 1.0;",   
        
        "varying mat4 projMat;",
        "varying vec2 vUv;",
        "varying vec3 pos;",
        "varying mat3 normMat;",
        
        "float unpackDepth(const in vec4 rgba_depth) {",
            "const vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);",
            "float depth = dot(rgba_depth, bit_shift);",
            "return depth;",
        "}",                

	   "vec3 getViewRay(vec2 tc) {",
            "float hfar = 2.0 * tan(fov/2.0)  * cameraFar;",
            "float wfar = hfar * aspectRatio;",    
            "vec3 ray = vec3(wfar * (tc.x - 0.5), hfar * (tc.y - 0.5), -cameraFar);",    
            "return ray ; ",	                   
        "}", 
        
        "float LinearizeDepth(float depth){ ",
            "float z = depth; // Back to NDC ",
            "return (2.0*cameraNear * cameraFar) / (cameraFar  - z * (cameraFar - cameraNear));  ",
        "}",
        
        "vec3 ReconstructNormal(vec3 P){return -normalize(cross(dFdy(P), dFdx(P)));}",
	
		"float getDepth(vec2 coord) { return unpackRGBAToDepth(texture2D(tDepth, coord.xy));}  ", 
	
       
        
		"void main() {",

			"vec2 screenPos = vec2(gl_FragCoord.x / size.x, gl_FragCoord.y / size.y);",
			
            "float linearDepth = getDepth(screenPos);",
            "vec3 origin = getViewRay(screenPos) * linearDepth ;",
            "vec3 normal = normMat * ReconstructNormal( origin);",
            
            "vec3 rvec = texture2D(tNoise, screenPos.xy * noiseScale).xyz * 2.0 - 1.0;",
            "vec3 tangent = normalize(rvec - normal * dot(rvec, normal));",
            "vec3 bitangent = cross(normal, tangent);",
            "mat3 tbn = mat3(tangent, bitangent, normal);",
            
            "float occlusion = 0.0;",
            "for(int i = 0; i < kernelSize; ++i) {  ",
        
            "vec3 sample = origin + (tbn * kernel[i]) * radius;",
            
            "vec4 offset = projMat * vec4(sample, 1.0);	",
            
            "offset.xy /= offset.w;",
            
            "offset.xy = offset.xy * 0.5 + 0.5; ",
            
            "float sampleDepth = -sample.z / cameraFar;",
            
            "float depthBufferValue = getDepth(offset.xy);",
        
            "float rangeCheck = smoothstep(0.0, 1.0, radius / abs(linearDepth - depthBufferValue));",
            
            "occlusion += (depthBufferValue <= sampleDepth ? 1.0 : 0.0) * rangeCheck ;",
         
            "}",
            "occlusion = 1.0 - occlusion / float(kernelSize);",
            
            "vec3 color = texture2D( tDiffuse, screenPos).rgb;",
            "vec3 depth = texture2D( tDepth, screenPos).rgb;",
        
            "gl_FragColor = vec4( normal,1.0 );",
        
            //TEST: Red
			//"gl_FragColor = vec4( 1.0,0.0,0.0, 1.0 );",
        
        

		"}"

	].join( "\n" )

};
