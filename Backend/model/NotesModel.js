import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Notes = db.define('notesdata', {
    judul: { type: Sequelize.STRING(80), allowNull: true }, // VARCHAR(80)
    isi: { type: Sequelize.TEXT, allowNull: true } // TEXT (unlimited)
}, {
    freezeTableName: true,
    createdAt: 'Tanggal_dibuat',
    updatedAt: 'Tanggal_diupdate'
});

export default Notes;

(async () => {
    await db.sync();
})();
