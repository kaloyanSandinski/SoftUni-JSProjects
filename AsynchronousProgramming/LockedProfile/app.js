async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;

    const response = await fetch(url);
    const data = await response.json();

    let mainSection = document.querySelector('#main');
    let elementToClone = document.querySelector('#main div');
    Object.keys(data).forEach(element => {
        let clonedProfile = elementToClone.cloneNode(true);
        let profile = createUserProfile(data[element], clonedProfile);
        mainSection.appendChild(profile);
    });
    elementToClone.remove();
}

function createUserProfile(user, clonedProfile) {
    let inputs = clonedProfile.querySelectorAll('input');
    inputs[2].value = user.username;
    inputs[3].value = user.email;
    inputs[4].value = user.age;

    inputs[0].name = `${user._id}Locked`;
    inputs[1].name = `${user._id}Locked`;
    inputs[2].name = `${user._id}Username`;
    inputs[3].name = `${user._id}Email`;
    inputs[4].name = `${user._id}Age`;
    clonedProfile.querySelector('div').id = `${user._id}HiddenFields`;
    clonedProfile.querySelector('div').style.display = 'none';
    clonedProfile.querySelector('button').addEventListener('click', showMoreInfo);
    return clonedProfile;
};

function showMoreInfo(e) {
    let inputs = e.target.parentNode.querySelectorAll('input');
    if (inputs[1].checked == true) {
        e.target.parentNode.querySelector('div').style.display = 'inline';
        inputs[0].addEventListener('click', () => { e.target.parentNode.querySelector('div').style.display = 'none'; })
    }
};