module.exports = function toReadable (number) {
    function switchNumber(num){
        switch (num) {
            case 0:
                return '';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
      
        }
      }
      function switchNumberTens(num){
        switch (num) {
            case 2:
                return 'twenty ';
            case 3:
                return 'thirty ';
            case 4:
                return 'forty ';
            case 5:
                return 'fifty ';
            case 6:
                return 'sixty ';
            case 7:
                return 'seventy ';
            case 8:
                return 'eighty ';
            case 9:
                return 'ninety ';
      
        }
      }
      function switchNumberSecondTen(num){
        switch (num) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';    
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
      
        }
      }
      
      let ans = '';
      if(number === 0){
        ans = 'zero';
      }
      const hundred = Math.floor(number/100);
      const tens = Math.floor((number-(hundred*100))/10);
      const ones = number-(hundred*100)-(tens*10);
      
      if(hundred>=1) {
        ans = switchNumber(hundred)+' hundred ';
      }
      
      if(tens > 1){
        ans += switchNumberTens(tens);
      }else if (tens ===1) {
        const secondTens = number%100;
        return ans += switchNumberSecondTen(secondTens);
      }
      ans = ans + switchNumber(ones)
      return ans.trim();
}
