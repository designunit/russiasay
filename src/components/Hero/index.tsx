import { Section } from "../Section"
import { CCC } from "../CCC"
import s from './index.module.css'

export const Hero: React.FC = () => {
    return (
        <span
            className={`${s.animatedBg} ${s.container}`}
        >
            <Section
                className={s.section}
            >
                <CCC />
            </Section>
        </span>
    )
}