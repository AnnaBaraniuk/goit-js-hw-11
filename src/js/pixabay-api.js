
export function getImage(query) {
    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: "43216029-fdbabf479345253dcfedb0f85",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

  const url = `${BASE_URL}?${params}`;

    return fetch(url)
        .then(res => res.json())
    .catch (error => {
            console.error('Error occurred while fetching images:', error);
            throw error;
        });
 }
// export function getImage(query) {
//   const BASE_URL = "https://pixabay.com/api/"
//   const params = new URLSearchParams({
//     key: "43216029-fdbabf479345253dcfedb0f85",
//     q: query,
//     image_type: "photo",
//     orientation: "horizontal",
//     safesearch: true,
//   })

//   const url = `${BASE_URL}?${params}`;

//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
// }