//const backendDomain = "http://localhost:8000"
//const backendDomain = process.env.REACT_APP_BACKEND_URL;
const backendDomain = import.meta.env.VITE_API_BASE_URL

const SummaryApi = {
    signUp : {
        url : `${backendDomain}/api/signup`,
        method : 'POST'
    },
    signIn : {
        url : `${backendDomain}/api/signin`,
        method : 'POST'
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : 'GET'
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
        method : 'GET'
    },
    allUsers : {
        url : `${backendDomain}/api/all-users`,
        method : 'GET'
    },
}

export default SummaryApi