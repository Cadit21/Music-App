let songindex=0;
let audioElement= new Audio('1.mp3');
let songitems= Array.from(document.getElementsByClassName('song-item'))
let masterPlay= document.getElementById('mplay');
let progressbar=document.getElementById('progressrange');
let icon=document.getElementById('gif');
let songn=document.getElementById('name');

let songs=[
    {songname:"let me love you", filepath:"1.mp3", coverpath: '1.jpg'},
    {songname:"Tu Aake Dekhle", filepath:"2.mp3", coverpath: '2.jpg'},
    {songname:"hosaana", filepath:"3.mp3", coverpath: '3.jpg'},
    {songname:"Kaise Hua", filepath:"4.mp3", coverpath: '4.jpeg'},
    {songname:"Mere Bina", filepath:"5.mp3", coverpath: '5.jpg'},
    {songname:"Night-Changes", filepath:"6.mp3", coverpath: '6.jpg'},

]
songitems.forEach((element,i)=>{
    console.log(i,element);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].src=songs[i].filepath;

})


masterPlay.addEventListener('click',()=>{
 console.log('ntm click');
 if(audioElement.paused|| audioElement.currentTime <=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    icon.style.opacity=1;

 }
 else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    icon.style.opacity=0;


 }
}

)
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
     element.classList.add('fa-circle-play');
     element.classList.remove('fa-circle-pause');
    }
    )


}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
       
       
        songindex= parseInt(e.target.id);
        if(audioElement.paused|| audioElement.currentTime <=0){

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        
        audioElement.src= `${songindex}.mp3`;
        songn.innerHTML=songs[songindex-1].songname;
      
        audioElement.currentTime=0;
        audioElement.play();
        icon.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        icon.style.opacity=0;
    }
}
    )
}
)
document.getElementById('forward').addEventListener('click',()=>{
    if(songindex>=6){
        songindex=0;
    }
    else{
        songindex=songindex+1;
    }
        audioElement.src= `${songindex}.mp3`;
        songn.innerHTML=songs[songindex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        icon.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('backward').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=6;
    }
    else{
        songindex=songindex-1;
    }   
        audioElement.src= `${songindex}.mp3`;
        songn.innerHTML=songs[songindex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        icon.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
