// All projects
// ====
let projects = [
  // project 1
  {
    title: "The Girls Diary",
    image: "girls-diary.jpg",
    desc: `thegirlsdiary.com website is made out of wordpress. It is a splendid site
    made for a passionate and inspirational blogger.`,
    link: "http://thegirlsdiary.com/",
    client: {
      name: "Author @ The girls diary",
      link: "https://www.facebook.com/thegirlsdiaryinspiration/"
    },
    dateOfCompletion: "August 7th 2017",
    service: "Webdevelopment, SEO, Wordpress Development"
  },
  // project 2
  {
    title: "Amaravathi Service Center",
    image: "madhuk-site.jpg",
    desc: `Built and customised out of a static template is the site rajadhaniservices.com.
    Owner of the site was a young enterprenuer who really was excited about his web presence.`,
    link: "http://rajadhaniservices.in/",
    client: {
      name: "Amaravathi Services",
      link: "rajadhaniservices.in"
    },
    dateOfCompletion: "May 1st 2017",
    service: "Webdevelopment"
  },
  // project 3
  {
    title: "Rajakamani Matrimony",
    image: "rmani-matri.png",
    desc: `Matrimonial service site built in Mongo DB, Node.js and Angular.js.`,
    link: "http://rajakamanimatrimony.com/",
    client: {
      name: "Mani Marriage Beureau",
      link: "http://rajakamanimatrimony.com/about"
    },
    dateOfCompletion: "August 1st 2017",
    service: "Webdevelopment, SEO"
  },
];

// Adding previews
// ====
let previewDiv = document.querySelector('#portfolio .row');

for (let i = 0; i < projects.length; ++i) {
  // create a portfolio item.
  var el = document.createElement('div');
  el.classList.add('col-sm-4', 'portfolio-item');
  el.innerHTML =`
  <div class="portfolio-link" href="#portfolioModal${i+1}" data-toggle="modal">
    <div class="caption">
      <div class="caption-content">
        <i class="fa fa-search-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${projects[i].image}" alt="">
  </div>
  `;

  // append item.
  previewDiv.appendChild(el);
}

// Adding modals
// ====
// we got no upper div but body
let index = document.querySelector('body.index');

for (let i = 0; i < projects.length; ++i) {
  // create a portfolio modal.
  var el = document.createElement('div');
  el.classList.add('portfolio-modal', 'modal', 'fade');
  el.setAttribute('id', 'portfolioModal' + (i+1).toString());
  el.setAttribute('tabindex', '-1');
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-hidden', 'true');

  el.innerHTML =`
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <h2>${projects[i].title}</h2>
              <hr class="star-primary">
              <img class="img-fluid img-centered" src="img/portfolio/${projects[i].image}" alt="">
              <p>
                ${projects[i].desc}
              </p>
              <ul class="list-inline item-details">
                <li>Client:
                  <strong>
                    <a href="${projects[i].client.link}">${projects[i].client.name}</a>
                  </strong>
                </li>
                <li>Date:
                  <strong>
                    <a>${projects[i].dateOfCompletion}</a>
                  </strong>
                </li>
                <li>Service:
                  <strong>
                    <a>${projects[i].service}</a>
                  </strong>
                </li>
              </ul>
              <button class="btn btn-success" type="button" data-dismiss="modal">
                <i class="fa fa-times"></i>
                Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  // append item.
  index.appendChild(el);
}
