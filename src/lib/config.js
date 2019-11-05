class AppConfig {
    static getConfig(config) {
        return window.ENV[config];
    }
}

export default AppConfig;