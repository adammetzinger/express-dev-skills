const Skill = require('../models/skills');

module.exports = {
    index,
    show
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function index(req, res) {
    res.render('todos/index', {
        skills: Skill.getAll()
    });
}