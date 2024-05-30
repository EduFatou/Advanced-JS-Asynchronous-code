
//1
const getAllBreeds = async () => {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await respuesta.json();
        const razas = Object.keys(data.message);
        return razas;
    } catch (error) {
        console.error(error);
    }
};

//2
const getRandomDog = async () => {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await respuesta.json();
        const imagen = data.message;
        return imagen;

    } catch (error) {
        console.error(error);
    }
};

//3
const getAllImagesByBreed = async () => {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breed/komondor/images');
        const data = await respuesta.json();
        const komondor = data.message;
        return komondor;
    } catch (error) {
        console.log(error);
    }
};

//4
const getAllImagesByBreed2 = async (breed) => {
    try {
        const respuesta = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await respuesta.json();
        const raza = data.message;
        return raza;
    } catch (error) {
        console.log(error);
    }
};

//5
const getGitHubUserProfile = async (username) => {
    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`);
        if (respuesta.ok) {
            const user = await respuesta.json();
            return user;
        } else {
            throw error;
        }
    } catch (error) {
        console.log(error);
    }
};

//6
const printGithubUserProfile = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    try {
        const respuesta = await fetch(url);
        if (respuesta.ok) {
            const data = await respuesta.json();
            return data;

        } else {
            throw 'algo fue mal.';
        }
    } catch (error) {
        throw 'la dirección no existe.';
    }
};
//const username1 = 'EduFatou';
printGithubUserProfile(username1)
    .then(({ avatar_url, name: nombre }) => {
        const name = document.createElement('h1');
        name.innerHTML = nombre;
        const img = document.createElement('img');
        img.src = avatar_url;
        const div1 = document.createElement('div');
        div1.append(img, name)
    })
    .catch((error) => { console.error(error) })

//7
const getAndPrintGitHubUserProfile = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    try {
        const respuesta = await fetch(url);
        if (respuesta.ok) {
            const perfil = await respuesta.json();
            const section = document.createElement('section');
            const img = document.createElement('img');
            img.src = perfil.avatar_url;
            img.alt = 'imagen de usuario';
            const nombre = document.createElement('h1');
            const nombreFinal = perfil.name;
            const repos = document.createElement('p');
            repos.innerHTML = `Public repos: ${perfil.public_repos}`
            section.append(img, h1, p)
            return `document.append(section)`
        } else {
            throw 'algo fue mal.';
        }
    } catch (error) {
        throw 'la dirección no existe.';
    }
}
getAndPrintGitHubUserProfile(username)
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.error(error) })

//8
const form = document.createElement('form');
const btn = document.createElement('button');
btn.value = 'buscar';
const input = document.createElement('input');
const section = document.createElement('section');
form.append(input, btn);
section.append(form);

btn.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const usuario = input.value;

    getAndPrintGitHubUserProfile(usuario)
    .then((respuesta) => {console.log(respuesta)})
    .catch((error => {console.error(error)}))
});

//9
const usernames = ['octocat', 'alenriquez96', 'alejandroreyesb'];
const realNames = ['The Octocat', 'Alberto Enríquez', 'Alejandro Reyes'];

const fetchGithubUsers = async (usernames) => {
    let arr = usernames.map(async (username) => {
        try {
            const respuesta = await fetch(`https://api.github.com/users/${username}`, {method: "GET"});
            if (respuesta.ok) {
                const data = await respuesta.json();
                return data;
            } else {
                throw respuesta;
            }
        } catch (error) {
            throw error.status;
        }
    })
    let result = await Promise.all(arr);
    console.log(result);
    result.forEach((user) => {
        console.log(user.name, user.html_url);
    })
    return result;
};
fetchGithubUsers(usernames);