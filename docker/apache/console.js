let PORT = "80";

// apache

module.exports = {

    questions: [
        {
            message: "Application port",
            name: "port",
            default: PORT,
            validator: (value) => {
                if (Skyflow.isPortReachable(value)) {
                    return "This port is not available."
                }
                PORT = value;
                Skyflow.addDockerPort(value);
                return true
            }
        },
    ],

};
