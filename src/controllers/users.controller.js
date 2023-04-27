import bcrypt from "bcrypt";
import UserService from '../services/users.service.js';

export async function signUp(req, res) {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);

    try {
        const user = await UserService.fidnOneService({ email });

        if (user) {
            return res.status(409).json({ message: "Usuario ja existe" });
        };

        await UserService.insertOneService({ name, email, password: hash });
        res.sendStatus(201);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await UserService.fidnOneService({ email });

        if (!user) {
            return res.status(404).json({ message: "E-mail nao encontrado" });
        };

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).json({ message: "Senha incorreta" });
        };

        const dados = { userId: user._id };
        const token = UserService.generateToken(dados);

        res.status(200).json({
            token,
            name: user.name
        });
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}