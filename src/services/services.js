export const getRepos = (successCallback, errorCallback) => {
  fetch('https://api.github.com/users/hoanx94/repos')
  .then(response => response.json())
  .then(response => successCallback(response))
  .catch(error => errorCallback(error));
}

export const getRepo = (id, successCallback, errorCallback) => {
  fetch('https://api.github.com/repos/hoanx94/'+id)
  .then(response => response.json())
  .then(response => successCallback(response))
  .catch(error => errorCallback(error));
}

export const getAbout = (successCallback, errorCallback) => {
  fetch('https://api.github.com/users/hoanx94')
  .then(response => response.json())
  .then(response => successCallback(response))
  .catch(error => errorCallback(error));
}
