import Notes from "../model/NotesModel.js";

//Function mengambil semua data notes dari db

export const getNotesdata = async(req, res)=>{
    try {
        const response = await Notes.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createNotesdata = async(req, res)=>{
    try {
        await Notes.create(req.body);
        res.status(201).json({msg: "Notes berhasil ditambah"});
    } catch (error) {
        console.log(error.message);
    }
}

// UPDATE
export const updateNotesdata = async (req, res) => {
    try {
        const inputData = req.body; // buat nyimpen input 
        const id = req.params.id; // buat nyimpen id

        await Notes.update(inputData, {
            where: {
                id: id
            }
        });
        res.status(200).json({
            msg: "Notes berhasil diupdate",
        });
    } catch (error) {
        console.log(error.message);
    }
};

// DELETE
export const deleteNotesdata = async (req, res) => {
    try {
        const id = req.params.id; // buat nyimpen id 
        await Notes.destroy({
            where: {
                id,
            },
        });
        res.status(200).json({
            message: "Notes berhasil dihapus",
        });
    } catch (error) {
        console.log(error.message);
    }
};


