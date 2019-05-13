const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// selecting nav items
let nav = document.querySelectorAll('nav a');

nav.forEach((item,i)=> item.innerText = siteContent.nav[`nav-item-${i+1}`]);

const h1 = document.querySelector('h1');
const h1Text = siteContent.cta['h1'];
// inserting h1 text
h1Text.split(' ')
  .map(text => h1.innerHTML += `${text} <br>` )
  .join('')

  // inserting buttons
  const btn = document.querySelector('.cta-text button');
  btn.innerText = siteContent.cta['button'];
  // adding h1 image
  const img = document.getElementById('cta-img')
  img.src = siteContent.cta['img-src']
  // main-content

  const mainContent = (i, head, paragraph)=>{
    const div = document.querySelectorAll('.text-content');
    const h4 = div[i].children[0]
    const p = div[i].children[1]
    h4.innerText = siteContent['main-content'][`${head}`]
    p.innerText = siteContent['main-content'][`${paragraph}`]
  }
  // top-content div
  mainContent(0, "features-h4", "features-content" );
  mainContent(1, 'about-h4', 'about-content');
  const middleImg = document.getElementById('middle-img');
  middleImg.src = siteContent['main-content']['middle-img-src'];

  // bottom-content div
  mainContent(2, 'services-h4', 'services-content');
  mainContent(3, 'product-h4', 'product-content');
  mainContent(4, 'vision-h4', 'vision-content')
  