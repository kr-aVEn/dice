function rollDice(){
    const numofdice=document.getElementById("in").value;
    const diceimg =document.getElementById("img");
    const result =document.getElementById("result");
    const value=[];
    const img=[];
    for(i=0;i<numofdice;i++){
        const val=Math.floor(Math.random()*6)+1;
        value.push(val);
        img.push(`<img src="dice/${val}.png" alt="dice ${val}" > `);
        
    }
    result.textContent= 'dice:'+ value.join(',');
    diceimg.innerHTML=img.join('');

}
    