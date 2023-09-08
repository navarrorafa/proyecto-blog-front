
const todasNews = async (req, res) => {
    try {
        const resp = await fetch("http://localhost:3000/api/v1/news");

        if (resp.ok) {
            const noticias = await resp.json();

            res.render("index.ejs", {
                title: "NEW SESION",
                noticias: noticias.data
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    res.render("login.ejs"), {
        titulo: "login"
    }
}

const logear = async (req, res) => {

    const { email, password } = req.body
    const body = { email, password }

    try {
        console.log('Pedindo ao servidor');
        const resp = await fetch("http://localhost:3000/api/v1/users/login", {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });



        if (resp.ok) {
            //    
            const user = await resp.json();
            // const cookies = resp.headers.get('Set-Cookie');
            // console.log('Cookies:', cookies);

            if (user.role == "editor") { 
                res.render('../views/editor/indexEditor.ejs', {})
            } else {
                res.render('../views/admin/indexAdmin.ejs', {})
            }

        } else {
            console.log('Erro na resposta:', resp.status);
            res.status(resp.status).send("error de autenticar")

        }

    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    todasNews,
    login,
    logear
}