const bonus = 20;

function sum(first, second){
    var result = first + second + bonus;
    if(result > 9){
        var mood = "happy";
        mood = 'Fishy';
        
    }
    console.log(mood);
    return result;
    
}

const output = sum(3, 7)
// console.log(output);

