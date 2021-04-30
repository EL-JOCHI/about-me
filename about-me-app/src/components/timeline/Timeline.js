import './Timeline.css';

export const Timeline = ({timelineData}) => {
    return timelineData ? <ul className="timeline">
        <li>
            <div className={timelineData.right ? 'direction-r' : 'direction-l'}>
                <div className="flag-wrapper">
                    <span className="flag">{timelineData.title}</span>
                    <span className="time-wrapper"><span className="time">{timelineData.time}</span></span>
                </div>
                <div className="desc">{timelineData.description}</div>
            </div>
        </li>
    </ul> : null;
}