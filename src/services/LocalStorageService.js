const LocalStorageService = (function () {
    var _service;

    function getService() {
        if (!_service) {
            _service = this;
            return _service
        }
        return _service
    }
    function setUser(token) {
        localStorage.setItem('userToken', token);
    }

    function getUser() {
        try {
            return localStorage.getItem('userToken');
        }catch (e){
            console.log(e);
        }

    }
    function setUsername(username) {
        localStorage.setItem('username', username);
    }

    function getUsername() {
        try {
            return localStorage.getItem('username');
        }catch (e){
            console.log(e);
        }

    }
    function clearUser() {
        localStorage.removeItem('userToken');
        localStorage.removeItem('username');
    }
    return {
        getService: getService,
        setUser: setUser,
        getUser: getUser,
        setUsername: setUsername,
        getUsername: getUsername,
        clearUser: clearUser
    }
})();
export default LocalStorageService;
