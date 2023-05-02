import nodemailer from "nodemailer";
import "dotenv/config";
import dayjs from "dayjs";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use SSL
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

export const sendEmail = (to, msg) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject: "Compra realizada na ClosetChic",
        html: msg,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email enviado" + info.response);
        }
    });

};

export const payOrderEmailTemplate = (order) => {
    return `
    <div style="max-width:550px; margin:0 auto;">
        <div style="display:flex; justify-content:center; align-items:center; width:100%;" align="center">
            <img src="https://cdn.discordapp.com/attachments/1100893197800062986/1102791586510802974/ClosetChic.png">
        </div>
        <hr/>
        <h1 style="color: #007bff;">Obrigado por comprar conosco</h1>
        <p style="font-size: 19px; font-weight:700; color:#4f4f4f;">Oi ${order.shippingAddress.fullName},</p>
        <p style="font-size: 16px;">Terminamos de processar o seu pedido.</p>
        <h2 style="font-size: 20px;">[Pedido ${order._id}] (${dayjs(order.paidAt).format('DD/MM/YYYY')})</h2>
        <table style="border-collapse: collapse; width: 100%;">
        <thead>
            <tr style="background-color:#EEEEEE; color:#515151; text-transform:uppercase;">
            <th style="border: 1px solid #ddd; padding: 10px;"><strong>Produto</strong></th>
            <th style="border: 1px solid #ddd; padding: 10px;"><strong>Quantidade</strong></th>
            <th style="border: 1px solid #ddd; padding: 10px;" align="right"><strong>Preço</strong></th>
            </tr>
        </thead>
        <tbody>
            ${order.orderItems
            .map((item) => `
                <tr>
                <td style="border: 1px solid #ddd; padding: 10px;">${item.name}</td>
                <td style="border: 1px solid #ddd; padding: 10px;" align="center">${item.quantity}</td>
                <td style="border: 1px solid #ddd; padding: 10px;" align="right"> R$${item.price.toFixed(2)}</td>
                </tr>
            `).join('\n')}
        </tbody>
        <tfoot>
            <tr>
            <td colspan="2" style="border: 1px solid #ddd; padding: 10px;">Preço dos itens:</td>
            <td style="border: 1px solid #ddd; padding: 10px;" align="right"> R$${order.priceItems.toFixed(2)}</td>
            </tr>
            <tr>
            <td colspan="2" style="border: 1px solid #ddd; padding: 10px;">Preço da entrega:</td>
            <td style="border: 1px solid #ddd; padding: 10px;" align="right"> Grátis</td>
            </tr>
            <tr>
            <td colspan="2" style="border: 1px solid #ddd; padding: 10px;"><strong>Preço Total:</strong></td>
            <td style="border: 1px solid #ddd; padding: 10px;" align="right"><strong> R$${order.totalPrice.toFixed(2)}</strong></td>
            </tr>
            <tr>
            <td colspan="2" style="border: 1px solid #ddd; padding: 10px;">Método de Pagamento:</td>
            <td style="border: 1px solid #ddd; padding: 10px;" align="right">${order.paymentMethod}</td>
            </tr>
        </tfoot>
        </table>
        <h2 style="font-size: 20px;">Endereço de Entrega</h2>
        <p style="font-size: 16px;">
        ${order.shippingAddress.fullName},<br>
        ${order.shippingAddress.address.street},<br/>
        ${order.shippingAddress.address.district},<br/>
        ${order.shippingAddress.address.city},<br/>
        ${order.shippingAddress.postalCode}<br/>
        </p>
        <hr/>
        <p>
        Obrigado por Comprar conosco!.
        </p>
    </div>
    `;
};
