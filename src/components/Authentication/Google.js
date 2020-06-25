import React, { setState } from 'react';
const Google = (props) => {
  const onSubmit = (e) => {
    props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        return props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
        });
      })
      .catch((error) => {
        return error;
      });
    e.preventDefault();
  };

  return (
    <div>
      <form onClick={onSubmit}>
        <button type='submit'>Sign In with Google</button>
      </form>
    </div>
  );
};

export default Google;
