const skills = [
    {id: 1234, skill: 'JavaScript', desc: 'Code that handles things.'},
    {id: 1235, skill: 'CSS', desc: 'Code that shows things.'},
    {id: 1236, skill: 'HTML', desc: 'Code that displayes things.'}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}