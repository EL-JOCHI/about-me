import {Progress} from "semantic-ui-react";
import {RandomSemanticColor} from "../../utils/RandomSemanticColor";

export const SliderSkillItemSemantic = ({skill}) => {
    const skillValue = skill ?
        skill.value >= 100 ? 100 : skill.value || 0 :
        0;
    const randomColor = RandomSemanticColor();
    return (
        <Progress percent={skillValue} progress color={randomColor} active>
            {skill.name}
        </Progress>
    );
}