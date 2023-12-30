import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, lastName, message } = req.body;

    const transporter = nodemailer.createTransport({
      // Configuração do serviço de e-mail (por exemplo, Gmail)
      service: 'gmail',
      auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha',
      },
    });

    const mailOptions = {
      from: 'seuemail@gmail.com',
      to: 'emaildedestino@example.com',
      subject: 'Nova mensagem do formulário de contato',
      text: `Nome: ${name}\nSobrenome: ${lastName}\nE-mail: ${email}\nMensagem: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar e-mail.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido.' });
  }
}
