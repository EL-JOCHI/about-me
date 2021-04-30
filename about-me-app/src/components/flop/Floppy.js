import './Floppy.css';

export const Floppy = () => {
    return (<>
        <div className="floppy">
            <div className="top">
                <div className="slider">
                </div>
                <div className="label-flop"></div>
            </div>
            <div className="down">
                <div className="notes">
                    <p>My <b>C.V.</b></p>
                    <br/>
                    <p>By: Miguel Hurtado</p>
                    <p>Do <span className="double-line">not</span> erase!</p>
                </div>

            </div>
        </div>
    </>);
}