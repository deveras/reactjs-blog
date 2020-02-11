import React from 'react';

import './ContactForm.scss';

function ContactForm () {
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      email: '',
      phone: '',
      message: '',
      nameError: 'required',
      emailError: 'required',
      phoneError: '',
      messageError: 'required',
      formSubmited: false
    }
  );

  // @TODO once the backend is complete, update catch for errors
  function handleSubmit (event) {
    event.preventDefault();

    if (isFormValid()) {
      fetch('/api/contactForm', {
        method: 'POST',
        body: new FormData(event.target)
      })
        .then(setUserInput({ formSubmited: true }))
        .catch(console.log('DONT_YOU_FORGET_ABOUT_ME'));
    }
  }

  function handleChange (event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (['name', 'email', 'phone', 'message'].includes(fieldName)) {
      setUserInput({ [fieldName]: fieldValue });
      validateField(fieldName, fieldValue);
    }
  }

  function validateField (fieldName, value) {
    switch (fieldName) {
      case 'name':
        processNameValueAndErrorMessage(value);
        break;
      case 'email':
        processEmailValueAndErrorMessage(value);
        break;
      case 'phone':
        processPhoneValueAndErrorMessage(value);
        break;
      case 'message':
        processMessageValueAndErrorMessage(value);
        break;
      default:
        break;
    }
    return false;
  }

  function processNameValueAndErrorMessage (value) {
    if (!value) {
      setUserInput({ nameError: 'required' });
    } else if (!/^[a-zA-Z\ ]+$/.test(value)) {
      setUserInput({ nameError: 'Insert only Letters' });
    } else if (value.length < 3) {
      setUserInput({ nameError: 'Name to short' });
    } else {
      setUserInput({ nameError: '' });
    }
    setUserInput({ name: value });
  }

  function processEmailValueAndErrorMessage (value) {
    if (!value) {
      setUserInput({ emailError: 'required' });
    } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value)) {
      setUserInput({ emailError: 'Invalid email' });
    } else {
      setUserInput({ emailError: '' });
    }
    setUserInput({ email: value });
  }

  function processPhoneValueAndErrorMessage (value) {
    if (!value) {
      setUserInput({ phoneError: ' ' });
    } else if (!/^[0-9]*$/i.test(value)) {
      setUserInput({ phoneError: 'Only Numbers' });
    } else {
      setUserInput({ phoneError: '' });
    }
    setUserInput({ phone: value });
  }

  function processMessageValueAndErrorMessage (value) {
    if (!value) {
      setUserInput({ messageError: 'required' });
    } else if (value.length < 15) {
      setUserInput({ messageError: 'To short' });
    } else {
      setUserInput({ messageError: '' });
    }
    setUserInput({ message: value });
  }

  function isFormValid () {
    if (
      !userInput.nameError &&
      !userInput.emailError &&
      !userInput.phoneError &&
      !userInput.messageError
    ) {
      return true;
    }
    return false;
  }

  return (
    <React.StrictMode>
      {!userInput.formSubmited ? (
        <form action="#" method="post" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <p>
            {userInput.nameError}
            <span>&nbsp;</span>
          </p>

          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <p>
            {userInput.emailError}
            <span>&nbsp;</span>
          </p>

          <label htmlFor="phone">Your phone:</label>
          <input
            type="phone"
            name="phone"
            value={userInput.phone}
            onChange={handleChange}
            autoComplete="off"
          />
          <p>
            {userInput.phoneError}
            <span>&nbsp;</span>
          </p>

          <label htmlFor="message">Comments:</label>
          <textarea
            name="message"
            value="..."
            value={userInput.message}
            onChange={handleChange}
            required
            autoComplete="off"
          ></textarea>
          <p>
            {userInput.messageError}
            <span>&nbsp;</span>
          </p>

          {/* @TODO: form will not work until csrf will be in place */}
          <input type="hidden" name="csrf" value="DONT_YOU_FORGET_ABOUT_ME" />

          <button>Contact Me</button>
        </form>
      ) : (
        <form id="submitted">
          <p>Your message was received</p>
          <p>
            I’ll reply as soon as I can... unless you sent a request for
            troubleshooting, tech support or information or... how to hack your
            partner’s Facebook account.
            <br />
          </p>
        </form>
      )}
    </React.StrictMode>
  );
}

export default ContactForm;
