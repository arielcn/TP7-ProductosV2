const Contacto = () => {
    return (
        <div class="container py-4">

            <form id="contactForm">

                <div class="mb-3">
                    <label class="form-label" for="name">Nombre</label>
                    <input class="form-control" id="name" type="text" placeholder="Tu nombre" required/>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="emailAddress">Email</label>
                    <input class="form-control" id="emailAddress" type="email" placeholder="Tu Email" required />
                </div>

                <div class="mb-3">
                    <label class="form-label" for="message">Mensaje</label>
                    <textarea class="form-control" id="message" type="text" placeholder="Escribe tu mensaje aquí" required></textarea>
                </div>

                <div class="d-grid">
                    <button class="btn btn-warning btn-lg" type="submit">Enviar</button>
                </div>

            </form>
        </div>
    );
};

export default Contacto;