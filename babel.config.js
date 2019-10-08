module.exports = {
    "env": {
        "test": {
            "plugins": ["rewire", "inline-json-import", "transform-es2015-modules-commonjs"],
            "presets": ["jest"]
        }
    }
}
