export class Login {
    email: string;
    password: string;
    device_name: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
        this.device_name = 'asd';
    }
}