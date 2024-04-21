import CoreConceptItem from "./CoreConceptItem";
import {CORE_CONCEPTS} from "../data";
import Section from "./Section";
export default function CoreConcept(){
    return (
        <Section id="core-concepts" title = "Core Concepts">
          <ul>
            {CORE_CONCEPTS.map(item=>{
              return <CoreConceptItem key={item.title} {...item}/>
            })}
          </ul>
          </Section>
    );
}