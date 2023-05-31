const emailInputDOM = document.querySelector('.email-input')
const formDOM = document.querySelector('.form')
const usernameInputDOM = document.querySelector('.username-input')
const delte = document.querySelector('.contact-form')
const passwordInputDOM = document.querySelector('.password-input')
const mismatchalertDOM = document.querySelector('.mismatch-alert')
const formAlertDOM = document.querySelector('.form-alert')
const passwordInputDOM2 = document.querySelector('.password-input2')
const resultDOM = document.querySelector('.result')
const btnDOM = document.querySelector('#data')
const tokenDOM = document.querySelector('.token')

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const username = usernameInputDOM.value
  const password2 = passwordInputDOM2.value
  const password = passwordInputDOM.value
  const email = emailInputDOM.value
  var list = [username, email, password]
  try {
    hjbhjnm = 0;
    if (password.length >= 5) {
      mismatchalertDOM.style.display = "none"

      if (!password || !username || !email) {
        setTimeout(() => {
          mismatchalertDOM.style.display = "block"
          mismatchalertDOM.innerHTML = "All fields are REQUIRED"
        }, 500);
      }
      else if (password == password2) {
        const { data } = await axios.post('/api/v1/register', { username, password, email })
        if (data.msg) {
          setTimeout(() => {
            mismatchalertDOM.style.display = "block"
            mismatchalertDOM.innerHTML = data.msg
          }, 500);
        }
        setTimeout(() => {
          mismatchalertDOM.style.display = "none"
        }, 3000);
        if (data.Error) {
          if (data.Error == undefined) { }
          else {
            setTimeout(() => {
              mismatchalertDOM.style.display = "block"
              mismatchalertDOM.innerHTML = data.Error
            }, 500);
          }
        }
      }
      else {
        mismatchalertDOM.style.display = "block"
        setTimeout(() => {
          mismatchalertDOM.style.display = "none"
        }, 3000);
      }
      mismatchalertDOM.style.display = "none"
    }
    else {
      mismatchalertDOM.innerHTML = "Password Length should be more than 5"
      mismatchalertDOM.style.display = "block"
      setTimeout(() => {
        mismatchalertDOM.style.display = "none"
      }, 3000);
    }
  } catch (error) {
    console.log("An Error occurred--")
    console.log(error)
    const { data } = await axios.post('/api/v1/register', { username, email, password })
    setTimeout(() => {
      mismatchalertDOM.style.display = "block"
      mismatchalertDOM.innerHTML = data.Error

    }, 500);
    setTimeout(() => {
      formAlertDOM.style.display = 'block'
      mismatchalertDOM.textContent = error.response.data.msg
    }, 3000);
    localStorage.removeItem('token')
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'no token present'
    tokenDOM.classList.remove('text-success')
    formAlertDOM.style.display = 'none'
  }
}
)


const password = passwordInputDOM.value