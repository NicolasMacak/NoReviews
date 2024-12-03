// console.log("I will let those deserving!");
//if IMDB
//document.body.style.backgroundColor = 'purple'
let currentUrl = window.location.href;

if (currentUrl.startsWith("https://www.imdb")) {

    // www.imdb.com/title
    // -- rating-bar__base-button
    // else
    // Browse movies by genre
    // /search/title
    // /chart/top
    // -- dli-ratings-container

    let relevantClassName = currentUrl.startsWith("https://www.imdb.com/title") ? 'rating-bar__base-button' : 'dli-ratings-container'

    let littleStars = document.getElementsByClassName("ipc-icon"); // ipc-rating-

    console.log(currentUrl);
    console.log(relevantClassName)
    console.log(littleStars.length);
    console.log(littleStars);

    for (let index = 0; index < littleStars.length; index++) {
        // hideElement(littleStars[index]);
    }

    function hideElement(element) {
        element.style.display = "none";
    }

    function getCurrentUrl() {
        return window.location.href;
    }

    //ipc - rating - star ipc - rating - star--base ipc - rating - star--imdb ratingGroup--imdb - rating


    // Infinite loading counter
    /*
        execute kazdu 0,5 sec 
        check if length od the elements changed
        if yes
            apply display block none to remaining elements

        every 0,5 sec
            currentElements.Length != newElements.Length
                for(index2 = 0; index2 < littleStars.length; index2++){
                    hideElement(index2)
                }


    */

}
