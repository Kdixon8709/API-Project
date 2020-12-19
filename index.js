//Step 1 - create an array of photos
let photos = ();



  fetch("https://picsum.photos/200").then((response) => {

    return response.json();

  }).then((responseJson) => {

    //injectInfo(responseJson);
    console.log(responseJson);

  });


  document.getElementsByTagName("body")[0].style.backgroundImage = "url(https://picsum.photos/200/300/?random=1" + new Date().getTime() +")";

//Step 2 - add photos from picsum api via javascript
function injectInfo(responseJson) {

  let table = document.getElementById('myTable');
  let row = table.insertRow(1);

  for (let i = 0; i < 2; i++) {

    let cell = row.insertCell(i);
    cell.id = `${responseJson.author}_${i}`;

  }

  document.querySelector(`#${responseJson.author}_0`).innerHTML = responseJson.download_url;
  let photo = document.createElement('img');
  let src = document.querySelector(`#${responseJson.author}_1`);
  photo.src = responseJson.download_url;
  src.appendChild(photo);

}