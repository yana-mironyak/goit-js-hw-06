const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// -----------------First Variant-----------------------

// const elements = images.map(img => {
//    const itemEl = document.createElement('li');
//   itemEl.insertAdjacentHTML('beforeend', `<img alt='${img.alt}' src = '${img.url}' width=250 height=150> `);
  
//   return itemEl;
// }); 
// console.log(elements);

// const listEl = document.querySelector('.gallery');
// listEl.append(...elements);

// -----------------Second Variant-----------------------

const listEl = document.querySelector('.gallery');
console.log(listEl);

const imagesEl = images.map(image =>
 `<li><img src='${image.url}' alt='${image.alt}' width=250 height=150></li>`);

// console.log(imagesEl);

listEl.insertAdjacentHTML('beforeend', imagesEl.join(""));



