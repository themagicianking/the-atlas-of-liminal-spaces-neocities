const HOME = {
  title: 'The Atlas of Liminal Spaces',
  header: 'The Atlas of Liminal Spaces',
  about: `Welcome to
          <span id="title"><strong>The Atlas of Liminal Spaces</strong></span
          >, a collection of maps cataloguing those strange in between realities
          we find ourselves in. Site currently under construction.`
}

const PAGE_TITLLE = document.getElementById('title')
const PAGE_CONTENT = document.getElementById('main')
const PAGE_HEADER = document.getElementById('header')
const ABOUT_CONTAINER = document.getElementById('about')
const ABOUT_CONTENT = document.createElement('h2')

function buildPage(page) {
  PAGE_HEADER.textContent = HOME.title
  ABOUT_CONTENT.innerHTML = HOME.about
  ABOUT_CONTAINER.appendChild(ABOUT_CONTENT)
}

buildPage(HOME)
