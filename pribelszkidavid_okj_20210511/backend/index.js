const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); 


const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",  
    database: "fogado"
});


db.connect((err) => {
    if (err) {
        console.error("MySQL kapcsolat sikertelen: ", err);
        return;
    }
    console.log("MySQL kapcsolat sikeres.");
});


app.listen(3001, () => {
    console.log("A szerver a 3001 porton fut.");
});



// 1️⃣ Összes szoba listázása
app.get("/szobak", (req, res) => {
    const sql = "SELECT * FROM szobak";  // A megfelelő táblanév kell ide
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// 2️⃣ Egy adott szoba foglaltságának lekérése
app.get("/foglalasok/:szobaId", (req, res) => {
    const { szobaId } = req.params;
    const sql = "SELECT * FROM foglalasok WHERE szoba_id = ?";
    db.query(sql, [szobaId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// 3️⃣ Új foglalás létrehozása
app.post("/foglalas", (req, res) => {
    const { szoba_id, kezdet, vege, vendeg_nev } = req.body;
    const sql = "INSERT INTO foglalasok (szoba_id, kezdet, vege, vendeg_nev) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [szoba_id, kezdet, vege, vendeg_nev], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Foglalás sikeresen létrehozva", id: result.insertId });
    });
});
