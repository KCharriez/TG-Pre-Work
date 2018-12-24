const xhr = new XMLHttpRequest();

const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;
};
};

xhr.open('GET', url);
xhr.send();

//The code for sending a 'GET' request via AJAX. The common practice of calling the requesting object 'xhr'.
