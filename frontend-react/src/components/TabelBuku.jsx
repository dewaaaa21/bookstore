import React from "react";
function TabelBuku({ showEdit, books, requestToDelete }) {

  function editData(book) {
    showEdit(book);
  }

  function deleteData(book) {
    requestToDelete(book)
  }

  return (
    <div>
        <h4>Tabel Data Buku</h4>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Judul</th>
                    <th>Pengarang</th>
                    <th className="col-3">Aksi</th>
                </tr>
            </thead>
            <tbody>
               {books.map((book, index) =>(
                   <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{book.judul}</td>
                    <td>{book.pengarang}</td>
                    <td>
                        <button className="btn btn-warning mx-2" onClick={() => editData(book)} >Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteData(book)}>Delete</button>
                    </td>
                </tr>
                ))} 
            </tbody>
        </table>
    </div>
  )
}
export default TabelBuku