const fetchJsonData = (shouldError?: boolean) =>
  fetch('./api/flights.json')
    .then(response => {
      if (!response.ok || shouldError) {
        throw new Error(`HTTP error ${(shouldError ? 'synthetic error' : response.status)}`);
      }
      return response.json();
    })
    .catch((error) => {
      return error;
    })


document.addEventListener('DOMContentLoaded', async () => {
  const flights = await fetchJsonData();
  console.log(flights)
})