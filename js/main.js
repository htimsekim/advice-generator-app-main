const api_url = 'https://api.adviceslip.com/advice'

function getAdvice() {
  fetch(api_url).then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE NOT OK");
    }
  })
  .then(function (data) {
    document.getElementById('advice_id').innerHTML = data.slip.id;
    document.getElementById('advice').innerHTML = data.slip.advice;
  })
}

document.querySelector('.die-container').addEventListener('click', () => {
  reload = location.reload(true);
});

getAdvice();
