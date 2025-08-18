function gradingStudents(grades) {
    // Write your code here
    
   return grades.map(element => {
       if(element>37){
       let round = Math.ceil(element/5)*5
      
        if(element>37 && round-element<3)
            {
            console.log(round)
        }
        
        }
         
        console.log(element)
       
    });
   
}

gradingStudents([73,67,38,33])