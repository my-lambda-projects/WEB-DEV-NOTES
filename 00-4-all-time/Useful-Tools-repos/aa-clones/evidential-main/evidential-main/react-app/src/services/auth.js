export const authenticate = async() => {
    const response = await fetch('/api/auth',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
}

export const loginOrRecheckPassword = async (email, password, recheck=false) => {
  const endPoint = recheck ? 'recheck' : 'login'
  const response = await fetch(`/api/auth/${endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      recheck
    })
  });
  return await response.json();
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};


export const signUpOrEdit = async (firstName, lastName, email, password, confirmPassword, edit) => {
  const endPoint = edit ? 'edit' : 'signup';
  const response = await fetch(`/api/auth/${endPoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    }),
  });
  return await response.json();
}
