import styles from './Oquefaco.module.css'
function OqueFaco() {
    return (
        <div className={styles.container}>
            <h1 id={styles.title}>O que faço</h1>
            <div className={styles.contentText}>
                <h1 id={styles.title1}>Psicoterapia</h1>
                <p id={styles.text}>A psicoterapia é destinada e orientada para todas as pessoas que desejam  saúde mental, autoconhecimento, equilíbrio da sua vida, para pessoas que desejam encontrar um propósito ou sentido de vida.</p>
                <p id={styles.text}>Na terapia Cognitivo Comportamental, o terapeuta busca, de uma variedade de formas, produzir a mudança cognitiva, ou seja, mudanças no pensamento e no sistema de crenças da pessoa, visando promover mudança, evolução emocional e comportamental duradoura, melhorando a qualidade de vida.</p>
            </div>
            <div>
                <h1 id={styles.title1}>Psicoterapia Individual</h1>
                <h1 id={styles.title}>Modalidades de atendimento</h1>

            </div>
        </div>
    )
}


export default OqueFaco;