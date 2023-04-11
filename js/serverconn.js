let urlServer = 'https://23.javascript.pages.academy/keksobooking/data';

const createFetch = (onSuccess, onError) => () => {
  return fetch(
    urlServer,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

export {createFetch};
