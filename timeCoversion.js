function timeConversion(s) {
    // Write your code here
    hour = s.substring(0,2)
    noon = s.substring(8,10)
    result= ""
    if(noon == "PM" && hour !== "12")
    {
        result =(Number(hour)+12)+s.substring(2,8)
     }
     else if(noon == "AM" && hour == "12")
     {
        hour = "00"
     result =hour+s.substring(2,8)
     }
     else{
        result = s.substring(0,8)
     }
    console.log(result)
   


}
timeConversion("09:05:50AM")