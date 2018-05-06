// Get new joke
document.querySelector('input').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    // Location of the jokes and methods how to get them
    xhr.open('GET', 'http://api.icndb.com/jokes/random', true);

    // What to do if xhr loaded
    xhr.addEventListener('load', function() {

        // Status check
        if (this.status == 200) {
            const response = JSON.parse(this.responseText);
            // Display the joke
            document.querySelector('p').innerHTML = response.value.joke;
        } else {
            // Display the error
            document.querySelector('p').innerHTML = 'Somthing went wrong';
        };
    });

    // Requset sending
    xhr.send();
});