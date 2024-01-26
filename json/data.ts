// locations.ts

interface City {
    name: string;
  }
  
  interface State {
    name: string;
    cities: City[];
  }
  
  interface Country {
    name: string;
    states: State[];
  }
  
  interface Locations {
    countries: Country[];
  }
  
  const locations: Locations = {
    countries: [
      {
        name: "India",
        states: [
          {
            name: "Maharashtra",
            cities: [
              { name: "Mumbai" },
              { name: "Pune" },
              { name: "Nagpur" }
            ]
          },
          {
            name: "Karnataka",
            cities: [
              { name: "Bangalore" },
              { name: "Mysuru" },
              { name: "Hubli" }
            ]
          },
          {
            name: "Tamil Nadu",
            cities: [
              { name: "Chennai" },
              { name: "Coimbatore" },
              { name: "Madurai" }
            ]
          }
          // ... Other states of India
        ]
      },
      {
        name: "United States",
        states: [
          {
            name: "California",
            cities: [
              { name: "Los Angeles" },
              { name: "San Francisco" },
              { name: "San Diego" }
            ]
          },
          {
            name: "Texas",
            cities: [
              { name: "Houston" },
              { name: "Dallas" },
              { name: "Austin" }
            ]
          },
          {
            name: "New York",
            cities: [
              { name: "New York City" },
              { name: "Buffalo" },
              { name: "Rochester" }
            ]
          }
          // ... Other states of the United States
        ]
      },
      {
        name: "Germany",
        states: [
          {
            name: "Bavaria",
            cities: [
              { name: "Munich" },
              { name: "Nuremberg" },
              { name: "Augsburg" }
            ]
          },
          {
            name: "North Rhine-Westphalia",
            cities: [
              { name: "Cologne" },
              { name: "Düsseldorf" },
              { name: "Dortmund" }
            ]
          },
          {
            name: "Baden-Württemberg",
            cities: [
              { name: "Stuttgart" },
              { name: "Karlsruhe" },
              { name: "Heidelberg" }
            ]
          }
          // ... Other states of Germany
        ]
      }
      // ... Other countries
    ]
  };
  
  export default locations;
  