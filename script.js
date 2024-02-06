let arr = [
    {img:"photo-1488426862026-3ee34a7d66df.avif"},
    {img:"photo-1495216875107-c6c043eb703f.avif"},
    {img:"photo-1517841905240-472988babdf9 (1).avif"},
    {img:"photo-1539571696357-5a69c17a67c6.avif"},

    {img:"photo-1536924430914-91f9e2041b83.avif"},
    {img:"photo-1590926938512-c0d7e5c39abd.avif"},
    {img:"premium_photo-1669704098750-7cd22c35422b.avif"},
    

]

let data = "";
arr.forEach((val,index)=>{
    // console.log(val.img);
    data += ` <div class="story">
    <img src="${val.img}"  id="${index}" alt="">
    </div>`;
});


let storiyan = document.querySelector(".storiyan");
storiyan.innerHTML=data;
storiyan.addEventListener("click",(e)=>{
    // console.log("hello",arr[e.target.id]);
    let arrObjWithId = arr[e.target.id];
    let fullScreenElem = document.querySelector('.full-screen');
    // console.log(fullScreenElem);
    fullScreenElem.style.display= "block";
    fullScreenElem.style.backgroundImage=`url(${arrObjWithId.img})`

    setTimeout(()=>{
        fullScreenElem.style.display= "none";    
    },3000)

})