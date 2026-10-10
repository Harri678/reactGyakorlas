import { allatok } from "../data/allatok";

function Tablazat(){
    return(
              <div className="row mb-1" id="allatok">
        <div className="col-sm-12 kartya mb-3">
          <h2>Az állatkert néhány lakója</h2>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Név</th>
                <th>Életkor</th>
                <th>Súly</th>
                <th>Veszélyeztetett?</th>
                <th>Kedvenc ételek</th>
              </tr>
            </thead>

            <tbody>
                {allatok.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nev}</td>
                        <td>{item.eletkor}</td>
                        <td>{item.suly}</td>
                        <td>{item.veszelyeztetett ? "Igen" : "Nem"}</td>
                        <td>{item.kedvencEtelek.join(", ")}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Tablazat