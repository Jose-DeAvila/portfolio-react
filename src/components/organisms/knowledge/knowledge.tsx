import KnowledgeFragment from "../../molecules/knowledge-fragment/knowledge-fragment"
import { IKnowledge } from './iknowledge';
import styled from 'styled-components';

const SKnowledge = styled.section`
    text-align: center;
    margin: 30px 0;
    max-width: 1700px;
    margin: 0 auto;

    h2 {
        font-size: 36px;
        margin: 40px 0;
        color: #1f1f1f;
    }

    .knowledge-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 80%;
        margin: 0 auto;
        border: 1px solid #9A9A9A;
        border-radius: 25px;
    }
`

export default function Knowledge({ titleSection, knowledgeFragments }: IKnowledge) {
    return (
        <SKnowledge id="knowledge">
            <h2>{titleSection}</h2>
            <div className="knowledge-container">
                {
                    knowledgeFragments.map((knowledgeFragment, index) => {
                        return (
                            <KnowledgeFragment {...knowledgeFragment} key={index} />
                        )
                    })
                }
            </div>
        </SKnowledge>
    )
}