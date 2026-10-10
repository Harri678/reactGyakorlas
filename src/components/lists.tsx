import { elohelyek } from "../data/elohelyek"
import { nepszeruAllatok } from "../data/nepszeruAllatok"
import { taplalkozasok } from "../data/taplalkozas"


function Lists(){
    return(
        <>
        <div className="row mb-2">
            <div className="col-sm-4 kartya">
                <h2>Élőhelyek</h2>

                <ul className="list-group">
                    {elohelyek.map((item, index) =>(
                        <li className="list-group-item" key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="col-sm-4 kartya mb-2">
                <h2>Népszerű állatok</h2>

                <ul className="list-group list-group-numbered">
                    {nepszeruAllatok.map((item, index) =>(
                        <li className="list-group-item" key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="col-sm-4 kartya mb-2">
                <h2>Táplálkozás</h2>

                <ul className="list-group list-group-numbered">
                    {taplalkozasok.map((item, index) =>(
                        <li className="list-group-item" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            </div>
        </>
    )
}

export default Lists