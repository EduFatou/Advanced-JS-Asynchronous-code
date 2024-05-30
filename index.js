
//1
const getAllBreeds = async()=> {
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
const getRandomDog = async()=> {
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
const getAllImagesByBreed = async()=> {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breed/komondor/images');
        const data = await respuesta.json();
        const komondor = data.message;
        return komondor;
    }catch (error){
        console.log(error);
    }
};

//4
const getAllImagesByBreed2 = async(breed)=> {
    try {
        const respuesta = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await respuesta.json();
        const raza = data.message;
        return raza;
    } catch (error){
        console.log(error);
    }
};

//5
const getGitHubUserProfile = async(username)=> {
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
const printGithubUserProfile = async(username)=> {
    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`);
        if (respuesta.ok) {
            const data = await respuesta.json();
            //no doy para más

        } else {
            throw error;
        }
    } catch (error){
        console.log(error);
    }
};

//7
getAndPrintGitHubUserProfile(username)