const HOME = {
  title: 'The Atlas of Liminal Spaces',
  header: 'The Atlas of Liminal Spaces',
  about: `Welcome to <span id="title"><strong>The Atlas of Liminal Spaces</strong></span>, a collection of maps cataloguing those strange in between realities we find ourselves in. Site currently under construction.`
}

const SUBMISSION = {
  title: 'Submit',
  header: 'Submit',
  about: `Add a <span id="title"><strong>map</strong></span> of your own to the atlas.`
}

const PHYSICAL = {
  title: 'Physical',
  header: 'Physical',
  about: `A collection of maps to the <span id="title"><strong>Physical</strong></span>, all those liminal spaces that you may arrive at as the crow flies, should you put in enough time and effort.`
}

const INTANGIBLE = {
  title: 'Intangible',
  header: 'Intangible',
  about: `A collection of maps to the <span id="title"><strong>Intangible</strong></span>, all those liminal spaces that you cannot arrive at in a linear fashion.`
}

const PAGE_TITLLE = document.getElementById('title')
const PAGE_CONTENT = document.getElementById('main')
const PAGE_HEADER = document.getElementById('header')
const ABOUT_CONTAINER = document.getElementById('about')
const ABOUT_CONTENT = document.createElement('h2')
const HOME_LINK = document.getElementById('home-link')
const SUBMIT_LINK = document.getElementById('submit-link')
const PHYSICAL_LINK = document.getElementById('physical-link')
const INTANGIBLE_LINK = document.getElementById('intangible-link')

function buildPage() {
  let page
  switch (this.id) {
    case 'home-link':
      page = HOME
      console.log(this.id)
      break
    case 'submit-link':
      page = SUBMISSION
      console.log(this.id)
      break
    case 'physical-link':
      page = PHYSICAL
      console.log(this.id)
      break
    case 'intangible-link':
      page = INTANGIBLE
      console.log(this.id)
      break
    default:
      page = HOME
  }
  PAGE_HEADER.textContent = page.title
  ABOUT_CONTENT.innerHTML = page.about
  ABOUT_CONTAINER.appendChild(ABOUT_CONTENT)
}

buildPage()

HOME_LINK.addEventListener('click', buildPage)
SUBMIT_LINK.addEventListener('click', buildPage)
PHYSICAL_LINK.addEventListener('click', buildPage)
INTANGIBLE_LINK.addEventListener('click', buildPage)
