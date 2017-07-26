export const getPosts = (successCallback, errorCallback) => {
  fetch('data/posts.json')
  .then(response => response.json())
  .then(response => successCallback(response))
  .catch(error => errorCallback(error));
}

export const getPost = (id, successCallback, errorCallback) => {
  fetch('data/single.json')
  .then(response => response.json())
  .then(response => successCallback(response))
  .catch(error => errorCallback(error));
}


export const getAbout = (successCallback, errorCallback) => {
  fetch('data/about.json')
  .then(response => response.json())
  .then(response => successCallback(response))
  .catch(error => errorCallback(error));
}
