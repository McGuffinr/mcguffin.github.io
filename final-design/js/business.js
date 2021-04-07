const requestURL = 'jason/business.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
	
  .then(function (jsonObject) {
    const business = jsonObject['business'];

    for (let i = 0; i < business.length; i++) {
       if (business[i].name == "Millhollow" || business[i].name == "AlphaGraphics" || business[i].name == "The Hickory") {
                // Create Elements
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let photo = document.createElement('img');
                let contact = document.createElement('p');
                let weblink = document.createElement('p');
                let details = document.createElement('div');
                //select used information
                name.textContent = business[i].name;
                contact.textContent = 'Phone Number: ' + business[i].contact;
                weblink.textContent = 'website: ' + business[i].weblink;
                // set attributes for img
                details.setAttribute('class', 'details');
                image.setAttribute('src', 'images/'+ business[i].photo);
                image.setAttribute('alt', business[i].name + ' Business');
                // select and order information used
                details.appendChild(name);
                details.appendChild(contact);
                details.appendChild(weblink);
                card.appendChild(details); 
                card.appendChild(photo);

                document.querySelector('div.card').appendChild(card);
            }
        }
  }); 
