import { allatok } from "../data/allatok"
import { allatKartyak } from "../data/allatkartya"

function Kartyak(){
    return(
        <>
            <div className="row mb-1">

                {allatKartyak.map((item, index) => (
                    
                <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100" key={index}>
                    <h2>{item.faj}</h2>

                    <div className="card">
                        <div className="card-body">
                        <h3>{item.nev}</h3>

                        <p>
                            {item.leiras}
                        </p>

                        <p>
                            <strong>Veszélyeztetett:</strong> {allatok[index].veszelyeztetett ? "Igen" : "Nem"}
                        </p>

                        <p className="mb-0">
                            <strong>Kedvenc ételei:</strong> {allatok[index].kedvencEtelek.join(", ")}
                        </p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default Kartyak