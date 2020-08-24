import Secure from "secure-ls";

const s = new Secure();

const secure = {
    set: (key, value) => {
        return new Promise((resolve) => {
            s.set(key, value);

            resolve();
        });
    },
    get: (key) => {
        return new Promise((resolve) => {
            const value =
                s.get(key)
                || undefined // To fit standard
            ;

            resolve(value);
        });
    },
    delete: (key) => {
        return new Promise((resolve) => {
            s.remove(key);

            resolve();
        });
    },
};

export default secure;