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
                    template+=`<div class="astronaut">
                    <div class="bio">
                       <h3>Mae Jemison</h3>
                       <ul>
                          <li>Hours in space: 190</li>
                          <li>Active: false</li>
                          <li>Skills: Physician, Chemical Engineer</li>
                       </ul>
                    </div>
                    <img class="avatar" src="images/mae-jemison.jpg">
                 </div>`
                }
                 let container = document.getElementById("container");
                 container.innerHTML=template;

            })
            
        })
    
    
    

});