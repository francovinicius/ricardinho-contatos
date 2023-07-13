import styles from './Links.css'

export default function Links() {
    return (
        <section className="d-flex flex-column justfy-content-center align-items-center link-container">
            <a href="https://www.youtube.com/watch?v=NSAEphKyS-g" target='blank' className="nav-link btn btn-lg btn-link">Ouça “Como Na Primeira Vez”</a>
            <a href="https://api.whatsapp.com/send?phone=556281548834" target='blank' className="nav-link btn btn-lg btn-link">Contato</a>
            <a href="https://www.youtube.com/channel/UCvg1qzQc8yMAV5DMnhu9GwQ" target='blank' className="nav-link btn btn-lg btn-link">Youtube</a>
            <a href="https://www.instagram.com/ricardinhoqueirozz/" target='blank' className="nav-link btn btn-lg btn-link">Instagram</a>
        </section>
    )
}