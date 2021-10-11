function closeTopMsg() {
    const topMsg = document.getElementById("top-msg");
    topMsg.style.display = "none";
};

// index page animation related code

const seeMoreBtn = document.getElementById('see-all-btn');
const slideshowUl = document.getElementById('slideshow-ul');

let showAllBtnState = "unclicked";

function showAllUpdates() {
    slideshowUl.classList.toggle("slideshow-container");
    if (showAllBtnState == "unclicked") {
        seeMoreBtn.innerText = "Show Less";
        showAllBtnState = "clicked";
    } else {
        seeMoreBtn.innerText = "Show All";
        showAllBtnState = "unclicked";
    }
};

// removing typewriter cursor after completion of typing

const typewriterSec = document.getElementById('typewriter-effect');

setTimeout(() => {
    typewriterSec.classList.remove('typewriter');
    typewriterSec.classList.add('typewriter-after')
}, 5000);

// code for modal box

var modal = document.getElementById("modal-box");
var btn = document.getElementById("poster-modal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (X), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// members page navigation

var Tstate, Astate, gapState;

function toggleMemberNav(clickedDiv) {
    
    let ID = clickedDiv.id;
    const Tsec = document.getElementById('team-sec');
    const Asec = document.getElementById('alumni-sec');
    const Tmenu = document.getElementById('menu-team');
    const Amenu = document.getElementById('menu-alumni');

    const Toption = document.getElementById('show-team');
    const Aoption = document.getElementById('show-alumni');
    const Theading = document.getElementById('Team');
    const Aheading = document.getElementById('Alumni');
    const navHeading = document.getElementById('members-nav');
    const gapSec = document.getElementById('for-gap');

    // if show-teams button was clicked
    if (ID == "show-team") {
        // alert("Teams Opened");

        // if team is open
        if (Tstate == "open") {                     

            // close team 
            Tsec.classList.add('hide-members');   

            // hide team X
            Tmenu.classList.remove('clicked');      
            Toption.classList.remove('bgcolor-onclick');

            // change team status to closed
            Tstate = "closed";

            //if gap hidden then display it
            if (gapState == "hidden") {
                gapSec.classList.remove('hide-members');
                gapState = "not-hidden";
            }

        } else {
            
            // if team is closed and clicked, open team
            Tsec.classList.remove('hide-members');

            // show team X
            Tmenu.classList.add('clicked'); 
            Toption.classList.add('bgcolor-onclick');

            // change team status to open
            Tstate = "open";

            //scroll to Team heading
            window.scrollTo(navHeading.offsetLeft,navHeading.offsetTop);    

            // if gap displayed then hide gap section
            if (gapState != "hidden") {
                gapSec.classList.add('hide-members');
                gapState = "hidden";
            }

            // AND if alumni open
            if (Astate == "open") {    
                
                // close alumni
                Asec.classList.add('hide-members');      
                
                // hide alumni X
                Amenu.classList.remove('clicked');    
                Aoption.classList.remove('bgcolor-onclick');
                
                // change alumni status to closed
                Astate = "closed";
            }
        }
        
    }

    // if show alumni button was clicked
    if (ID == "show-alumni") {
        // alert("Alumni Opened");
     
        // if alumni is open
        if (Astate == "open") {                     
            
            // close alumni 
            Asec.classList.add('hide-members');   
            
            // hide alumni X
            Amenu.classList.remove('clicked');
            Aoption.classList.remove('bgcolor-onclick');      
            
            // change alumni status to closed
            Astate = "closed";
            
            //if gap hidden then display it
            if (gapState == "hidden") {
                gapSec.classList.remove('hide-members');
                gapState = "not-hidden";
            }
            
        } else {
            
            // if alumni is closed and clicked, open alumni
            Asec.classList.remove('hide-members');
            
            // show alumni X
            Amenu.classList.add('clicked'); 
            Aoption.classList.add('bgcolor-onclick');
            
            // change alumni status to open
            Astate = "open";
            
            //scroll to alumni heading
            window.scrollTo(navHeading.offsetLeft,navHeading.offsetTop);    

            // if gap displayed then hide gap section
            if (gapState != "hidden") {
                gapSec.classList.add('hide-members');
                gapState = "hidden";
            }

            // AND if team open
            if (Tstate == "open") {    
                
                // close team
                Tsec.classList.add('hide-members');      

                // hide team X
                Tmenu.classList.remove('clicked');    
                Toption.classList.remove('bgcolor-onclick');

                // change team status to closed
                Tstate = "closed";
            }
        }
    }
}