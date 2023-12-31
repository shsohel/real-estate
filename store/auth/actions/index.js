import axios from 'axios';
import { notify } from '../../../utils/custom/Notification';
import { GET_AUTH_USER } from "../action-types";
// axios.defaults.withCredentials = true;

export const bindAuthUser = (user) => (dispatch) => {
  dispatch({
    type: GET_AUTH_USER,
    authUser: user,
  });
};

export const logout = (handleCallback) => async (dispatch) => {
  const apiEndPoint = `/api/auth/logout`;
  await axios
    .get(apiEndPoint)
    .then((response) => {
      if (response.status === 200) {
        // notify("success", `You are logout  successfully`);
        dispatch(bindAuthUser(null));
        handleCallback();
      }
    })
    .catch((error) => {
      // if (response.status === 400) {
      //   notify('error', `${response.data.error}`);
      // }
      console.log(error);
    });
  // .catch(({ response }) => {
  //   if (response.status === 400) {
  //     notify('error', `${response.data.error}`);
  //   }
  // });
};

export const getMe = () => (dispatch) => {
  const apiEndPoint = `/api/auth`;
  axios
    .get(apiEndPoint)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_AUTH_USER,
          authUser: response.data.data,
        });
      }
    })
    .catch(({ response }) => {
      dispatch(logout());
      if (response.status === 400) {
        // notify('error', `${response?.data?.error}`);
      }
    });
};

export const getAuthUser = (callbackFun) => (dispatch) => {
  const apiEndPoint = `/api/auth`;
  axios
    .get(apiEndPoint)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_AUTH_USER,
          authUser: response.data.data,
        });
      }
    })
    .catch(({ response }) => {
      callbackFun();
      dispatch(logout());
      console.log(response);
    });
};

export const getMeAfterLogin = (callbackFun) => (dispatch) => {
  const apiEndPoint = `/api/auth`;
  axios
    .get(apiEndPoint)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_AUTH_USER,
          authUser: response.data.data,
        });
        callbackFun(true);
      }
    })
    .catch(({ response }) => {
      callbackFun(false);
      dispatch(logout());
      if (response.status === 400) {
        // notify('error', `${response?.data?.error}`);
      }
    });
};

export const login =
  ({ password, email }, callbackFun) =>
  async (dispatch) => {
    const apiEndPoint = `/api/auth`;
    await axios
      .post(
        apiEndPoint,
        { password, email }
        // { withCredentials: true }
      )

      .then((response) => {
        if (response.status === 200) {
          dispatch(getMeAfterLogin(callbackFun));
          notify('success', `You are logged in successfully`);
        }
      })
      .catch(({ response }) => {
        callbackFun(false);
        if (response.status === 400) {
          notify('error', `${response.data.error}`);
        }
      });
  };
export const forgotPassword = (email, responseBack) => async (dispatch) => {
  const apiEndPoint = `/api/auth/forgot-password`;
  await axios
    .post(apiEndPoint, email)
    .then((response) => {
      if (response.status === 200) {
        responseBack();
        notify('success', `Please check your mail box!`);
      }
    })
    .catch(({ response }) => {
      responseBack();
      if (response.status === 400) {
        notify('error', `${response.data.error}`);
      }
    });
};
export const resetPassword = (obj, responseBack) => async (dispatch) => {
  const apiEndPoint = `/api/auth/forgot-password`;
  await axios
    .put(apiEndPoint, obj)
    .then((response) => {
      if (response.status === 200) {
        notify('success', `Your password has been reset successfully!`);
        responseBack(true);
      }
    })
    .catch(({ response }) => {
      if (response.status === 400) {
        notify('error', `${response.data.error}`);
      }
      responseBack(false);
    });
};


export const register = (obj, responseBack) => async (dispatch) => {
  const apiEndPoint = `/api/auth/registration`;
  await axios
    .post(apiEndPoint, obj)
    .then((response) => {
      if (response.status === 200) {
        responseBack(true);
        notify('success', `${response.data.message}`);
      }
    })
    .catch(({ response }) => {
      responseBack(false);
      if (response.status === 400) {
        notify('error', `${response.data.error}`);
      }
    });
};

export const confirmedUser = (token, responseBack) => async (dispatch) => {
  const apiEndPoint = `/api/auth/confirm-user`;
  await axios
    .post(apiEndPoint, { token })
    .then((response) => {
      if (response.status === 200) {
        notify('success', `Great!! You can login now.`);
        responseBack(true);
      }
    })
    .catch(({ response }) => {
      if (response.status === 400) {
        notify('error', `${response.data.error}`);
      }
      responseBack(false);
    });
};
