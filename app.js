

//DUmmy data.
const data = [
    {"name": "Ade",
     "Job": "Policeman",
     "Course": "Mbbs",
    },
    {"name": "Bayo",
    "Job": "Boxer",
    "Course": "Maths",
    },
    {"name": "Taiwo",
    "Job": "Developer",
    "Course": "English",
    },
    {"name": "Kemi",
    "Job": "Trader",
    "Course": "History",
    },
    {"name": "Bola",
    "Job": "Driver",
    "Course": "ELect-elect",
    },
    {"name": "Francis",
    "Job": "Bus conductor",
    "Course": "Pol Sci",
    },
    {"name": "Kehinde",
    "Job": "Banker",
    "Course": "Chemistry",
    },
];


document.getElementById('next').addEventListener('click', nextProfile);
const profiles = profileIterator(data);


// next profile display
function nextProfile(){
    let currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
        console.log(currentProfile);
        console.log(currentProfile.name);
        document.getElementById("Name").innerHTML = `<p>${currentProfile.name}</p>`;
        document.getElementById("Course").innerHTML =`<p>${currentProfile.Job}</p>`;
        document.getElementById("Job").innerHTML =`<p>${currentProfile.Course}</p>`;
       
    }
    else{
        window.location.reload();
    }   

}


function profileIterator(profiles){
    let nextIndex = 0;

    return {
         next: function(){
             if(nextIndex < profiles.length){
                 return {value: profiles[nextIndex++],
                         done: false
                        }  
             }
             else{
                 return {done: true}
             }
         }
    }
}

