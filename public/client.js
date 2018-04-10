// client-side js
// run by the browser each time your view template is loaded
(function() {
  console.log('Fetch Example:');
  
  fetch('https://timeStampByCandle.glitch.me/Oct 13, 1989')
    .then( response => {
      if (response.ok) return response.json();
      throw new Error('Something wrong!')
    })
    .then( response => {
      console.log('Sample url query: ', 'https://timeStampByCandle.glitch.me/Oct 13, 1989');
      console.log('Sample response: ', JSON.stringify(response))
    })
    .catch( err => console.error(err) );

}());