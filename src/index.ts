interface Flight {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
}

class Flights {
  apiUrl: string;
  flights: Flight[];
  input: HTMLInputElement;
  resultContainer: HTMLDivElement;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
    this.flights = [];
    this.resultContainer = document.querySelector('.js--results');
    this.input = document.querySelector('.js--input');

    if (this.input) {
      this.input.onkeyup = this.handleKeyUp.bind(this);
    }
  }

  showResults() {
    const formatRows = (): string => this.flights.reduce((accumulator, { airport, url, flightNumber, originalTime, expectedTime }) => {
      return `${accumulator}
      <tr>
          <th><a href="https://schiphol.nl${url}" target="_blank" rel="noopener">${airport}</a></th>
          <th>${flightNumber}</th>
          <th>${originalTime}</th>
          <th>${expectedTime}</th>
        </tr>
      `
    }, '')

    this.resultContainer.innerHTML = `
      <table>
        <tr>
          <th>Airport</th>
          <th>FlightNumber</th>
          <th>Original time</th>
          <th>Expected time</th>
        </tr>
        ${formatRows()}
      </table>
    `;
  }

  showNoResults() {
    this.resultContainer.innerHTML = 'No results found';
  }

  clearResults() {
    this.resultContainer.innerHTML = '';
  }

  async handleKeyUp(event: any) {
    const { value } = event.target || {};

    if (value?.length >= 3) {
      const flightData = await this.getFlights();
      this.filterFlights(flightData.flights, value);
      if (!!this.flights.length) {
        this.showResults();
      } else {
        this.showNoResults();
      }
    } else {
      this.clearResults();
    }
  }

  async getFlights(): Promise<{ flights: Flight[] }> {
    return fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        return error;
      })
  }

  filterFlights(flights: Flight[], searchTerm: string) {
    this.flights = flights.filter(({ airport }) => airport.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  new Flights('./api/flights.json');
})