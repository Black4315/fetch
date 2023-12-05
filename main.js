let  reposInput = document.querySelector('.get-repos input');
let  reposButton  = document.querySelector('.get-button');
let  reposData = document.querySelector('.show-repos');




reposButton.onclick = function(){

  
    getRepos()
}

function getRepos(){
    if (reposInput.value == '') {
        reposData.innerHTML = `
        <img class='ya'src="./error.png">
        <span style='color:#cc3333; '>Plaese Write Github Username</span>
        `
    }
    else{
fetch(`https://api.github.com/users/${reposInput.value}/repos`)
    .then((repositry) => repositry.json() ) 

    .then((reposs)=> {


reposData.querySelector('span').innerHTML =  ''


reposs.forEach(repo => {
  
    let reposDataDiv = document.createElement('div');
    let reposDatatext = document.createTextNode(repo.name);
    let AData = document.createElement('a');
    let ADatatext = document.createTextNode('Visit');
    let starrepo = document.createElement('span');
    let starrepotext = document.createTextNode('Star : ' + repo.stargazers_count);
    let starAndlinkDiv = document.createElement('div');

   
    AData.href = `https:/github.com/${reposInput.value}/${repo.name}`
    starrepo.appendChild(starrepotext)
    

    AData.setAttribute('target','blank')
    reposDataDiv.classList.add('repoBox')
    
    AData.appendChild(ADatatext)
    reposDataDiv.appendChild(reposDatatext)
    reposData.appendChild(reposDataDiv) 
    reposDataDiv.appendChild(AData)
    reposDataDiv.appendChild(starrepo)
    //reposDataDiv.appendChild(starAndlinkDiv)
    //starAndlinkDiv.appendChild(AData)
    //starAndlinkDiv.appendChild(starrepo)
});

    })

      
    }
}