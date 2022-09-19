const mainGallery = document.getElementById('gallery');

const mainData = {
    kat1: { name: 'Abyssinian', picture: '/assets/catimages/kat1.jpg', description: 'none'},
    kat2: { name: ' Japanese Bobtails', picture: '/assets/catimages/kat2.jpg', description: 'none'},
    kat3: { name: 'Scottish Fold', picture: '/assets/catimages/kat3.jpg', description: 'none'},
    kat4: { name: 'Mei-Kun', picture: '/assets/catimages/kat4.jpg', description: 'none'},
    kat5: { name: 'Sphynx', picture: '/assets/catimages/kat5.jpg', description: 'none'},
    kat6: { name: 'Burma', picture: '/assets/catimages/kat6.jpg', description: 'none'},
}

mainGallery.classList.add('katstyle')

createGallery ();

function createGallery() {

    for ( let myIndex in mainData) {

        let myName = mainData[myIndex].name;
        let myUrl = mainData[myIndex].picture;

        createCard(myName, myUrl);
    }

}

function createCard(myHeadline, myUrl, clearParent) {

    if(clearParent) {
        mainGallery.innerHTML = '';
    }

    const myCard = document.createElement('figure');
    const mainHeadline = document.createElement('h2');
    const mainImage = document.createElement('img');

    mainHeadline.innerText = myHeadline; 
    mainImage.src = myUrl; 

    myCard.appendChild(mainHeadline);
    myCard.appendChild(mainImage);

    mainGallery.appendChild(myCard);

}