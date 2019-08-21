const data = [
    {"name": "Ade",
     "Job": "Policeman",
     "Course": "Mbbs",
    },
    {"name": "Ade",
    "Job": "Banker",
    "Course": "Maths",
    },
    {"name": "Ade",
    "Job": "Banker",
    "Course": "English",
    },
    {"name": "Ade",
    "Job": "Banker",
    "Course": "History",
    },
    {"name": "Ade",
    "Job": "Banker",
    "Course": "ELect-elect",
    },
    {"name": "Ade",
    "Job": "Banker",
    "Course": "Pol Sci",
    },
    {"name": "Ade",
    "Job": "Banker",
    "Course": "Chemistry",
    },
];

const namefield = document.getElementById("Name").innerHTML;
const courseField = document.getElementById("Course").innerHTML;
const jobField = document.getElementById("Job").innerHTML;

function nameIterator(names){
    let nextIndex = 0;

    return {
         next: function(){
             return nextIndex < names.length ?
             { value: names[nextIndex++ ], 
               done: false
             } : {done: true}
         }
    }
}

