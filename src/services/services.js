export const getPosts = (successCallback, errorCallback) => {
  fetch('data/posts.json')
  .then(response => response.json())
  .then(response => successCallback(response))
  .catch(error => errorCallback(errorCallback));
}
