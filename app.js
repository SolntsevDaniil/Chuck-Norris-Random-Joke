class Jokes {
    // Constructor init
    constructor(button, xhr, textarea) {
        this.button = button;
        this.xhr = xhr;
        this.textarea = textarea;
    };

    getJokes() {
        this.button.addEventListener('click', () => {

            // Location of the jokes and methods how to get them
            this.xhr.open('GET', 'http://api.icndb.com/jokes/random', true);

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

            // Request sending
            this.xhr.send();
        });
    };
};

const button = document.querySelector('input'),
      xhr = new XMLHttpRequest,
      textarea = document.querySelector('p');

const joke = new Jokes(button, xhr, textarea);
joke.getJokes();