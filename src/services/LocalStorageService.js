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
        localStorage.setItem('userId', token);
    }

    function getUser() {
        try {
            return localStorage.getItem('userId');
        }catch (e){
            console.log(e);
        }

    }
    function clearUser() {
        localStorage.removeItem('userId');
    }
    return {
        getService: getService,
        setUser: setUser,
        getUser: getUser,
        clearUser: clearUser
    }
})();
export default LocalStorageService;
