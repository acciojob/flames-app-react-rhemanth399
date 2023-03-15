import React, {Component, useState} from "react";
import '../styles/App.css';

let [str1,setStr1]=useState('');
let [str2,setStr2]=useState('');
let [word,setWord]=useState('')
let handle=(e)=>{
    setStr1(e.target.value);
    setStr2(e.target.value);
}
let submitHandle=(e)=>{
    e.preventDefault();
}
let App=()=>{
        function calculateFlames(str1,str2){
            for(let i=0;i<str1.length;i++)
            {
                if(str2[i].include(str1[i]))
                {
                    str1[i]=str1[i].replace(" ")
                    str2[i]=str2[i].replace(" ")
                    i--;
                }

            }
    let remainingLength=str1.length+str2.length;
    let flames = ["Siblings", "Friendship", "Love", "Affection", "Marriage", "Enemy"];
    while(flames.length>1)
    {
            let count=remainingLength%flames.length;
            flames.splice(count,1);
    }
        return setWord(flames[0]);
        }
    

        return(
            <div id="main">
                <form onSubmit={submitHandle}>
              <input type='text'value={str1} data-testid="input1" onChange={handle}/>
              <input type="text" value={str2} data-testid="input2" onChange={handle}/>
              <button type="submit" onClick={()=>calculateFlames()}data-testid='calculate_relationship' >Calculate Relationship Future</button>
              <button type="submit" data-testid="clear">Clear</button>
              <h3 data-testid="answer">{word}</h3>
                </form>
            </div>

        )
    }



export default App;
