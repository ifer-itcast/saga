export default {
    login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0) {
                    resolve(username + 'xxx');
                } else {
                    reject('login error');
                }
            }, 1000);
        });
    }
}