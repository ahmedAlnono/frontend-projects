const formWord = document.querySelector(".form-word");
const searchButton = document.querySelector(".form-word svg");

function displayData(){
    document.querySelector(".word").innerHTML = formWord.word.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${formWord.word.value}`).then((res)=>{
        return res.json()
    }).then((data)=>{
        document.querySelector(".play").style.display = "block"
        let child = document.querySelector(".audio").lastElementChild;
        // remove all audio element
        while(child){
            console.log(child)
            document.querySelector(".audio").removeChild(child)
            child= document.querySelector(".audio").lastChild;
        }
        // remove all meaning element
        let child1 = document.querySelector(".meanings").lastElementChild;
        while(child1){
            document.querySelector(".meanings").removeChild(child1)
            child1= document.querySelector(".meanings").lastChild;
        }
        for(let i = 0 ;i<data.length ;i++){
            for(let j = 0 ; j<data[i].meanings.length ; j++){
                const div = document.createElement("div");
                const span = document.createElement("span");
                const ul = document.createElement("ul");
                span.innerText = data[i].meanings[j].partOfSpeech;
                div.appendChild(span);
                for(let n = 0 ;n < data[i].meanings[j].definitions.length ; n++){
                    let li = document.createElement("li");
                    li.innerText = data[i].meanings[j].definitions[n].definition
                    ul.appendChild(li);
                }
                div.appendChild(ul);
                div.className = "world-explain"
                document.querySelector(".meanings").appendChild(div);
            }
            for(let j = 0 ; j<data[i].phonetics.length ; j++){
                if(data[i].phonetics[j].audio == ""){
                    continue;
                }
                else{
                    const audio = document.createElement("audio");
                    audio.setAttribute("src" , data[i].phonetics[j].audio);
                    audio.setAttribute("controls" , "controls");
                    audio.style.display = "none";
                    document.querySelector(".audio").appendChild(audio)
                    i = data.length; 
                    break;
                }
            }
        }
    })
}
searchButton.addEventListener("click" ,function(){
    displayData();
})
formWord.addEventListener("submit" , (e)=>{
    e.preventDefault();
    displayData();
})
    document.querySelector(".play").addEventListener("click" , ()=>{
        document.querySelector("audio").play();
    })

const themes = document.querySelectorAll(".theme div");
for(let i =0 ;i < themes.length ; i++){
    themes[i].addEventListener("click", ()=>{
        document.querySelector(".active").classList.remove("active");
        document.querySelector(`.theme div:not(.${themes[i].classList[0]})`).classList.add("active");
        if(themes[i].classList[0] == "sun"){
            document.body.style.backgroundColor = "black";
            document.querySelector("#font").style.color = "white";
            document.querySelectorAll("div").forEach((div)=>{
                div.style.color = "white";
            })
        }else{
            document.body.style.backgroundColor = "white";
            document.querySelector("#font").style.color = "black";
            document.querySelectorAll("div").forEach((div)=>{
                div.style.color = "black";
            })
        }
    });
}
document.querySelector("select").addEventListener("change" , function(){
    const selected = document.querySelector("select").value;
    let wordExplain = document.querySelector(".meanings");
    console.log(selected)
        wordExplain.style.fontFamily = `${selected}`;
})

// document.querySelector(".word").innerHTML = formWord.word.value;
// fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${formWord.word.value}`).then((res)=>{
//     return res.json()
// }).then((data)=>{
//     document.querySelector(".play").style.display = "block"
//     let child = document.querySelector(".audio").lastElementChild;
//     // remove all audio element
//     while(child){
//         console.log(child)
//         document.querySelector(".audio").removeChild(child)
//         child= document.querySelector(".audio").lastChild;
//     }
//     // remove all meaning element
//     let child1 = document.querySelector(".meanings").lastElementChild;
//     while(child1){
//         document.querySelector(".meanings").removeChild(child1)
//         child1= document.querySelector(".meanings").lastChild;
//     }
//     for(let i = 0 ;i<data.length ;i++){
//         for(let j = 0 ; j<data[i].meanings.length ; j++){
//             const div = document.createElement("div");
//             const span = document.createElement("span");
//             const ul = document.createElement("ul");
//             span.innerText = data[i].meanings[j].partOfSpeech;
//             div.appendChild(span);
//             for(let n = 0 ;n < data[i].meanings[j].definitions.length ; n++){
//                 let li = document.createElement("li");
//                 li.innerText = data[i].meanings[j].definitions[n].definition
//                 ul.appendChild(li);
//             }
//             div.appendChild(ul);
//             div.className = "world-explain"
//             document.querySelector(".meanings").appendChild(div);
//         }
//         for(let j = 0 ; j<data[i].phonetics.length ; j++){
//             if(data[i].phonetics[j].audio == ""){
//                 continue;
//             }
//             else{
//                 const audio = document.createElement("audio");
//                 audio.setAttribute("src" , data[i].phonetics[j].audio);
//                 audio.setAttribute("controls" , "controls");
//                 audio.style.display = "none";
//                 document.querySelector(".audio").appendChild(audio)
//                 i = data.length; 
//                 break;
//             }
//         }
//     }
// })