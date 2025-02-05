// Purpose: Loaders are functions that fetch data before a route is rendered. They ensure that the necessary data is available for the component when it mounts.

// Usage:
// Loaders are defined in the route configuration and are executed before the component is rendered.
// They can be used to fetch data from APIs or other sources, ensuring that the UI is populated with the required information.
export const dataLoader = async () => {
  console.log("fetching data with dataLoader");
  //   const response = await fetch(
  //     "https://example.com/public/quotes/quote/random"
  //   );
  //   response = { id: "123", name: "asdasdas" };
  //   return response.json();
  return { id: "okk" };
};
