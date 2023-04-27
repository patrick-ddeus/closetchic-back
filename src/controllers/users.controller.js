import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"
import { database } from '../database/connect.js';
import dotenv from "dotenv"

dotenv.config()

export async function signUp(req, res) {
    const { name, email, password } = req.body
    const hash = bcrypt.hashSync(password, 10)

    try {
        const user = await database.collection("users").findOne({ email })
        if (user) return res.status(409).json({message: "Usuario ja existe"})

        await database.collection("users").insertOne({ name, email, password: hash })
        res.sendStatus(201)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body

    try {
        const user = await database.collection("users").findOne({ email })
        if (!user) return res.status(404).json({message: "E-mail nao encontrado"})

        const correctPassword = bcrypt.compareSync(password, user.password)
        if (!correctPassword) return res.status(401).json({message: "Senha incorreta"})

        const chaveSecreta = process.env.SECRET_KEY
        const dados = {userId: user._id}
        const token = jwt.sign(dados, chaveSecreta)

        await database.collection("sessions").insertOne({ token, userId: user._id })
        const object = {name: user.name, token: token}
        res.status(200).json(object)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}