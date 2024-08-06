export default class ValidateService {
  isCorrectFullName(text) {
    if (!text) {
      return "Please enter invalid name.";
    } else {
      if (text.length < 6) {
        return "Full name must be have 6 characters long.";
      }
      if (!(/\s/).test(text)) {
        return "Please enter a full name include whitespace. ";
      }
      return "";
    }
  }

  isCorrectPassword(text) {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(text)) {
      return 'Password must be strong: at least 8 characters, including uppercase, lowercase, digits, and special characters.';
    }
    return "";
  }


  checkEmail(value) {
    if (!value) {
      return 'Please enter a valid email address.';
    } else {
      const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!value.match(mailformat)) {
        return 'Email not correctly formatted.';
      }
      return "";
    }
  }
}

