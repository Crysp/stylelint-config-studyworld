module.exports = {
    processors: ["stylelint-processor-styled-components"],
    extends: [
        "stylelint-config-standard",
        "stylelint-config-styled-components"
    ],
    syntax: "scss",
    rules: {
        indentation: 4
    },
};
