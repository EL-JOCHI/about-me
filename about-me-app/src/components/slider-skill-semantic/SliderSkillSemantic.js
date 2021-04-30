import { SliderSkillItemSemantic} from "../slider-skill-item-semantic/SliderSkillItemSemantic";
import {Container} from "semantic-ui-react";

export const SliderSkillSemantic = ({skills}) => {
    return (
        <Container>
                { skills.map( skill => <SliderSkillItemSemantic skill={skill} key={skill.name}/> )}
        </Container>
    );
}