let calArr = [[]];
let index = 0;
let result = 0;
document.querySelectorAll(".num").forEach(num=>{
    num.addEventListener("click" , function(e){
        result = 0;
        calArr[index].push(num.innerText)
        console.log(calArr)
        for(let i = 0; i<calArr.length; i++){
            if(i == 0){
                result = +calArr[0].join("");
            }
            if(calArr[i+1] == "+"){
                result += +calArr[i+2].join("");
                document.querySelector(".final-result").innerText = result.toString();
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }else if(calArr[i+1] == "-"){
                result -= +calArr[i+2].join("");
                document.querySelector(".final-result").innerText = result.toString();
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }
            else if(calArr[i+1] == "*"){
                result *= +calArr[i+2].join("");
                document.querySelector(".final-result").innerText = result.toString();
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }
            else if(calArr[i+1] == "/"){
                result /= +calArr[i+2].join("");
                document.querySelector(".final-result").innerText = result.toString();
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }
            else{
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }
        }
    })
})
document.querySelectorAll(".action").forEach(action=>{
    action.addEventListener("click" , function(){
        index+=2;
        calArr.push([`${action.id}`])
        console.log(calArr);
        console.log(index);
        calArr.push([]);
        for(let i = 0; i<calArr.length; i++){
            if(i == 0){
                result = +calArr[0].join("");
            }
            if(calArr[i+1] == "+"){
                result += +calArr[i+2].join("");
                document.querySelector(".final-result").innerText = result.toString();
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }else if(calArr[i+1] == "-"){
                result -= +calArr[i+2].join("");
                document.querySelector(".final-result").innerText = result.toString();
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }
            else if(calArr[i+1] == "*"){
                result *= +calArr[i+2].join("");
                document.querySelector(".final-result").innerText = result.toString();
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }
            else if(calArr[i+1] == "/"){
                result /= +calArr[i+2].join("");
                document.querySelector(".final-result").innerText = result.toString();
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }
            else{
                document.querySelector(".math").innerHTML = `${calArr.join(" ").replace("," , "")} = `
            }
        }
    })
})
document.querySelectorAll(".delete").forEach(del=>{
    del.addEventListener("click", function(){
        if(del.id="C"){
            calArr= [[]];
            document.querySelector(".math").innerHTML = ``
        }
    })
})