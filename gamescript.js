
window.onload =function () {
    setGame();
    
}








function setGame(){



    // const king='<svg class="king pie" fill="#000000" height="60px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 298 298" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.333,256h-1.641c1.878-3.337,7.061-14.536-0.605-25.6c-7.554-10.905-21.491-39.547-20.904-64.401 c4.409-0.01,7.816-3.587,7.816-7.999v-1c0-4.418-3.582-8-8-8c4.418,0,8-3.582,8-8v-1c0-4.418-3.249-8-7.667-8h-3.55 c-1.006-16.142,1.307-29.861,4.798-40.724c1.121-3.487,2.432-6.186,3.752-8.276h2c4.418,0,7.667-3.582,7.667-8v-1 c0-4.343-3.463-7.87-7.777-7.988C179.087,52.771,169,42.203,156,39.363V27h12V12h-12V0h-15v12h-12v15h12v12.595 c-12,3.15-21.803,13.512-23.888,26.405h-0.779c-4.418,0-8.333,3.582-8.333,8v1c0,4.418,3.915,8,8.333,8h3 c1.32,2.091,2.631,4.789,3.752,8.276c3.491,10.862,5.804,24.582,4.798,40.724h-4.55c-4.418,0-8.333,3.582-8.333,8v1 c0,4.418,3.582,8,8,8c-4.418,0-8,3.582-8,8v1c0,4.418,3.915,8,8.333,8h1.053c0.588,24.855-13.183,53.495-20.737,64.4 c-7.664,11.063-2.482,22.263-0.604,25.6h-1.711c-4.418,0-8.333,3.582-8.333,8v9c0,3.727,3,6.849,6,7.737V298h100v-17.263 c4-0.889,6-4.011,6-7.737v-9C205,259.582,201.751,256,197.333,256z"></path> </g> </g></svg>';
    // const queen='<svg class="queen pie"fill="#000000" height="60px" width="45px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297.77 297.77" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M207.218,255.77h-3.369c2.214-3.337,8.32-14.536-0.712-25.6c-8.9-10.905-25.129-39.546-24.438-64.4h3.519 c4.418,0,7.667-3.582,7.667-8v-1c0-4.418-3.582-8-8-8c4.418,0,8-3.582,8-8v-1c0-4.418-3.249-8-7.667-8h-4.626 c-2.064-21.741,1.078-43.054,5.959-54.666c1.86-4.425,4.118-7.79,6.296-10.334h1.371c4.418,0,7.667-3.582,7.667-8v-1 c0-4.418-3.249-8-7.667-8h-9.8c-1.803-10.896-8.998-19.966-18.755-24.383c1.783-2.607,2.829-5.757,2.829-9.154 C165.492,7.267,158.227,0,149.26,0s-16.234,7.267-16.234,16.232c0,3.385,1.037,6.525,2.809,9.127 c-9.788,4.406-17.01,13.49-18.816,24.41h-10.8c-4.418,0-8.333,3.582-8.333,8v1c0,4.418,3.915,8,8.333,8h2.371 c2.178,2.544,4.436,5.909,6.296,10.334c4.881,11.612,8.023,32.925,5.959,54.666h-4.626c-4.418,0-8.333,3.582-8.333,8v1 c0,4.418,3.582,8,8,8c-4.418,0-8,3.582-8,8v1c0,4.418,3.915,8,8.333,8h3.602c0.692,24.854-15.536,53.495-24.438,64.4 c-9.031,11.063-2.926,22.263-0.712,25.6h-3.452c-4.418,0-8.333,3.582-8.333,8v9c0,4.078,3,7.438,7,7.931v17.069h118V280.7 c4-0.493,7-3.853,7-7.931v-9C214.885,259.352,211.636,255.77,207.218,255.77z"></path> </g> </g></svg>';
    // const ghodaleft='<svg class="ghodaleft pie" fill="#000000" height="60px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 482.011 482.011" xml:space="preserve" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M367.549,434.234h-6.409c-1.072-5.303-2.053-11.634-2.922-18.399H93.277c-0.529,5.964-0.964,12.061-1.228,18.399h-0.436 c-13.188,0-23.889,10.693-23.889,23.889s10.701,23.889,23.889,23.889h275.936c13.188,0,23.889-10.693,23.889-23.889 S380.737,434.234,367.549,434.234z"></path> <path d="M111.396,202.132c1.85,2.621,4.682,4.402,7.855,4.947c3.157,0.545,6.423-0.194,9.051-2.053l43.361-30.702 c5.35-3.794,12.644-3.313,17.466,1.159c11.804,10.933,28.43,14.993,43.936,10.739c11.929-3.266,21.82-11.143,27.885-21.586 c2.271,17.504-6.283,44.589-58.633,78.673c-48.479,31.564-78.961,64.365-95.4,108.822h251.036 c2.892-25.515,9.626-53.796,23.625-83.285c29.254-47.576,62.116-134.095-14.698-214.269 C302.771-12.331,245.741-4.344,213.763,9.358c-15.552,6.655-22.94,24.3-17.092,40.023l-35.865-33.22 c-2.005-1.858-5.007-2.169-7.371-0.763c-2.349,1.416-3.485,4.216-2.784,6.867l11.835,44.978c-4.324,3.569-8.29,7.574-11.37,12.395 l-55.569,87.026c-2.644,4.16-2.52,9.503,0.326,13.531L111.396,202.132z"></path> <path d="M87.18,399.908h280.368c8.802,0,15.926-7.132,15.926-15.926c0-8.794-7.124-15.926-15.926-15.926H87.18 c-8.802,0-15.926,7.132-15.926,15.926C71.255,392.777,78.378,399.908,87.18,399.908z"></path> </g> </g></svg>';
    // const ghodaright='<svg class="ghodaright pie" fill="#000000" height="60px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 482.011 482.011" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M367.549,434.234h-6.409c-1.072-5.303-2.053-11.634-2.922-18.399H93.277c-0.529,5.964-0.964,12.061-1.228,18.399h-0.436 c-13.188,0-23.889,10.693-23.889,23.889s10.701,23.889,23.889,23.889h275.936c13.188,0,23.889-10.693,23.889-23.889 S380.737,434.234,367.549,434.234z"></path> <path d="M111.396,202.132c1.85,2.621,4.682,4.402,7.855,4.947c3.157,0.545,6.423-0.194,9.051-2.053l43.361-30.702 c5.35-3.794,12.644-3.313,17.466,1.159c11.804,10.933,28.43,14.993,43.936,10.739c11.929-3.266,21.82-11.143,27.885-21.586 c2.271,17.504-6.283,44.589-58.633,78.673c-48.479,31.564-78.961,64.365-95.4,108.822h251.036 c2.892-25.515,9.626-53.796,23.625-83.285c29.254-47.576,62.116-134.095-14.698-214.269 C302.771-12.331,245.741-4.344,213.763,9.358c-15.552,6.655-22.94,24.3-17.092,40.023l-35.865-33.22 c-2.005-1.858-5.007-2.169-7.371-0.763c-2.349,1.416-3.485,4.216-2.784,6.867l11.835,44.978c-4.324,3.569-8.29,7.574-11.37,12.395 l-55.569,87.026c-2.644,4.16-2.52,9.503,0.326,13.531L111.396,202.132z"></path> <path d="M87.18,399.908h280.368c8.802,0,15.926-7.132,15.926-15.926c0-8.794-7.124-15.926-15.926-15.926H87.18 c-8.802,0-15.926,7.132-15.926,15.926C71.255,392.777,78.378,399.908,87.18,399.908z"></path> </g> </g></svg>';
    // const haathi='<svg class="haathi pie" width="64px" height="64px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 28.5,15.8333L 32.4583,15.8333L 33.25,20.5833L 34.8333,20.5833L 34.8333,15.8333L 41.1667,15.8333L 41.1667,20.5833L 42.75,20.5833L 44.3333,15.8333L 47.5,15.8333C 47.5,20.0556 47.5,24.2778 44.3333,26.3889C 43.9489,26.6452 43.9136,26.4746 43.4471,26.6686L 44.3333,41.1667L 48.6875,41.1667L 48.6875,42.75L 45.9167,43.1458C 45.9167,47.8958 51.0625,53.8333 51.0625,60.1667L 24.9375,60.1667C 24.9375,53.8333 30.0833,47.8958 30.0833,43.1458L 27.3125,42.75L 27.3125,41.1667L 31.6667,41.1667L 32.5529,26.6686C 32.0864,26.4745 32.0511,26.6452 31.6667,26.3889C 28.5,24.2778 28.5,20.0556 28.5,15.8333 Z "></path> </g></svg>';
    // const oont='<svg class="oont pie" width="64px" height="64px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 34.8333,15.8333L 41.1667,15.8333L 41.1667,17.4167L 39.5833,17.4167L 39.5833,19C 40.0137,19 41.1462,19.585 42.3445,20.5006L 37.678,24.4726C 37.018,25.0463 36.8125,24.9375 37.1259,26.3105C 38.3958,26.5208 38.3039,26.2488 38.9638,25.6751L 43.9375,22.1667C 46.2017,24.6351 47.5717,27.9565 41.8943,29.8582L 41.7969,31.9228L 48.6875,36.4167L 41.7366,36.4167C 41.9291,54.3169 47.8565,50.7995 50.6667,60.1667L 25.3333,60.1667C 28.1435,50.7995 34.0709,54.3169 34.2634,36.4167L 27.3125,36.4167L 34.2031,31.9228L 34.1058,29.8607C 24.326,26.6516 36.4167,21.0626 36.4167,19L 36.4167,17.4167L 34.8333,17.4167L 34.8333,15.8333 Z "></path> </g></svg>';
    const paidal='<svg class="pie paidal" width="55px" height="55px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>circle-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#000000" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.15408,3.55271368e-14 426.666667,95.5125867 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>';
    const rpaidal='<svg class="pie rpaidal" width="55px" height="55px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>circle-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#fafafa" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.15408,3.55271368e-14 426.666667,95.5125867 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>';
    // const roont='<svg class="oont pie" width="64px" height="64px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#fafafa" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 34.8333,15.8333L 41.1667,15.8333L 41.1667,17.4167L 39.5833,17.4167L 39.5833,19C 40.0137,19 41.1462,19.585 42.3445,20.5006L 37.678,24.4726C 37.018,25.0463 36.8125,24.9375 37.1259,26.3105C 38.3958,26.5208 38.3039,26.2488 38.9638,25.6751L 43.9375,22.1667C 46.2017,24.6351 47.5717,27.9565 41.8943,29.8582L 41.7969,31.9228L 48.6875,36.4167L 41.7366,36.4167C 41.9291,54.3169 47.8565,50.7995 50.6667,60.1667L 25.3333,60.1667C 28.1435,50.7995 34.0709,54.3169 34.2634,36.4167L 27.3125,36.4167L 34.2031,31.9228L 34.1058,29.8607C 24.326,26.6516 36.4167,21.0626 36.4167,19L 36.4167,17.4167L 34.8333,17.4167L 34.8333,15.8333 Z "></path> </g></svg>';
    // const rhaathi='<svg class="oont pie" width="64px" height="64px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#fafafa" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 28.5,15.8333L 32.4583,15.8333L 33.25,20.5833L 34.8333,20.5833L 34.8333,15.8333L 41.1667,15.8333L 41.1667,20.5833L 42.75,20.5833L 44.3333,15.8333L 47.5,15.8333C 47.5,20.0556 47.5,24.2778 44.3333,26.3889C 43.9489,26.6452 43.9136,26.4746 43.4471,26.6686L 44.3333,41.1667L 48.6875,41.1667L 48.6875,42.75L 45.9167,43.1458C 45.9167,47.8958 51.0625,53.8333 51.0625,60.1667L 24.9375,60.1667C 24.9375,53.8333 30.0833,47.8958 30.0833,43.1458L 27.3125,42.75L 27.3125,41.1667L 31.6667,41.1667L 32.5529,26.6686C 32.0864,26.4745 32.0511,26.6452 31.6667,26.3889C 28.5,24.2778 28.5,20.0556 28.5,15.8333 Z "></path> </g></svg>'
    const setPieces=[paidal,paidal,paidal,paidal,paidal,paidal,paidal,paidal,
    paidal,paidal,paidal,paidal,paidal,paidal,paidal,paidal,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    rpaidal,rpaidal,rpaidal,rpaidal,rpaidal,rpaidal,rpaidal,rpaidal,
    rpaidal,rpaidal,rpaidal,rpaidal,rpaidal,rpaidal,rpaidal,rpaidal
    ];



    let col,colcount=0;
    for(let i = 0;i<64;i++)
    {
        if(i%8==0)
        {
            colcount++;
            col=document.createElement("div");
            col.className="col";
            document.getElementById("board").appendChild(col);
        }
        let sq=document.createElement("div");
        sq.className="sq";
        sq.id=i.toString();
        

        if((colcount%2==0 && i%2==0) || (colcount%2!=0 && i%2!=0))
        {
            sq.style.backgroundColor="brown";
        }
        else{
            sq.style.backgroundColor="#f0b37a";
        }
        

        col.appendChild(sq);
        
        if(sq.id==i.toString())
        {
            
            sq.innerHTML=setPieces[i];
        }
        if(i<16)
        {
            sq.firstElementChild.classList.add("black");
        }
        if(i>=48)
        {
            sq.firstElementChild.classList.add("white");
            
        }
    }


    
    
    let o;
    let t;
    let allimg = document.getElementsByClassName("pie");
    for(var i=0; i<allimg.length;i++)
    {
        allimg[i].addEventListener("click",function(){
            o= this.parentElement.id;
            t = parseInt(o,10)+8;
            
        
            document.getElementById(t.toString()).innerHTML='<img src="./circle.png" height="60px">';
            
            document.getElementById(t.toString()).addEventListener("click",function(){

                document.getElementById(t.toString()).innerHTML=document.getElementById(o).innerHTML;
                document.getElementById(o.toString()).innerHTML='<div></div>';
                
                o=null;
                t=null;
            },{once : true});
           
               
            });
    }
    
    
    // setInterval(Moving,3000);

}
function Moving(){
    
    let allimg = document.getElementsByClassName("pie");
    for(var i=0; i<allimg.length;i++)
    {
        if(allimg[i].classList.contains("black"))
        {
            allimg[i].parentElement.addEventListener("click",function(){
                const o = this.id;
                const t = parseInt(this.id,10)+8;
                console.log(document.getElementById(o.toString()));
                console.log(document.getElementById(t.toString()));
            
                document.getElementById(t.toString()).innerHTML='<img src="./circle.png" height="60px">';
                document.getElementById(t.toString()).addEventListener("click",function(){
                    
                    document.getElementById(t.toString()).innerHTML=document.getElementById(o.toString()).innerHTML;
                    document.getElementById(o.toString()).innerHTML='<div></div>';
                    console.log(document.getElementById(o.toString()));
                    console.log(document.getElementById(t.toString()));
                });
                
                
            },false);
        }
           
        
        
        // allimg[i].parentElement.addEventListener("click",marking);

    }
}


    function marking(){
        
        if(this.firstElementChild.classList.contains("paidal"))
        {
            var o = this.id;
            var t = parseInt(this.id,10)+8;
            console.log(o.toString());
            console.log(t.toString());
            document.getElementById(t.toString()).innerHTML='<img src="./circle.png" height="60px">';
            document.getElementById(t.toString()).addEventListener("click",function(){
                // this.innerHTML=document.getElementById(o.toString()).innerHTML;
                document.getElementById(t.toString()).innerHTML=document.getElementById(o.toString()).innerHTML;
                document.getElementById(o.toString()).innerHTML='<div></div>';
                
            })
            // this.parentElement.innerHTML='<div></div>';
            console.log(o.toString());
            console.log(t.toString());

            
        }
        else if(this.firstElementChild.classList.contains("rpaidal")){
            var o = this.id
            var t = parseInt(this.id,10)-8;
            document.getElementById(t.toString()).innerHTML='<img src="./circle.png" height="60px">';
            document.getElementById(t.toString()).addEventListener("click",function(){
                this.innerHTML=document.getElementById(o.toString()).innerHTML;
                document.getElementById(o.toString()).innerHTML='<div></div>';


            })
        }
        else
        {
            var t = parseInt(this.parentElement.id,10)+8;
            document.getElementById(t.toString()).style.backgroundColor="blue";
        }
        
    }

