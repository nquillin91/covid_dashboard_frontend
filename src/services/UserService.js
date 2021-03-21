const userService = {
    getUserProfile: function() {
        const requestOptions = { 
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') }
        };

        return fetch(`https://covid-dashboard-backend-se430.herokuapp.com/users/user/profile`, requestOptions).then(response => {
            return response.text();
        });
    },
    updateUserProfile: function(userProfile) {
        const requestOptions = { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
            body: JSON.stringify(userProfile)
        };

        return fetch(`https://covid-dashboard-backend-se430.herokuapp.com/users/user/profile`, requestOptions);
    }
}

export default userService;