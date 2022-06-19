const resume = [
    {
        name: "Yuheshwar K S",
        dob:"03-04-2002",
        age: "20",
        address:"Yuheshwar K S,G1,Yatra Dreams,No 13,S.V Nagar,Seneerkuppam Near Seneerkuppam Park,Chennai - 600056,Tamil Nadu",
        education:{
            grade10:{
                grade:10,
                syllabus:"ICSE",
                school: "St Michales Academy (SMA)",
                score:"91.2"
            },
            grade12:{
                grade:12,
                syllabus:"CBSE",
                school: "Deivi Academy",
                score:"91.2"
            },
            college:{
                degree:"Under Graduate",
                department:"Information Technology",
                college:"Sri Venkateswara College Of Engineering (SVCE)",
                year:"2nd Year"
            }
        },
        language:{
            coding:["java","C","C++","Js"],
            communication:["Tamil","English"]
        },
        projects:["Hangman Game","Stone Paper Scissors Game","Student Report Generator in C"],
        contact:{
            hackerrank:"https://www.hackerrank.com/yuheshwar_ks",
            linkedin:"https://www.linkedin.com/in/yuheshwar-ks-a1014122a/",
            email:"yuheshwar.ks@gmail.com",
            number:"9600194857"
        }
    }, 
        {
        name: "abc",
        dob:"date",
        age: "age",
        address:"Yuheshwar K S,G1,Yatra Dreams,No 13,S.V Nagar,Seneerkuppam Near Seneerkuppam Park,Chennai - 600056,Tamil Nadu",
        education:{
            grade10:{
                grade:10,
                syllabus:"ICSE",
                school: "St Michales Academy (SMA)",
                score:"91.2"
            },
            grade12:{
                grade:12,
                syllabus:"CBSE",
                school: "Deivi Academy",
                score:"91.2"
            },
            college:{
                degree:"Under Graduate",
                department:"Information Technology",
                college:"Sri Venkateswara College Of Engineering (SVCE)",
                year:"2nd Year"
            }
        },
        language:{
            coding:["java","C","C++","Js"],
            communication:["Tamil","English"]
        },
        projects:["Hangman Game","Stone Paper Scissors Game","Student Report Generator in C"],
        contact:{
            hackerrank:"https://www.hackerrank.com/yuheshwar_ks",
            linkedin:"https://www.linkedin.com/in/yuheshwar-ks-a1014122a/",
            email:"yuheshwar.ks@gmail.com",
            number:"9600194857"
        }
    }
];

console.log(resume)

function display(){
    var key = Object.keys(resume)
// Simple For Loop
  console.log("\n#################### REGULAR FOR LOOP ################################")
  for(var i=0;i<Object.keys(resume).length;i++) {
    console.log(key[i])
  }
  
  console.log("\n#################### FOR EACH LOOP ################################")
  resume.forEach(function (key) {
    console.log(key.education);
    console.log(key.projects)
    console.log(key.contact)
  })

  console.log("\n#################### FOR OF LOOP ################################")
  for(const key of resume) {
    console.log(key.name);
    console.log(key.age);
    console.log(key.dob);
  }
  
  console.log("\n#################### FOR IN LOOP ################################")
  for(const key in resume) {
    console.log(key, resume[key])
  }
}
display()