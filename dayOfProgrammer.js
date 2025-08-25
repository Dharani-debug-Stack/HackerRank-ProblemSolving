function dayOfProgrammer(year) {
    // Write your code here
    if(year ===1918)
    {
        return "26.09.1918"
    }
    let isLeap;
    if(year<1918){
        isLeap = (year %4 === 0)
    }
    else{
        isLeap=(year%400 === 0 ||(year%4 ===0 && year%100 != 0) )
    }
    let day =isLeap?12:13
    console.log(day+".09."+year)
}
dayOfProgrammer(2016)