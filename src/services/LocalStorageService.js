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
        return localStorage.getItem('userId');
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
