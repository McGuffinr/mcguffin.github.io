const requestURL = 'https://raw.githubusercontent.com/McGuffinr/mcguffin.github.io/master/final-design/jason/business.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})

  .then(function (jsonObject) {
    const business = jsonObject["business"];

    for (let i = 0; i < business.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let  contact_info = document.createElement('div');
        let  a = document.createElement('a');

      h2.textContent = business[i].name;

      image.setAttribute('src', 'images/' + business[i].photo);

      image.setAttribute('alt', business[i].name);

      contact_info.textContent = business[i].contact;

      
      a.title = "website";
      a.href =  business[i].weblink;
      

      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(contact_info);
      card.appendChild(a);
      

      document.querySelector('div.card').appendChild(card);
    }

  });

  const business = jsonObject['business'];