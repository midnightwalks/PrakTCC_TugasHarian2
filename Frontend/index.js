// Ngambil elemen form
const formulir = document.querySelector("form");

// Bikin trigger event submit pada elemen form
formulir.addEventListener("submit", (e) => {
  e.preventDefault();

  // Ngambil elemen input
  const elemen_judul = document.querySelector("#judul");
  const elemen_isi = document.querySelector("#isi");

  // Ngambil value dari elemen input
  const judul = elemen_judul.value;
  const isi = elemen_isi.value;

  const id = elemen_judul.dataset.id || ""; // <- Khusus edit

  // Ngecek apakah harus POST atau PUT
  if (id === "") {
    // Tambah note
    axios
      .post("http://localhost:5000/tambah-notes", { judul, isi })
      .then(() => {
        // Bersihin formnya
        elemen_judul.value = "";
        elemen_isi.value = "";

        // Refresh data
        getNotesdata();
      })
      .catch((error) => console.log(error.message));
  } else {
    axios
      .put(`http://localhost:5000/edit-notes/${id}`, { judul, isi })
      .then(() => {
        // Bersihin formnya
        elemen_judul.dataset.id = "";
        elemen_judul.value = "";
        elemen_isi.value = "";

        // Refresh data
        getNotesdata();
      })
      .catch((error) => console.log(error));
  }
});

// GET Notes
async function getNotesdata() {
  try {
    const { data } = await axios.get("http://localhost:5000/notesdata");
    const table = document.querySelector("#table-notes");
    let tampilan = "";
    let no = 1;

    for (const note of data) {
      tampilan += tampilkanNote(no, note);
      no++;
    }
    table.innerHTML = tampilan;
    deleteNotesdata();
    updateNotesdata();
  } catch (error) {
    console.log(error.message);
  }
}

function tampilkanNote(no, note) {
  return `
    <tr>
      <td>${no}</td>
      <td class="judul">${note.judul}</td>
      <td class="isi">${note.isi}</td>
      <td class="tanggal_dibuat">${note.Tanggal_dibuat}</td>
      <td class="tanggal_update">${note.Tanggal_diupdate}</td>
      <td><button data-id="${note.id}" class='btn-edit'>Edit</button></td>
      <td><button data-id="${note.id}" class='btn-hapus'>Hapus</button></td>
    </tr>
  `;
}

function deleteNotesdata() {
  const kumpulan_tombol_hapus = document.querySelectorAll(".btn-hapus");

  kumpulan_tombol_hapus.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      axios
        .delete(`http://localhost:5000/delete-notes/${id}`)
        .then(() => getNotesdata())
        .catch((error) => console.log(error));
    });
  });
}

function updateNotesdata() {
  const kumpulan_tombol_edit = document.querySelectorAll(".btn-edit");

  kumpulan_tombol_edit.forEach((tombol_edit) => {
    tombol_edit.addEventListener("click", () => {
      const id = tombol_edit.dataset.id;
      const judul = tombol_edit.parentElement.parentElement.querySelector(".judul").innerText;
      const isi = tombol_edit.parentElement.parentElement.querySelector(".isi").innerText;

      // Ngambil [elemen] input
      const elemen_judul = document.querySelector("#judul");
      const elemen_isi = document.querySelector("#isi");

      // Masukkin value yang ada di baris yang dipilih ke form
      elemen_judul.dataset.id = id;
      elemen_judul.value = judul;
      elemen_isi.value = isi;
    });
  });
}

getNotesdata();
