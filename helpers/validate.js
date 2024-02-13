const validator = require("validator")

const validate = (params) => {
    const errors = {};

    const name = !validator.isEmpty(params.name) &&
        validator.isLength(params.name, { min: 3, max: undefined }) &&
        validator.isAlpha(params.name, "es-ES");

    const nick = !validator.isEmpty(params.nick) &&
        validator.isLength(params.nick, { min: 2, max: 60 });

    const email = !validator.isEmpty(params.email) &&
        validator.isEmail(params.email);

    const password = !validator.isEmpty(params.password);

    if (params.surname) {
        const surname = !validator.isEmpty(params.surname) &&
            validator.isLength(params.surname, { min: 3, max: undefined }) &&
            validator.isAlpha(params.surname, "es-ES");

        if (!surname) {
            errors.surname = "Apellido incorrecto";
        }
    }

    if (!name || !nick || !email || !password) {
        errors.validation = "No se ha superado la validación";
    }

    return errors;
};

module.exports = validate;
