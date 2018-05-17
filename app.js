class Jokes {
    // Constructor init
    constructor(button, textarea) {
        this.button = button;
        this.xhr = new XMLHttpRequest();
        this.textarea = textarea;
    };

    getJokes() {
        this.button.addEventListener('click', () => {

            // Location of the jokes and methods how to get them
            this.xhr.open('GET', 'http://api.icndb.com/jokes/random', true);

            // Request sending
            this.xhr.send();

            // Saving the scope
            const self = this;
            // What to do if xhr loaded
            this.xhr.addEventListener('load', function() {

                // Check status
                if(this.status == 200) {
                    const response = JSON.parse(this.responseText);
                    // Display the joke
                    self.textarea.innerHTML = response.value.joke;
                } else {
                    // Display the error
                    self.textarea.innerHTML = 'Something went wrong';
                };
            });
        });
    };
};

const button = document.querySelector('input'),
      textarea = document.querySelector('p');

const joke = new Jokes(button, textarea);
joke.getJokes();