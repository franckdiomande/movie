// caddy

module.exports = {

    questions: [
        {
            message: "Application port",
            name: "port",
            default: "2015",
            validator: (value)=>{
                if(Skyflow.isPortReachable(value)){
                    return "This port is not available."
                }
                Skyflow.addDockerPort(value);
                return true
            }
        },
    ],
};
