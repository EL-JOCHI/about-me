import { SliderSkillItem} from "../slider-skill-item/SliderSkillItem";
import './SliderSkills.css';

export const SliderSkills = ({skills}) => {
    return (
        <div className="bars">
            <ul>
                { skills.map( skill => <SliderSkillItem skill={skill} key={skill.name}/> )}
            </ul>
        </div>
    );
}