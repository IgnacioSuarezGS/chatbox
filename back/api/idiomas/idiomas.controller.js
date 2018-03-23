var languages = [
    {
        language: "Español",
        code: "es"
    },
    {
        language: "Inglés",
        code: "en"
    },
    {
        language: "Alemán",
        code: "de"
    },
    {
        language: "Francés",
        code: "fr"
    }
]

function getAllLanguages(req, res){
    res.json(languages);
}