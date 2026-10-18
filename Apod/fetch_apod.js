let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

// without specific date
// let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=ntzHTdHf5hBLeLaaAz9QG1rnB9Puf9OW89G4ZZcc'

// with specific date
let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=ntzHTdHf5hBLeLaaAz9QG1rnB9Puf9OW89G4ZZcc&date=2026-03-11'


// Fetch can fetch many kinds of web resources (ex. images and other web pages), (not just JSON)
// Have to convert the response into JSON but that could be quite slow for a large JSON response.

fetch(apodApiUrl) // returns a Promise. 
    // The promise will Resolve = be successful (then) or be rejected = fail/error (catch)

    .then(response => { // Response is the raw response data - (it's bytes that can be turned into JSON)
        return response.json() // extract JSON from the response
    })

    .then(data => {
        console.log(data)
        //Show title from link object
        let title = data.title
        apodTitle.innerHTML = title

        let explanation = data.explanation
        apodExplanation.innerHTML = explanation

        let mediaType = data.media_type
        let url = data.url
        //show image
        if (mediaType === 'image') {
            apodImage.src = url
            apodImage.style.display = 'block'
        }
       // show the video
        else if (mediaType === 'video') {
            apodVideo.src = url
            apodVideo.style.display = 'block'
        }
        //show error alert
        else {
            alert('Unknown media type!')
        }
    }) // the (then) function is called if the Promise is (successful)
    .catch(err => {
        console.log(err) // for developers
        // error message when failing to connect
        apodExplanation.innerHTML = 'Sorry, could not fetch the astronomy picture.'
    })