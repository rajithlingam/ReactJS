export const checkValidData = (name, email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-ZÀ-ÿ' -]+$/.test(name);
  
    if (!isEmailValid) return "Email ID is not valid.";
    if (!isPasswordValid) return "Password is not valid.";
    if (name && !isNameValid) return "Please enter a valid name.";
    
    return null;
  };
  