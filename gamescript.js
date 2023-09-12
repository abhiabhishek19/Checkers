
window.onload =function () {
    setGame();
    
}








function setGame(){



    const king='<img src="./chess.png" height="60px" class="king pie" >';
    const queen='<img src="./queen.png" height="60px" class="queen pie">';
    const ghodaleft='<img src="./ghodaleft.png" height="60px" class="ghodaleft pie">';
    const ghodaright='<img src="./ghodaright.png" height="60px" class="ghodaright pie">';
    const haathi='<img src="./haathi.png" height="60px" class="haathi pie">';
    const oont='<img src="./oont.png" height="60px" class="oont pie">';
    const paidal='<img src="./paidal.png" height="60px"class="paidal pie">';


    const setPieces=[haathi,ghodaright,oont,queen,king,oont,ghodaright,haathi,
    paidal,paidal,paidal,paidal,paidal,paidal,paidal,paidal,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    paidal,paidal,paidal,paidal,paidal,paidal,paidal,paidal,
    haathi,ghodaleft,oont,queen,king,oont,ghodaleft,haathi
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
            sq.style.backgroundColor="white";
        }
        

        col.appendChild(sq);
        
        if(sq.id==i.toString())
        {
            
            sq.innerHTML=setPieces[i];
        }
    }




    setInterval(Moving,1000);

}
function Moving(){
    var allimg = document.getElementsByClassName("pie");
    for(var i=0; i<allimg.length;i++)
    {
        
        allimg[i].addEventListener("click",marking);

    }


    function marking(){
        
        if(this.classList.contains("paidal"))
        {
            var o = this.parentElement.id
            var t = parseInt(this.parentElement.id,10)+8;
            document.getElementById(t.toString()).innerHTML='<img src="./circle.png" height="60px">';
            document.getElementById(t.toString()).addEventListener("click",function(){
                this.innerHTML=document.getElementById(o).innerHTML;
                document.getElementById(o).innerHTML='<div></div>';


            })
            // this.parentElement.innerHTML='<div></div>';
        }
        else
        {
            var t = parseInt(this.parentElement.id,10)+8;
            document.getElementById(t.toString()).style.backgroundColor="blue";
        }
        
    }
}