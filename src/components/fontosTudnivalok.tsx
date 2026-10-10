import { fontosTudnivalok } from "../data/fontosTudnivalok";

function Tudnivalok(){
    return(
        <>
            <div className="row">
                <div className="col-sm-12 kartya mb-3">
                <div className="card">
                    <div className="card-header">Amit érdemes megjegyezni</div>

                    <div className="card-body">
                    <ul>
                       {fontosTudnivalok.map((item, index) => (
                        <li key={index}>{item}</li>
                       ))}
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        
        </>
    )
}

export default Tudnivalok