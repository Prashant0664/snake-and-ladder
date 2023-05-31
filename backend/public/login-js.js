const emailInputDOM = document.querySelector('.email-input')
const formDOM = document.querySelector('.form')
const delte = document.querySelector('.contact-form')
const passwordInputDOM = document.querySelector('.password-input')
const mismatchalertDOM = document.querySelector('.mismatch-alert')
const formAlertDOM = document.querySelector('.form-alert')
const resultDOM = document.querySelector('.result')
const btnDOM = document.querySelector('#data')
const tokenDOM = document.querySelector('.token')

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const password = passwordInputDOM.value
    const email = emailInputDOM.value
    try {
        hjbhjnm = 0;
        if (password.length >= 5) {
            mismatchalertDOM.style.display = "none"

            if (!password || !email) {
                setTimeout(() => {
                    mismatchalertDOM.style.display = "block"
                    mismatchalertDOM.innerHTML = "All fields are REQUIRED"
                }, 500);
                setTimeout(() => {
                    mismatchalertDOM.style.display = "none"
                }, 3000);
            }
            else if (password) {
                const { data } = await axios.post('/api/v1/login', { password, email })
                if (data.token) {
                    var starts = setTimeout(() => {
                        mismatchalertDOM.style.display = "block"
                        var ii = 10;
                        mismatchalertDOM.innerHTML = `Your id is :${data.id} <br> You will be redirected to Main page in ${ii}s`
                        var inter = setInterval(() => {
                            mismatchalertDOM.style.display = "block"
                            mismatchalertDOM.innerHTML = `Your id is :${data.id} <br> You will be redirected to Main page in ${ii}s`
                            ii = ii - 1;
                            if (ii < 0) {
                                clearInterval(inter);
                                window.location.href = `./api/v1/login/${data.id}`;
                            }
                        }, 1000)
                    }, 500)
                    starts;
                }
                if (data.err) {
                    if (data.err == undefined) { }
                    else {
                        setTimeout(() => {
                            mismatchalertDOM.style.display = "block"
                            mismatchalertDOM.innerHTML = data.err
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
        const { data } = await axios.post('/api/v1/login', { email, password })
        // console.log(error.response)
        setTimeout(() => {
            mismatchalertDOM.style.display = "block"
            mismatchalertDOM.innerHTML = data.Error

        }, 500);
        setTimeout(() => {
            formAlertDOM.style.display = 'block'
            mismatchalertDOM.innerHTML = error.response.data.msg
        }, 3000);
        localStorage.removeItem('token')
        resultDOM.innerHTML = ''
        tokenDOM.textContent = 'no token present'
        tokenDOM.classList.remove('text-success')
        formAlertDOM.style.display = 'none'
    }
}
)
