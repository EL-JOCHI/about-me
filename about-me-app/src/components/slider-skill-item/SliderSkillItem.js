import './SliderSkillItem.css';
import {RandomColorFromPalette} from "../../utils/RandomColorFromPalette";

export const SliderSkillItem = ({skill}) => {
    const skillValue = skill ?
            skill.value >= 100 ? 100 : skill.value || 0 :
            0;
    const randomColor = RandomColorFromPalette();
    return (
        <li className="bar-container">
            <span className="bar-expand" style={{ width: skillValue + '%', backgroundColor: randomColor}}>
                <div className="bar-label">{skill?.name}</div>
            </span>
        </li>);
}