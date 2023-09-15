const data = [
    {
        "ques":"1) What is the full form of css",
        "a":"Cascading style sheet",
        "b":"Common style sheet",
        "c":"Common style selection",
        "d":"Cascading style scenerio",
        "correct": "a"
    },

    {
        "ques":"2) What is the full form of HTML",
        "a":"Hyper text markup Level",
        "b":"Hyper text marking Language",
        "c":"Hyper transform marking Level",
        "d":"Hyper text markup Language",
        "correct": "d"
    },

    {
        "ques":"3) What is the full form of JS",
        "a":"JavaSavan 9.0",
        "b":"JavaSavan",
        "c":"JavaScript ",
        "d":"JavaServer 9.1",
        "correct": "c"
    }
]

let count = 0;
let index = 0;
let total = data.length;
let inputs = document.querySelectorAll("#options") // Select all the radio buttons
const loadQuestion=()=>{
    if(index<total){
        const ques= document.getElementById("Question").innerHTML=data[index].ques;
        const a= document.getElementById("level1").innerHTML=data[index].a;
        const b= document.getElementById("level2").innerHTML=data[index].b;
        const c= document.getElementById("level3").innerHTML=data[index].c;
        const d= document.getElementById("level4").innerHTML=data[index].d;   
    }
}
    

const submit=()=>{       
    findSelectOptionValue();   
    index++;
    reset();
    loadQuestion();        
    showFinalResult();
   
}   

const reset = ()=>{
    for(i=0; i<inputs.length; i++){
        inputs[i].checked=false;
    }
}

const findSelectOptionValue=()=>{   

    for(i=0; i<inputs.length; i++){
        if(inputs[i].checked){            
            let ans = inputs[i].value;  
            if(ans===data[index].correct){
                count++
            } 
        }
    }   

}

const showFinalResult=()=>{
    if(index==total){  
        document.getElementById("totalQ").innerHTML= total;
        document.getElementById("correctA").innerHTML=count;
        document.getElementById("incorrectA").innerHTML=total-count;
    }
}

loadQuestion()



