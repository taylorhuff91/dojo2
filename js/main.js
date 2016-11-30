function runRomanConvert() {
    var n = parseInt(document.querySelector('.rom-input').value);
    console.log(n);
    document.querySelector('.rom-output').innerHTML = convert(n);
    
    var romanKey = [
        
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII","IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MC", "MCC", "MCD", "MD", "MDC", "MDCC", "MDCCC", "MCM"]
        
        ];
        
    function convert(num) {
        var decimal = "";
        var convertNumber = num.toString().split('').reverse();
        
        for (var i = 0; i < convertNumber.length; i++) {
            decimal = romanKey[i][parseInt(convertNumber[i])] = decimal;
        }
        
        return decimal;
    }

};


// function runRomanConvert(num){
//     // parseInt(string, radix);
// var answer = parseInt(document.querySelector(".rom-input"), number);
// var result= document.querySelector(".rom-output").value;

// var number = [1, 5, 10, 50, 100, 500, 1000];

// var romanKey = ["I", "V", "X", "L", "C", "D", "M"];
    
// for (var i = 0; i <= number.length; i++) {
//     while(num% romanKey [i] < num){
//         answer += romanKey [i];
//         num -= number [i];
//         }
//     }
    
// return result;

// }