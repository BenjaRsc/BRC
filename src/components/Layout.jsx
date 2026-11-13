
export default function Layout(props) {
    const { children } = props
    return (
        <>
            <header>
                <div class="nes-container">
                    <h2>Benjamín Rojas Campaña: Estudiante de Ingeniería Informática en Busca de Práctica</h2> 
                </div>
            </header>

            <main>
                { children }
            </main>

            <footer>
                <div className="footer-container">
                    <a href="https://github.com/BenjaRsc" target="_blank">
                        <i class="nes-icon github is-large"></i>
                    </a>

                    <a href="https://linkedin.com/in/benjaminrojasc" target="_blank">
                        <i class="nes-icon linkedin is-large"></i>
                    </a>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brojasc@usm.cl&su=[Práctica]"
                     target="_blank">
                        <i class="nes-icon gmail is-large"></i>
                    </a>
                </div>

            </footer>
        </>
    )
}
