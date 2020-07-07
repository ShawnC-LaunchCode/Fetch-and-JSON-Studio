window.addEventListener('load', function() {
    let url = 'https://handlers.education.launchcode.org/static/astronauts.json';

    fetch(url).then(function(response) {
        response.json().then(function(json) {
            let template = '';

            json.forEach(function(elem) {

              let name = [elem.firstName, elem.lastName].join(' ');
              
              template += `<div class="astronaut">
                <div class="bio">
                   <h3>${elem.name}</h3>
                   <ul>
                      <li>Hours in space: ${elem.hoursInSpace}</li>
                      <li>Active: ${elem.active}</li>
                      <li>Skills: ${elem.skills}</li>
                   </ul>
                </div>
                <img class="avatar" src="${elem.picture}">
              </div>`;
            });

            document.getElementById('container').innerHTML = template;
        })
    })
});
