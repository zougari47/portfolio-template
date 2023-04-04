const contactForm = document.querySelector('#contact_form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const subjectInput = document.querySelector('#subject')
const messageInput = document.querySelector('#message')
const submitButton = document.querySelector('#send')
const thanksMessage = document.querySelector('.thanks')
const spinner = document.querySelector('.spinner-border')
const charCounter = document.querySelector('.valid-feedback')

const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const warningClass = 'is-invalid'
const successClass = 'is-valid'

// function to add OR remove classes
function setUpClasses(e, isValid) {
  const input = e.target

  if (isValid) {
    input.classList.add(successClass)
    input.classList.remove(warningClass)
  } else {
    input.classList.add(warningClass)
    input.classList.remove(successClass)
  }
}

nameInput.addEventListener('keyup', e => {
  setUpClasses(e, e.target.value.length > 1 ? true : false)
  checkAllInputs()
})

emailInput.addEventListener('keyup', e => {
  setUpClasses(e, e.target.value.match(emailPattern) ? true : false)
  checkAllInputs()
})

subjectInput.addEventListener('keyup', e => {
  setUpClasses(e, e.target.value.length > 2 ? true : false)
  checkAllInputs()
})

messageInput.addEventListener('keyup', e => {
  setUpClasses(e, e.target.value.split(' ').length > 5 ? true : false)
  checkAllInputs()
  charCounter.textContent = `${messageInput.value.length} / 400`
})

// submitButton.disabled = fal
function checkAllInputs() {
  submitButton.disabled =
    nameInput.value.length > 1 &&
    emailInput.value.match(emailPattern) &&
    subjectInput.value.length > 2 &&
    messageInput.value.split(' ').length > 5
      ? false
      : true
}

// Emailjs
import '@emailjs/browser/dist/email'
const EMAILJS_ID = import.meta.env.VITE_EMAILJS_ID
const CONTACT_SERVICE = import.meta.env.VITE_CONTACT_SERVICE
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const IP_API_KEY = import.meta.env.VITE_IP_API_KEY
const IP_API = `https://api.ipregistry.co/?key=${IP_API_KEY}`
const EMAIL_API = 'https://api.emailjs.com/api/v1.0/email/send'

async function sendEmail(e) {
  e.preventDefault()
  submitButton.style.display = 'none'
  spinner.style.display = 'inline-block'

  // Get client location
  let location
  await fetch(IP_API)
    .then(res => res.json())
    .then(
      payload =>
        (location = `${payload.location.country.flag.emoji} ${payload.location.city}, ${payload.location.latitude} ${payload.location.longitude}`)
    )

  // Set up emailjs
  var data = {
    service_id: CONTACT_SERVICE,
    template_id: TEMPLATE_ID,
    user_id: EMAILJS_ID,
    template_params: {
      location: String(location),
      name: nameInput.value,
      email: emailInput.value,
      subject: subjectInput.value,
      message: messageInput.value,
    },
  }

  // Send email
  await fetch(EMAIL_API, {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function () {
      spinner.style.display = 'none'
      thanksMessage.style.display = 'block'
      e.target.reset()
      ;[nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.classList.remove(successClass)
      })
    })
    .catch(function (err) {
      alert('Something went wrong!! Please try again.')
    })
}

contactForm.addEventListener('submit', sendEmail)

// clear form on load page
contactForm.reset()
