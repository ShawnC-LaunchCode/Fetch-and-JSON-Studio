// TODO: add code here
window.addEventListener("load",function(){
    let url = "https://handlers.education.launchcode.org/static/astronauts.json";
    let json=[];
    //this.console.log("in onLoad, fetch url:", url);
    fetch(url)
        .then(function(response){
            response.json()
            .then(function(jsonTemp){
                json=jsonTemp;
                //console.log("json in loop:",json);

                let template="";

                for(let i =0; i<json.length;i++){
                    let name="";
                    let hours="";
                    let active="";
                    let skills="default";
                    let pic="";

                    name = json[i].firstName + " " + json[i].lastName
                    hours= json[i].hoursInSpace;
                    active = json[i].active;
                    
                    skills = json[i].skills;
                    // for (let j =0; j<json[i].skills.length; i++){
                    //     skills += json[i].skills[j];
                    // }
                    pic = json[i].picture;
                    
                    template+=`<div class="astronaut">
                    <div class="bio">
                       <h3>${name}</h3>
                       <ul>
                          <li>Hours in space: ${hours}</li>
                          <li>Active: ${active}</li>
                          <li>Skills: ${skills}</li>
                       </ul>
                    </div>
                    <img class="avatar" src="${pic}">
                 </div>`
                }
                 let container = document.getElementById("container");
                 container.innerHTML=template;

            })
            
        })
    
    
    

});