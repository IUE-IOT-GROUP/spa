export class Login {
    email: string;
    password: string;
    device_name: string;
    environment: string;

    constructor(email: string, password: string, environment: string) {
        this.email = email;
        this.password = password;
        this.device_name = 'asd';
        this.environment = environment;
    }
}
