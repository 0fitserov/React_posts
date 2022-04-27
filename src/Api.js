const config = {
    path: "https://api.react-learning.ru",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU1YTVmNTk0N2M3MjkyZDhjMjA0ZTQiLCJpYXQiOjE2NDk3ODAyMTYsImV4cCI6MTY4MTMxNjIxNn0.1GjB9abnYhAUj4ljGNhGJyk9yXq0mnTGmCi3_MFJV1Y"
}


const responseHandler = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class Api {
    constructor({ path, token }) {
        this.path = path;
        this.token = token;
    }

    getUser() {
        return fetch(`${this.path}/users/me`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);

    }

    getPosts() {
        return fetch(`${this.path}/posts`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);

    }

    getSinglePost(id) {
        return fetch(`${this.path}/posts/${id}`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);

    }

    savePost(title, text, image, tags) {
        return fetch( `${this.path}/posts`, {
            headers: {
                authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({title, text, image, tags})

        }).then(responseHandler)
    }

    updatePost(title, text, image, tags, postId) {
        return fetch( `${this.path}/posts/${postId}`, {
            headers: {
                authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({title, text, image, tags})

        }).then(responseHandler)
    }

    saveUserAvatar(avatar) {
        return fetch( `${this.path}/users/me/avatar`, {
            headers: {
                authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({avatar})

        }).then(responseHandler)
    }

    saveUserInfo(name, about) {
        return fetch( `${this.path}/users/me`, {
            headers: {
                authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({about, name})

        }).then(responseHandler)
    }


}

const api = new Api(config);

export default api;